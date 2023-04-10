class CW400 extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                max-width: 34.5rem;
            }

            .content-container {
                margin-bottom: 1.5rem;
            }

            .heading-container {
                margin-bottom: 1rem;
                max-width: 45ch;
            }

            .label-container {
                display: flex;
                gap: 1.5rem;
                align-items: end;

            }

            .quotes {
                display: none;
                width: 100%;
                max-width: 4.5rem;
            }

            .label {
                font-family: var(--ff-label);
                font-weight: var(--fw-regular);
                font-size: var(--fs-label-md);
                line-height: var(--lh-100);
                color: var(--clr-neutral-900);
                margin: 0;
                margin-bottom: .75rem;
            }

            .heading {
                font-family: var(--ff-heading);
                font-weight: var(--fw-bold);
                font-size: var(--fs-heading-lg);
                line-height: var(--lh-300);
                color: var(--clr-accent-800);
                margin: 0;
            }

            .description {
                font-family: var(--ff-body);
                font-weight: var(--fw-regular);
                font-size: var(--fs-body);
                line-height: var(--lh-700);
                color: var(--clr-neutral-500);
            }

            :host([role="testimonial"]) * .quotes {
                display: block;
            }

            :host([role="testimonial"]) * .description {
                font-size: var(--fs-100);
                width: 50ch;
            }

            @media (min-width: 375px) {
                .content-container {
                    margin-bottom: 1rem;
                }

                .heading-container {
                    margin-bottom: .5rem;
                }

            }

            @media (min-width: 1024px) {
                .content-container {
                    margin-bottom: 1.75rem;
                }
            }

        </style>

            <div class="content-container">
                <div class="heading-container">
                    <div class="label-container">
                        <h5 class="label"></h5>
                        <img class="quotes" src="assets/images/quotes.png">
                    </div>
                    <h2 class="heading"></h2>
                </div>
                <p class="description"></p>
            </div>
            <slot name="button"></slot>
        `;
    }

    connectedCallback() {
        const label = this.getAttribute('label');
        const heading = this.getAttribute('heading');
        const description = this.getAttribute('description');
    
        if (label) {
            this.shadowRoot.querySelector('.label').textContent = label;
        } else {
            this.shadowRoot.querySelector('.label').style.display = 'none';
        }
      
        if (heading) {
            this.shadowRoot.querySelector('.heading').textContent = heading;
        } else {
            this.shadowRoot.querySelector('.heading').style.display = 'none';
        }
      
        if (description) {
            this.shadowRoot.querySelector('.description').textContent = description;
        } else {
            this.shadowRoot.querySelector('.description').style.display = 'none';
        }
    }
    
    static get observedAttributes() {
        return ['label', 'heading', 'description'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === null) {
          this.shadowRoot.querySelector(`.${name}`).style.display = 'none';
        } else {
          this.shadowRoot.querySelector(`.${name}`).style.display = '';
    
            if (name === 'label') {
            this.shadowRoot.querySelector('.label').textContent = newValue;
            } else if (name === 'heading') {
            this.shadowRoot.querySelector('.heading').textContent = newValue;
        } else if (name === 'description') {
            this.shadowRoot.querySelector('.description').textContent = newValue;
          }
        }
    }
    
}

window.customElements.define('content-wrapper-400', CW400);
