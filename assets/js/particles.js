document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  canvas.style.opacity = '0.25'; // Muy sutil
  document.body.appendChild(canvas);
  
  // Resize
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  
  // Partículas inspiradas en fenómenos físicos
  const particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 20), 80);
  
  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * canvas.height;
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = -10;
      this.size = Math.random() * 2 + 0.5;
      this.speed = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.7 ? '#000000' : '#cccccc';
      this.oscillation = Math.random() * Math.PI * 2;
    }
    
    update() {
      this.y += this.speed;
      this.x += Math.sin(this.oscillation + this.y * 0.01) * 0.5;
      this.oscillation += 0.05;
      
      if (this.y > canvas.height) {
        this.reset();
      }
    }
    
    draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      
      // Trazo sutil
      ctx.beginPath();
      ctx.strokeStyle = this.color + '30';
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x - Math.sin(this.oscillation) * 8, this.y - 8);
      ctx.stroke();
    }
  }
  
  // Inicializar partículas
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  // Animación
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    
    requestAnimationFrame(animate);
  }
  
  animate();
});
