class ButtonComponent extends HTMLElement {
    static get observedAttributes() {
      return ['data-variation', 'href'];
    }
  
    constructor() {
      super();
  
      const style = `
        <style>
            a {
                text-decoration: none;
                display: inline-block;
                padding: 1rem 2rem;
                font-family: var(--ff-primary);
                font-weight: var(--fw-semi-bold);
                line-height: var(--lh-100);
                font-size: var(--fs-button);
            }
    
            .filled {
                border-radius: var(--br-sm);
                background-color: var(--clr-primary-500);
                color: var(--clr-neutral-100);
                transition: var(--btn-off);
            }
    
            .filled:hover {
                background-color: var(--clr-primary-700);
                transition: var(--btn-on);
            }
    
            .stroked {
                background-color: transparent;
                color: #007bff;
                border: 2px solid #007bff;
            }
    
            .stroked:hover {
                background-color: #007bff;
                color: #ffffff;
            }

            @media (min-width: 51em) {
                a {
                    padding: 1.5rem 2rem;
                }
            }
        </style>
      `;
  
      const template = document.createElement('template');
      template.innerHTML = style + `
        <a class="btn" target="_blank"><slot></slot></a>
      `;
  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
      this.updateHref();
      this.updateVariation();
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      if (attrName === 'data-variation') {
        this.updateVariation();
      } else if (attrName === 'href') {
        this.updateHref();
      }
    }
  
    updateHref() {
      const link = this.shadowRoot.querySelector('a');
      link.href = this.getAttribute('href') || '#';
    }
  
    updateVariation() {
      const link = this.shadowRoot.querySelector('a');
      const variation = this.getAttribute('data-variation') || 'filled';
      link.className = `btn ${variation}`;
    }
  }
  
  customElements.define('btn-component', ButtonComponent);
  