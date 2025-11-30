import React, { useEffect, useRef } from 'react';

const Background = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width, height;
    let time = 0;

    // Configuration
    const particleCount = 180; // Denser "messy" look
    const connectionDistance = 140; 
    
    // Theme Colors
    // Purple, Cyan, Green
    const colors = theme === 'dark' 
      ? ['#8b5cf6', '#64ffda', '#10b981'] 
      : ['#6d28d9', '#0071e3', '#059669'];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.reset();
        // Start randomly on screen initially
        this.x = Math.random() * width;
        this.y = Math.random() * height;
      }

      reset() {
        // Reset to Bottom-Right area when they disappear
        this.x = width + Math.random() * 200;
        this.y = height + Math.random() * 200;
        
        // Speed: Move Left and Up (Diagonal)
        this.vx = -1 - Math.random() * 1.5;
        this.vy = -1 - Math.random() * 1.5;
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.size = Math.random() * 2.5;
        
        // "Messy" factor (sine wave offset)
        this.oscillation = Math.random() * 0.05;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Add messy spiral wobble
        this.x += Math.sin(time * this.oscillation + this.phase) * 0.5;

        // Reset if off screen (Top or Left)
        if (this.x < -100 || this.y < -100) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();
      }
    }

    let particles = [];
    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) particles.push(new Particle());
    };

    const animate = () => {
      // Clear canvas (Transparent so body color shows through)
      ctx.clearRect(0, 0, width, height);
      time += 1;

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Draw Connections (Network effect)
        // Optimization: Only connect to nearby particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx*dx + dy*dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Gradient line between colors
            const grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
            grad.addColorStop(0, p.color);
            grad.addColorStop(1, p2.color);
            
            ctx.strokeStyle = grad;
            ctx.globalAlpha = (1 - dist / connectionDistance) * 0.3; // Faint lines
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();

    return () => window.removeEventListener('resize', resize);
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        zIndex: -1, /* Behind everything */
        pointerEvents: 'none'
      }} 
    />
  );
};

export default Background;