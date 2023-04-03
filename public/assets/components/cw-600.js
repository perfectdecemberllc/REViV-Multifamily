const contentWrapper600 = document.createElement("template");
contentWrapper600.innerHTML = `
    <style>
       :host {
            display: grid;
            gap: 1rem;
       }

        slot[name="heading"] {
            font-family: var(--ff-heading);
            font-weight: var(--fw-regular);
            font-size: var(--fs-heading-sm);
            line-height: var(--lh-100);
            color: var(--clr-accent-700);
        }

        slot[name="description"] {
            font-family: var(--ff-body);
            font-weight: var(--fw-regular);
            font-size: var(--fs-body);
            line-height: var(--lh-600);
            color: var(--clr-neutral-500);
        }
    
    </style>

    <slot name="icon"></slot>
    <div class="content-container">
        <slot name="heading"></slot>
        <slot name="description"></slot>
    </div>

`;

class cw600 extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = contentWrapper600.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("cw-600", cw600);