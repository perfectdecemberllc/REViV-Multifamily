const hero = document.createElement("template");
hero.innerHTML = `
    <style>
        :host {
            display: grid;
            grid-template-areas: 
                "nav"
                "content"
            ;
            grid-template-rows: auto 1fr;
            grid-template-columns: 1fr;
            height: 100vh;
            height: 100svh;
            overflow: hidden;
        }

        slot[name="nav"] {
            position: relative;
            display: block;
            z-index: 10;
            grid-area: nav;
        }

        slot[name="content"] {
            position: relative;
            display: block;
            z-index: 5;
            grid-area: content;
            margin-inline: auto;
            padding-inline: var(--padding-horz);
            align-self: center;
            width: -webkit-fill-available;
            width: -moz-available;
            max-width: var(--max-width);
        }

        slot[name="hero-image"] {
            display: block;
            overflow: hidden;
            grid-column-start: 1;
            grid-row-start: 1;
            grid-row-end: 3;
        }

    </style>
    
    <slot name="nav"></slot>
    <slot name="content"></slot>
    <slot name="hero-image"></slot>
        
    
`;

class heroSection extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = hero.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("hero-section", heroSection);