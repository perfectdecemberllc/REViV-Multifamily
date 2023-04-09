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
                slot[name="image"]::slotted(div) {
                    width: 100%;
                    height: 411px;
                    background-color: var(--clr-neutral-500);
                }
                .text-button {
                    font-family: var(--ff-primary);
                    font-weight: var(--fw-semi-bold);
                    line-height: var(--lh-100);
                    font-size: var(--fs-50);
                }
                @media (min-width: 51em) {
                    
                }
            </style>
            <div>
                <slot name="image"></slot>
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
        const href = this.getAttribute('href');
    
        this.shadowRoot.querySelector('.date-text').textContent = date;
        this.shadowRoot.querySelector('.title').textContent = title;
        this.shadowRoot.querySelector('.view-details').setAttribute('href', href);
    }
    
    static get observedAttributes() {
        return ['date', 'title', 'href'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'date') {
          this.shadowRoot.querySelector('.date-text').textContent = newValue;
        } else if (name === 'title') {
          this.shadowRoot.querySelector('.title').textContent = newValue;
        } else if (name === 'href') {
          this.shadowRoot.querySelector('.view-details').setAttribute('href', newValue);
        }
    }
}

window.customElements.define('card-lg', cardLg);
