class ChecklistItem extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: flex;
                gap: 1rem;
                align-items: baseline;
                max-width: 65ch;
            }
            img {
                display: block;
            }
            .text {
                font-family: var(--ff-body);
                font-weight: var(--fw-regular);
                font-size: var(--fs-body);
                line-height: var(--lh-400);
                color: var(--clr-accent-900);
                margin: 0;
            }
        </style>

        <div>
            <img src="assets/images/checkmark.png" alt="Checkmark">
        </div>
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
  
customElements.define('checklist-item', ChecklistItem);