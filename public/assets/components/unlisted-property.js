class unlistedProperty extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                width: 14.25rem;
            }

            .title {
                margin: 0;
                font-family: var(--ff-primary);
                font-weight: var(--fw-semi-bold);
                font-size: var(--fs-300);
                color: var(--clr-accent-800);
            }

            .location {
                margin: 0;
                font-family: var(--ff-primary);
                font-weight: var(--fw-regular);
                font-size: var(--fs-100);
                color: var(--clr-neutral-500);
            }

            

        </style>
            <h3 class="title"></h3>
            <h5 class="location"></h5>
            
        `;
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const location = this.getAttribute('location');
      
        if (title) {
            this.shadowRoot.querySelector('.title').textContent = title;
        } else {
            this.shadowRoot.querySelector('.title').style.display = 'none';
        }
      
        if (location) {
            this.shadowRoot.querySelector('.location').textContent = location;
        } else {
            this.shadowRoot.querySelector('.location').style.display = 'none';
        }
    }
    
    static get observedAttributes() {
        return ['title', 'location'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === null) {
          this.shadowRoot.querySelector(`.${name}`).style.display = 'none';
        } else {
          this.shadowRoot.querySelector(`.${name}`).style.display = '';
    
            if (name === 'title') {
            this.shadowRoot.querySelector('.title').textContent = newValue;
        } else if (name === 'location') {
            this.shadowRoot.querySelector('.location').textContent = newValue;
          }
        }
    }
    
}

window.customElements.define('unlisted-property', unlistedProperty);
