class cardMd extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    max-width: 28.3125rem;
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
                    padding-top: 2rem;
                    padding-right: 1.5rem;
                    padding-bottom: 2.5rem;
                    padding-left: 0;
                }
                .content {
                    display: flex;
                    gap: 1rem;
                    align-items: center;
                }
                .details {
                    display: flex;
                    flex-direction: column;
                }
                .details .address {
                    display: flex;
                    align-items: center;
                    padding-top: 3px;
                    gap: .25rem;
                }
                .details slot[name="address"] {
                    font-family: var(--ff-label);
                    font-weight: var(--fw-regular);
                    font-size: var(--fs-label-sm);
                    color: var(--clr-primary-500);
                }
                .details slot[name="title"] {
                    font-family: var(--ff-label);
                    font-weight: var(--fw-semi-bold);
                    font-size: var(--fs-label-lg);
                    color: var(--clr-neutral-500);
                }
                .content-container a {
                    color: #216AA2;
                    text-decoration: none;
                }
                slot[name="image"]::slotted(img) {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .triangle {
                    transform: translateX(-100%);
                    transition: transform 0.3s;
                }
                .content-container:hover .triangle {
                    transform: translateX(0%);
                }
            </style>
            <div>
                <slot name="image"></slot>
                <div class="content-container">
                    <div class="content">
                        <svg class="triangle" xmlns="http://www.w3.org/2000/svg" width="14" height="28" fill="none" viewBox="0 0 14 28">
                            <path fill="#216AA2" d="m0 28 14-14L0 0v28Z"/>
                        </svg>
                        <div class="details">
                            <div class="address">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="none" viewBox="0 0 14 16">
                                    <path stroke="#00968D" stroke-width="1.5" d="M7 8.953a2.08 2.08 0 1 0 0-4.16 2.08 2.08 0 0 0 0 4.16Z"/>
                                    <path stroke="#00968D" stroke-width="1.5" d="M1.413 5.66c1.314-5.774 9.867-5.767 11.174.006.766 3.387-1.34 6.254-3.187 8.027a3.462 3.462 0 0 1-4.807 0C2.753 11.92.647 9.046 1.413 5.66Z"/>
                                </svg>
                                <slot name="address"></slot>
                            </div>
                            <slot name="title"></slot>
                        </div>
                    </div>
                    <a href="${this.getAttribute('link')}" target="_blank">Read More</a>
                </div>
            </div>
        `;
    }
}

window.customElements.define('card-md', cardMd);