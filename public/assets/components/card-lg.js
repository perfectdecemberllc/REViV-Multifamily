class cardLg extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 26.125rem;
                    min-width: 20rem;
                    border-radius: var(--br-700);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .content-container {
                    display: grid;
                    gap: 2rem;
                    padding-top: 1.5rem;
                    padding-right: 1.5rem;
                    padding-bottom: 2rem;
                    padding-left: 1.5rem;
                    background-color: white;
                }
                .details {
                    display: grid;
                    gap: .5rem;
                }
                .date-container {
                    display: flex;
                    gap: .25rem;
                }
                .date {
                    margin: 0;
                    font-family: var(--ff-label);
                    font-weight: var(--fw-regular);
                    font-size: var(--fs-label-sm);
                    line-height: var(--lh-200);
                    color: var(--clr-primary-500);
                }
                .title {
                    margin: 0;
                    font-family: var(--ff-label);
                    font-weight: var(--fw-regular);
                    font-size: var(--fs-label-lg);
                    color: var(--clr-neutral-500);
                }
                .content-container a {
                    color: var(--clr-primary-500);
                    text-decoration: none;
                    transition: var(--btn-off);
                }
                .content-container a:hover {
                    color: var(--clr-primary-800);
                    transition: var(--btn-on);
                }
                picture {
                    display: block;
                    width: 100%;
                    height: 25.6875rem;
                }
                img {
                    width: 100%;
                    max-width: none;
                    height: 100%;
                    object-fit: cover;
                }
                .text-button {
                    font-family: var(--ff-primary);
                    font-weight: var(--fw-semi-bold);
                    line-height: var(--lh-100);
                    font-size: var(--fs-50);
                }
            </style>

            <div>
                <picture>
                    <source srcset="" media="(min-resolution: 3dppx)">
                    <source srcset="" media="(min-resolution: 2dppx)">
                    <img src="" alt="image">
                </picture>
                <div class="content-container">
                    <div class="details">
                        <div class="date-container">
                        <h5 class="date">Completed: <span class="date-text"></span></h5>
                        </div>
                        <h3 class="title"></h3>
                    </div>
                    <a class="text-button view-details" href="" target="_blank">View Project Details</a>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const date = this.getAttribute('date');
        const title = this.getAttribute('title');
        const link = this.getAttribute('link');
        const image2x = this.getAttribute('image-2x');
        const image3x = this.getAttribute('image-3x');
        const imageFallback = this.getAttribute('image-fallback');
    
        if (date) {
            this.shadowRoot.querySelector('.date-text').textContent = date;
        } else {
            this.shadowRoot.querySelector('.date').style.display = 'none';
        }
      
        if (title) {
            this.shadowRoot.querySelector('.title').textContent = title;
        } else {
            this.shadowRoot.querySelector('.title').style.display = 'none';
        }
      
        if (link) {
            this.shadowRoot.querySelector('.view-details').setAttribute('href', link);
        } else {
            this.shadowRoot.querySelector('.view-details').style.display = 'none';
        }

        if (image3x) {
            this.shadowRoot.querySelector('source[media="(min-resolution: 3dppx)"]').setAttribute('srcset', image3x);
        }

        if (image2x) {
            this.shadowRoot.querySelector('source[media="(min-resolution: 2dppx)"]').setAttribute('srcset', image2x);
        }
      
        if (imageFallback) {
            this.shadowRoot.querySelector('img').setAttribute('src', imageFallback);
        }
    }
    
    static get observedAttributes() {
        return ['date', 'title', 'link', 'image-2x', 'image-3x', 'image-fallback'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === null) {
          this.shadowRoot.querySelector(`.${name}`).style.display = 'none';
        } else {
          this.shadowRoot.querySelector(`.${name}`).style.display = '';
    
            if (name === 'date') {
                this.shadowRoot.querySelector('.date-text').textContent = newValue;
            } else if (name === 'title') {
                this.shadowRoot.querySelector('.title').textContent = newValue;
            } else if (name === 'link') {
                this.shadowRoot.querySelector('.view-details').setAttribute('href', newValue);
            }
        }
        if (name === 'image-3x') {
            this.shadowRoot.querySelector('source[media="(min-resolution: 3dppx)"]').setAttribute('srcset', newValue);
        } else if (name === 'image-2x') {
            this.shadowRoot.querySelector('source[media="(min-resolution: 2dppx)"]').setAttribute('srcset', newValue);
        } else if (name === 'image-fallback') {
            this.shadowRoot.querySelector('img').setAttribute('src', newValue);
        }
    }
    
}

window.customElements.define('card-lg', cardLg);
