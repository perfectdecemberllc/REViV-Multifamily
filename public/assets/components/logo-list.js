const logoList = document.createElement("template");
logoList.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        slotted([slot^="logo-"]) img {
            max-width: 13rem;
        }
    </style>

    <slot name="logo-1"></slot>
    <slot name="logo-2"></slot>
    <slot name="logo-3"></slot>
    <slot name="logo-4"></slot>
    <slot name="logo-5"></slot>
    <slot name="logo-6"></slot> 
`;

class logo_list extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = logoList.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("logo-list", logo_list);