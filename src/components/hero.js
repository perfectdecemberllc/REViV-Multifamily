const hero = document.createElement("template");
hero.innerHTML = `
    <style>
        :host {
            display: grid;
            grid-template-areas: "hero";
            height: 100vh;
            height: 100svh;
            overflow: hidden;
        }

        :host > * {
            grid-area: hero;
        }

        slot[name="nav"] {
            position: relative;
            display: block;
            z-index: 5;
        }

        slot[name="content"] {
            position: relative;
            display: block;
            z-index: 5;
            margin-inline: auto;
            padding: 0 1rem;
            align-self: center;
            width: -webkit-fill-available;
            width: -moz-available;
            max-width: var(--max-width);
        }

        slot[name="image"] {
            display: block;
            overflow: hidden;
        }

        @media (min-width: 375px) {
            slot[name="content"] {
                padding: 0 1.25rem;
            }
        }

    </style>
    
    <slot name="nav"></slot>
    <slot name="content"></slot>
    <slot name="image"></slot>
        
    
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