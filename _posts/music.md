---
layout: default
---
<!-- index.md -->
---
layout: default
title: Inicio
---

<div class="hero">
  <div class="terminal-header">
    <div class="terminal-dots">
      <span></span><span></span><span></span>
    </div>
    <div class="terminal-title">guest@fisico-creativo:~</div>
  </div>
  
  <div class="hero-content">
    <h1>
      {% include decrypted-text.html 
         text="David Vargas Madrigal" 
         speed="25"
         sequential="true"
         fontSize="3rem" %}
    </h1>
    
    <p class="subtitle">
      {% include decrypted-text.html 
         text="Físico | Sonificación de Datos | Creative Coder" 
         speed="40"
         maxIterations="8"
         characters="█▓▒░|/\\-"
         animateOn="view" %}
    </p>
    
    <div class="tagline">
      <span data-decrypt="Transformando ecuaciones en melodías"
            data-speed="50"
            data-chars="∫∑∏√∞∂∇∈∉∩∪⇒⇔∀∃∅∆"
            style="font-size: 1.1rem;">
        Transformando ecuaciones en melodías
      </span>
    </div>
  </div>
</div>

<!-- Cargar scripts -->
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
<script src="{{ '/assets/js/DecryptedText.js' | relative_url }}"></script>
<script src="{{ '/assets/js/DecryptedTextSimple.js' | relative_url }}"></script>
