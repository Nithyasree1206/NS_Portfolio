import React, { useEffect, useRef } from 'react';

const Background3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    const particleCount = 70;
    let mouse = { x: null, y: null, radius: 150 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    const mouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    window.addEventListener('mousemove', mouseMove);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * canvas.width;
        this.size = 1.2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.baseZ = this.z;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        // Purple/violet color scheme
        const colors = ['#8b5cf6', '#a78bfa', '#6366f1', '#7c3aed'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            this.x -= directionX * force * 4;
            this.y -= directionY * force * 4;
          }
        }
      }

      draw() {
        const perspective = 300 / (300 + this.z);
        const drawX = (this.x - canvas.width / 2) * perspective + canvas.width / 2;
        const drawY = (this.y - canvas.height / 2) * perspective + canvas.height / 2;
        const drawSize = this.size * perspective * 2;

        ctx.beginPath();
        ctx.arc(drawX, drawY, drawSize, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = perspective * 0.6;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const perspectiveA = 300 / (300 + particles[a].z);
          const perspectiveB = 300 / (300 + particles[b].z);
          const drawAx = (particles[a].x - canvas.width / 2) * perspectiveA + canvas.width / 2;
          const drawAy = (particles[a].y - canvas.height / 2) * perspectiveA + canvas.height / 2;
          const drawBx = (particles[b].x - canvas.width / 2) * perspectiveB + canvas.width / 2;
          const drawBy = (particles[b].y - canvas.height / 2) * perspectiveB + canvas.height / 2;

          let dx = drawAx - drawBx;
          let dy = drawAy - drawBy;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.strokeStyle = '#8b5cf6';
            ctx.globalAlpha = (1 - dist / 130) * 0.12;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(drawAx, drawAy);
            ctx.lineTo(drawBx, drawBy);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    />
  );
};

export default Background3D;
