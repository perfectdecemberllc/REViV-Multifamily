const contentWrapper500 = document.createElement("template");
contentWrapper500.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-wrap: wrap;
            gap: 1.25rem;
            width: fit-content;
        }
        slot[name="image"] {
            display: block;
            max-width: 38.5rem;
            flex: 1 1 20rem;
            overflow: hidden;
            border-radius: var(--br-900);
        }
        slot[name="content-wrapper"] {
            display: block;
            flex: 1 1 15rem;
        }

    </style>

    
    
    <slot name="image"></slot>
    <slot name="content-wrapper"></slot>

`;

class cw500 extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = contentWrapper500.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("cw-500", cw500);