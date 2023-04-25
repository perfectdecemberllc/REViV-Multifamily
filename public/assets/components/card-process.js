class cardProcess extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    flex: 1 1 25rem;
                    border-radius: var(--br-700);
                    box-shadow: var(--ds-primary);
                    background-color: var(--clr-accent-700);
                    padding: 3.5rem 2rem 3rem 5rem;
                }
                .number {
                    position: absolute;
                    z-index: 1;
                    top: -2rem;
                    left: -2rem;
                    left: 0;
                }
                .number-text {
                    margin: 0;
                    font-family: var(--ff-primary);
                    font-weight: var(--fw-bold);
                    line-height: var(--lh-100);
                    font-size: 20rem;
                    color: var(--clr-accent-100);
                    opacity: .10;
                }
                .title {
                    position: relative;
                    margin: 0;
                    margin-bottom: .5rem;
                    color: var(--clr-primary-500);
                    font-family: var(--ff-primary);
                    font-size: 1.5rem;
                    font-weight: var(--fw-bold);
                    line-height: var(--lh-200);
                    z-index: 2;   
                }
                .text {
                    position: relative;
                    margin: 0;
                    color: var(--clr-neutral-100);
                    font-family: var(--ff-primary);
                    font-size: var(--fs-body);
                    font-weight: var(--fw-normal);
                    line-height: var(--lh-600);
                    z-index: 2;
                }
            </style>

            <div class="number">
                <h5 class="number-text"></h5>
            </div>
            <h1 class="title"></h1>
            <h3 class="text"></h3>
        `;
    }

    connectedCallback() {
        const number = this.getAttribute('number');
        const title = this.getAttribute('title');
        const text = this.getAttribute('text');
    
        if (number) {
            this.shadowRoot.querySelector('.number-text').textContent = number;
        } else {
            this.shadowRoot.querySelector('.number').style.display = 'none';
        }
        
        if (title) {
            this.shadowRoot.querySelector('.title').textContent = title;
        } else {
            this.shadowRoot.querySelector('.title').style.display = 'none';
        }

        if (text) {
            this.shadowRoot.querySelector('.text').textContent = text;
        } else {
            this.shadowRoot.querySelector('.text').style.display = 'none';
        }
    }
    
    static get observedAttributes() {
        return ['number', 'text', 'title'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === null) {
          this.shadowRoot.querySelector(`.${name}`).style.display = 'none';
        } else {
          this.shadowRoot.querySelector(`.${name}`).style.display = '';
    
            if (name === 'number') {
                this.shadowRoot.querySelector('.number-text').textContent = newValue;
            } else if (name === 'text') {
                this.shadowRoot.querySelector('.text').textContent = newValue;
            } else if (name === 'title') {
                this.shadowRoot.querySelector('.title').textContent = newValue;
            }
        }
    }
    
}

window.customElements.define('card-process', cardProcess);
