const footerDivider = document.createElement("template");
footerDivider.innerHTML = `
    <style>
        :host {
            display: block;
            position: relative;
            width: 100%;
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        hr {
            width: 100%;
            border-top: 1px solid var(--clr-neutral-200);
        }
        
    </style>

    <hr>
    
        
    
`;

class footerHr extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = footerDivider.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("footer-divider", footerHr);