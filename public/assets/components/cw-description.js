class Description extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                max-width: 75ch;
            }
            .text {
                font-family: var(--ff-body);
                font-weight: var(--fw-regular);
                font-size: var(--fs-50);
                line-height: var(--lh-700);
                color: var(--clr-neutral-600);
                margin: 0;
            }
        </style>

        <p class="text"></p>
      `;
    }
  
    connectedCallback() {
      const text = this.getAttribute('text');
      if (text) {
        this.shadowRoot.querySelector('.text').textContent = text;
      }
    }
  
    static get observedAttributes() {
      return ['text'];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'text') {
        this.shadowRoot.querySelector('.text').textContent = newValue;
      }
    }
}
  
customElements.define('cw-description', Description);