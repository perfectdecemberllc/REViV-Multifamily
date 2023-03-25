const contentWrapper900 = document.createElement("template");
contentWrapper900.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: fit-content;
        }

        .heading-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            max-width: 65ch;
        }

        slot[name="label-text"] {
            font-family: var(--ff-primary);
            font-weight: var(--fw-regular);
            line-height: var(--lh-100);
            font-size: var(--fs-label-sm);
            color: var(--clr-neutral-100);
        }

        slot[name="heading-text"] {
            font-family: var(--ff-primary);
            font-weight: var(--fw-bold);
            line-height: var(--lh-300);
            font-size: var(--fs-heading-xl);
            color: var(--clr-neutral-100);
        }

    </style>

    
    <div class="heading-container">
        <slot name="label-text"></slot>
        <slot name="heading-text"></slot>
    </div>
    <slot name="button"></slot>
    


`;

class cw900 extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = contentWrapper900.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("cw-900", cw900);