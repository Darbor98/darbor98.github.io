// assets/js/DecryptedTextSimple.js
(function() {
  'use strict';
  
  function DecryptedTextSimple({
    text,
    speed = 50,
    maxIterations = 10,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    elementId
  }) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let isHovering = false;
    let interval;
    let currentIteration = 0;
    
    const originalText = text;
    const chars = characters.split('');
    
    function getRandomChar() {
      return chars[Math.floor(Math.random() * chars.length)];
    }
    
    function scramble() {
      let scrambled = '';
      for (let i = 0; i < originalText.length; i++) {
        if (originalText[i] === ' ') {
          scrambled += ' ';
        } else {
          scrambled += getRandomChar();
        }
      }
      element.textContent = scrambled;
    }
    
    function reveal() {
      let revealed = '';
      const progress = currentIteration / maxIterations;
      
      for (let i = 0; i < originalText.length; i++) {
        if (Math.random() > progress) {
          revealed += getRandomChar();
        } else {
          revealed += originalText[i];
        }
      }
      
      element.textContent = revealed;
      element.style.color = `rgb(${86 + progress * 169}, ${134 + progress * 121}, 255)`;
    }
    
    function startAnimation() {
      isHovering = true;
      currentIteration = 0;
      
      interval = setInterval(() => {
        if (currentIteration < maxIterations) {
          reveal();
          currentIteration++;
        } else {
          element.textContent = originalText;
          element.style.color = '#3a86ff';
          clearInterval(interval);
        }
      }, speed);
    }
    
    function stopAnimation() {
      isHovering = false;
      clearInterval(interval);
      element.textContent = originalText;
      element.style.color = '#e6edf3';
    }
    
    // Event listeners
    element.addEventListener('mouseenter', startAnimation);
    element.addEventListener('mouseleave', stopAnimation);
    
    // Estilos iniciales
    element.style.cssText = `
      font-family: 'JetBrains Mono', monospace;
      cursor: pointer;
      transition: color 0.3s ease;
      display: inline-block;
    `;
    
    // Cleanup
    return () => {
      element.removeEventListener('mouseenter', startAnimation);
      element.removeEventListener('mouseleave', stopAnimation);
    };
  }
  
  // Inicializar todos los elementos con data-decrypt
  function initAllDecryptedTexts() {
    document.querySelectorAll('[data-decrypt]').forEach(el => {
      const text = el.getAttribute('data-decrypt');
      const speed = parseInt(el.getAttribute('data-speed')) || 50;
      const iterations = parseInt(el.getAttribute('data-iterations')) || 10;
      const chars = el.getAttribute('data-chars') || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
      
      // Asignar ID único
      const id = 'decrypt-' + Math.random().toString(36).substr(2, 9);
      el.id = id;
      
      DecryptedTextSimple({
        text: text,
        speed: speed,
        maxIterations: iterations,
        characters: chars,
        elementId: id
      });
    });
  }
  
  // Exponer globalmente
  window.DecryptedTextSimple = DecryptedTextSimple;
  window.initDecryptedTexts = initAllDecryptedTexts;
  
  // Auto-inicializar cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllDecryptedTexts);
  } else {
    initAllDecryptedTexts();
  }
})();
