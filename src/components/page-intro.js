const pageIntro = document.createElement("template");
pageIntro.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.25rem;
            margin: 0 auto;
            max-width: 85ch;
            text-align: center;
        }

        slot[name="heading"] {
            font-family: var(--ff-heading);
            font-weight: var(--fw-bold);
            font-size: var(--fs-heading-md);
            line-height: var(--lh-200);
            color: var(--clr-primary-500);
        }

        slot[name="description"] {
            font-family: var(--ff-body);
            font-weight: var(--fw-regular);
            font-size: var(--fs-body);
            line-height: var(--lh-700);
            color: var(--clr-neutral-900);
            max-width: 65ch;
        }

        @media (min-width: 375px) {
            :host {
                gap: 1.5rem;
            }
        }

    </style>
    
    <slot name="heading"></slot>
    <slot name="description"></slot>
    
`;

class page_intro extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = pageIntro.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("page-intro", page_intro);