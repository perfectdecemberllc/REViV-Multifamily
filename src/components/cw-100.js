const contentWrapper100 = document.createElement("template");
contentWrapper100.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: column;
            gap: .25rem;
            max-width: 10.625rem;
            flex: 0 0 10.625rem;
        }

        slot[name="heading"] {
            font-family: var(--ff-heading);
            font-weight: var(--fw-bold);
            font-size: var(--fs-700);
            line-height: var(--lh-100);
            color: var(--clr-neutral-100);
        }

        slot[name="description"] {
            font-family: var(--ff-body);
            font-weight: var(--fw-regular);
            font-size: var(--fs-50);
            line-height: var(--lh-600);
            color: var(--clr-neutral-100);
        }

    </style>

    <slot name="heading"></slot>
    <slot name="description"></slot>
    

`;

class cw100 extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = contentWrapper100.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("cw-100", cw100);