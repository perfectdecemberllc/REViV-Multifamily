const footerCopyright = document.createElement("template");
footerCopyright.innerHTML = `
    <style>
        :host {
            display: block;
            position: relative;
        }
        
        p {
            margin: 0;
            color: var(--clr-neutral-300);
            font-family: var(--ff-primary);
            font-size: var(--fs-50);
            font-weight: var(--fw-normal);
            line-height: var(--lh-100);
        }
        
    </style>
    
    <p>Copyright © 2022 All Rights Reserved.</p>
    
`;

class footerCopyrightText extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = footerCopyright.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("footer-copyright", footerCopyrightText);