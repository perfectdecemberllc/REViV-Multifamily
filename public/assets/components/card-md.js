class cardMd extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 30.3125rem;
                    min-width: 18rem;
                    border-radius: var(--br-700);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                }
                .content-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                    padding-top: 2rem;
                    padding-right: 1.5rem;
                    padding-bottom: 2.5rem;
                    padding-left: 1.25rem;
                }
                .content {
                    display: flex;
                    gap: 1.25rem;
                    align-items: center;
                }
                .details {
                    display: flex;
                    gap: .125rem;
                    flex-direction: column;
                }
                .details .address-container {
                    display: flex;
                    align-items: baseline;
                    padding-top: 3px;
                    gap: .25rem;
                }
                .address {
                    font-family: var(--ff-label);
                    font-weight: var(--fw-regular);
                    font-size: var(--fs-label-sm);
                    line-height: var(--lh-200);
                    color: var(--clr-primary-500);
                    margin: 0;
                }
                .title {
                    font-family: var(--ff-label);
                    font-weight: var(--fw-regular);
                    font-size: var(--fs-label-lg);
                    color: var(--clr-neutral-500);
                    margin: 0;
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
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }
                .text-button {
                    font-family: var(--ff-primary);
                    font-weight: var(--fw-semi-bold);
                    line-height: var(--lh-100);
                    font-size: var(--fs-button);
                }
                .triangle {
                    display: none;
                    transform: translateX(-100%);
                    transition: transform 0.3s;
                }
                .content-container:hover .triangle {
                    transform: translateX(0%);
                }
                @media (min-width: 51em) {
                    .content-container {
                        padding-left: 0;
                        gap: 0;
                    }
                    .details .address-container {
                        align-items: center;
                    }
                    .triangle {
                        display: block;
                    }
                }
            </style>
            <div>
                <picture>
                    <source media="(min-resolution: 3dppx)">
                    <source media="(min-resolution: 2dppx)">
                    <img alt="image">
                </picture>
                <div class="content-container">
                    <div class="content">
                        <svg class="triangle" xmlns="http://www.w3.org/2000/svg" width="14" height="28" fill="none" viewBox="0 0 14 28">
                            <path fill="#216AA2" d="m0 28 14-14L0 0v28Z"/>
                        </svg>
                        <div class="details">
                            <div class="address-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none" viewBox="0 0 14 16">
                                    <path stroke="#00968D" stroke-width="1.5" d="M7 8.953a2.08 2.08 0 1 0 0-4.16 2.08 2.08 0 0 0 0 4.16Z"/>
                                    <path stroke="#00968D" stroke-width="1.5" d="M1.413 5.66c1.314-5.774 9.867-5.767 11.174.006.766 3.387-1.34 6.254-3.187 8.027a3.462 3.462 0 0 1-4.807 0C2.753 11.92.647 9.046 1.413 5.66Z"/>
                                </svg>
                                <h5 class="address"></h5>
                            </div>
                            <h3 class="title"></h3>
                        </div>
                    </div>
                    <a class="text-button" href="" target="_blank">Read More</a>
                </div>
            </div>
        `;
    }
        
    connectedCallback() {
        const address = this.getAttribute('address');
        const title = this.getAttribute('title');
        const link = this.getAttribute('link');
        const image2x = this.getAttribute('image-2x');
        const image3x = this.getAttribute('image-3x');
        const imageFallback = this.getAttribute('image-fallback');

        if (address) {
            this.shadowRoot.querySelector('.address').textContent = address;
        } else {
            this.shadowRoot.querySelector('.date').style.display = 'none';
        }
        
        if (title) {
            this.shadowRoot.querySelector('.title').textContent = title;
        } else {
            this.shadowRoot.querySelector('.title').style.display = 'none';
        }
        
        if (link) {
            this.shadowRoot.querySelector('.text-button').setAttribute('href', link);
        } else {
            this.shadowRoot.querySelector('.text-button').style.display = 'none';
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
        return ['address', 'title', 'link', 'image-2x', 'image-3x', 'image-fallback'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === null) {
          this.shadowRoot.querySelector(`.${name}`).style.display = 'none';
        } else {
          this.shadowRoot.querySelector(`.${name}`).style.display = '';
    
            if (name === 'address') {
                this.shadowRoot.querySelector('.address').textContent = newValue;
            } else if (name === 'title') {
                this.shadowRoot.querySelector('.title').textContent = newValue;
            } else if (name === 'link') {
                this.shadowRoot.querySelector('.text-button').setAttribute('href', newValue);
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

window.customElements.define('card-md', cardMd);
