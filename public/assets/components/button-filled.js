const buttonPrimary = document.createElement("template");
buttonPrimary.innerHTML = `
    <style>
        :host {
            display: block;
            border-radius: var(--br-sm);
            background-color: var(--clr-primary-500);
            width: fit-content;
        }

        :host:hover {
            background-color: var(--clr-primary-700);
        }

        ::slotted(label) {
            display: block;
            padding: 1.5rem 2rem 1.625rem;
            font-family: var(--ff-primary);
            font-weight: var(--fw-semi-bold);
            line-height: var(--lh-100);
            font-size: var(--fs-button);
            color: var(--clr-neutral-100);
        }
    </style>

    <slot name="button-label"></slot>
    
`;

class buttonFilled extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = buttonPrimary.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("button-filled", buttonFilled);