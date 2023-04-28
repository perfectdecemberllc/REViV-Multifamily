const cw100List = document.createElement("template");
cw100List.innerHTML = `
    <style>
        :host {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 2rem;
            max-width: 62.5rem;
            margin-inline: auto;
        }
        :host([data-variation="case-study"]) {
            margin-inline: 0;
            justify-content: start;
        }
    </style>

    <slot name="cw-1"></slot>
    <slot name="cw-2"></slot>
    <slot name="cw-3"></slot>
    <slot name="cw-4"></slot> 
`;

class cw100_list extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = cw100List.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("cw-100-list", cw100_list);