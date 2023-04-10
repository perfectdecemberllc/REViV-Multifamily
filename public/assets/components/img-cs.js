class imgCs extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            height: 20.625rem;
            max-width: 16.875rem;
            border-radius: var(--br-700);
            overflow: hidden;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        </style>
        
        <picture>
          <source srcset="" media="(min-resolution: 3dppx)">
          <source srcset="" media="(min-resolution: 2dppx)">
          <img src="" alt="Banner image">
        </picture>
      `;
    }
  
    connectedCallback() {
      const image2x = this.getAttribute('image-2x');
      const image3x = this.getAttribute('image-3x');
      const imageFallback = this.getAttribute('image-fallback');
  
      if (image2x) {
        this.shadowRoot.querySelector('source[media="(min-resolution: 2dppx)"]').setAttribute('srcset', image2x);
      }
  
      if (image3x) {
        this.shadowRoot.querySelector('img').setAttribute('srcset', image3x);
      }
  
      if (imageFallback) {
        this.shadowRoot.querySelector('img').setAttribute('src', imageFallback);
      }
    }
  
    static get observedAttributes() {
      return ['image-2x', 'image-3x', 'image-fallback'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'image-3x') {
        this.shadowRoot.querySelector('source[media="(min-resolution: 3dppx)"]').setAttribute('srcset', newValue);
      } else if (name === 'image-2x') {
        this.shadowRoot.querySelector('source[media="(min-resolution: 2dppx)"]').setAttribute('srcset', newValue);
      } else if (name === 'image-fallback') {
        this.shadowRoot.querySelector('img').setAttribute('src', newValue);
      }
    }
}
  
  customElements.define('img-cs', imgCs);
  