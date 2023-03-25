const contentWrapper200 = document.createElement("template");
contentWrapper200.innerHTML = `
    <style>
        :host {
            display: grid;
            gap: 1rem;
            grid-auto-flow: row;
            grid-auto-rows: auto 1fr;
        }
        .content-container {
            display: grid;
            grid-auto-flow: row;
            grid-auto-rows: auto 1fr;
            gap: .75rem;
        }
        slot[name="image"] {
            display: block;
            border-radius: var(--br-700);
            overflow: hidden;
        }
        slot[name="heading"] {
            font-family: var(--ff-heading);
            font-weight: var(--fw-bold);
            font-size: var(--fs-300);
            line-height: var(--lh-200);
            color: var(--clr-accent-500);
        }
        slot[name="description"] {
            font-family: var(--ff-body);
            font-weight: var(--fw-regular);
            font-size: var(--fs-100);
            line-height: var(--lh-600);
            color: var(--clr-neutral-500);
        }
        @media (min-width: 33em) {
            :host {
                gap: 2rem;
                grid-auto-flow: column;
                grid-auto-columns: 1fr;
            }
            .content-container {
                gap: 1.25rem;
            }
        }
        @media (min-width: 51em) {
            :host {
                gap: 2rem;
                grid-auto-flow: row;
                grid-auto-rows: auto 1fr;
            }
        }
    </style>

    <div class="image-container">
        <slot name="image"></slot>
    </div>
    <div class="content-container">
        <slot name="heading"></slot>
        <slot name="description"></slot>
    </div>
`;

class cw200 extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = contentWrapper200.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("cw-200", cw200);