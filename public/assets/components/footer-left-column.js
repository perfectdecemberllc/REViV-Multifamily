const footerLeftColumn = document.createElement("template");
footerLeftColumn.innerHTML = `
    <style>
        :host {
            display: block;
            position: relative;
        }

        .logo-container {
            max-width: 10.5rem;
        }

        .logo-container img {
            width: 100%;
        }

        .content-container p {
            margin: 0;
            margin-bottom: 1.5rem;
            max-width: 35ch;
            color: var(--clr-neutral-100);
            font-family: var(--ff-primary);
            font-size: var(--fs-body);
            font-weight: var(--fw-normal);
            line-height: var(--lh-600);
        }

        .content-container h5 {
            margin: 0;
            color: var(--clr-neutral-200);
            font-family: var(--ff-primary);
            font-size: var(--fs-400);
            font-weight: var(--fw-normal);
            line-height: var(--lh-500);
        }
        
    </style>

    <div class="logo-container">
        <img src="assets/images/reviv_logo_white.png" alt="logo">
    </div>
    <div class="content-container">
        <p>Renovate. Create. Elevate.</p>
        <h5>1085 Thousand Oaks Blvd<br>Greenville, SC 29607</h5>
    </div>
    
        
    
`;

class footerLeftcolumn extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = footerLeftColumn.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("footer-left-column", footerLeftcolumn);