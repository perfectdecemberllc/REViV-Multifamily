const contentWrapper300 = document.createElement("template");
contentWrapper300.innerHTML = `
    <style>
        :host {
            display: flex;
            gap: 1.25rem;
            max-width: 65ch;
        }

        :host([role="list-item"]) {
            max-width: 29.375rem;
        }

        slot[name="large-icon"] {
            display: none;
        }

        .heading-container {
            display: flex;
            gap: .5rem;
            align-items: center;
            margin-bottom: .5rem;
        }

        slot[name="heading"] {
            font-family: var(--ff-heading);
            font-weight: var(--fw-bold);
            font-size: var(--fs-heading-sm);
            line-height: var(--lh-200);
            color: var(--clr-accent-500);
        }

        slot[name="description"] {
            font-family: var(--ff-body);
            font-weight: var(--fw-regular);
            font-size: var(--fs-body);
            line-height: var(--lh-600);
            color: var(--clr-neutral-500);
        }

        @media (min-width: 1024px) {
            slot[name="large-icon"] {
                display: block;
            }

            slot[name="small-icon"] {
                display: none;
            }
        }

    </style>

    <slot name="large-icon"></slot>
    <div class="content-container">
        <div class="heading-container">
            <slot name="small-icon"></slot>
            <slot name="heading"></slot>
        </div>
        <slot name="description"></slot>
    </div>

`;

class cw300 extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = contentWrapper300.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("cw-300", cw300);