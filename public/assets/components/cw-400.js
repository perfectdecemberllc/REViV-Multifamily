const contentWrapper400 = document.createElement("template");
contentWrapper400.innerHTML = `
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

        slot[name="label"] {
            font-family: var(--ff-label);
            font-weight: var(--fw-regular);
            font-size: var(--fs-label-md);
            line-height: var(--lh-100);
            color: var(--clr-neutral-900);
            margin-bottom: .75rem;
        }

        slot[name="heading"] {
            font-family: var(--ff-heading);
            font-weight: var(--fw-bold);
            font-size: var(--fs-heading-lg);
            line-height: var(--lh-300);
            color: var(--clr-accent-800);
        }

        slot[name="description"] {
            font-family: var(--ff-body);
            font-weight: var(--fw-regular);
            font-size: var(--fs-body);
            line-height: var(--lh-700);
            color: var(--clr-neutral-500);
        }

        :host([role="testimonial"]) * .quotes {
            display: block;
        }

        :host([role="testimonial"]) * slot[name="description"] {
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
                    <slot name="label"></slot>
                    <img class="quotes" src="assets/images/quotes.png">
                </div>
                <slot name="heading"></slot>
            </div>
            <slot name="description"></slot>
        </div>
        <slot name="button"></slot>
    
`;

class cw400 extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = contentWrapper400.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("cw-400", cw400);