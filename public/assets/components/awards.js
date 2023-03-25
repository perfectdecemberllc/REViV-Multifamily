const awardsList = document.createElement("template");
awardsList.innerHTML = `
    <style>
        :host {
            display: grid;
            gap: 2rem;
        }

        .pair-1, .pair-2 {
            display: flex;
            gap: 2rem;
            flex-wrap: wrap;
        }

        ::slotted(div) {
            min-width: 10rem;
            flex: 1 1 10rem;
        }

    </style>

    <div class="pair-1">
        <slot name="award-1"></slot>
        <slot name="award-2"></slot>
    </div>
    <div class="pair-2">
        <slot name="award-3"></slot>
        <slot name="award-4"></slot>
    </div>
    
`;

class awards extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = awardsList.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("awards-list", awards);