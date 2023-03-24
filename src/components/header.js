const primaryHeader = document.createElement("template");
primaryHeader.innerHTML = `
    <style>
        :host {
            
        }

    </style>

    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Process</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">About Us</a></li>
    </ul>
    
    


`;

class header extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = primaryHeader.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("primary-header", header);