const cardQuote = document.createElement("template");
cardQuote.innerHTML = `
    <style>
        :host {
            display: grid;
            gap: 3rem;
            padding: 4rem;
            max-width: 22.9375rem;
            border-radius: var(--br-md);
            background-color: var(--clr-accent-800);
        }

        .quote-container {
            display: grid;
            gap: .75rem;
        }

        .quote-icon {
            max-width: 2.25rem;
        }

        .quote-icon img {
            width: 100%;
            max-width: none;
        }

        slot[name="quote"] {
            font-family: var(--ff-heading);
            font-weight: var(--fw-regular);
            font-size: var(--fs-300);
            line-height: var(--lh-700);
            color: var(--clr-neutral-100);
        }

        .author-container {
            display: flex;
            gap: 1.25rem;
            align-items: center;
        }

        .author-thumbnail {
            width: 4.6875rem;
            height: 4.6875rem;
            border-radius: var(--br-md);
            overflow: hidden;
        }

        .author-info {
            display: grid;
            gap: .5rem;
        }

        slot[name="author-title"] {
            font-family: var(--ff-label);
            font-weight: var(--fw-regular);
            font-size: var(--fs-label-sm);
            line-height: var(--lh-100); 
            color: var(--clr-primary-500);
        }

        slot[name="author-name"] {
            font-family: var(--ff-label);
            font-weight: var(--fw-semi-bold);
            font-size: var(--fs-label-md);
            line-height: var(--lh-100);
            color: var(--clr-neutral-100);
        }
        
    </style>

    <div class="quote-container">
        <div class="quote-icon">
            <img src="assets/images/quotes-sm.png" alt="quote icon">
        </div>
        <slot name="quote"></slot>
    </div>
    <div class="author-container">
        <div class="author-thumbnail">
            <slot name="author-thumbnail"></slot>
        </div>
        <div class="author-info">
            <slot name="author-title"></slot>
            <slot name="author-name"></slot>
        </div>
    </div>

    
`;

class card_quote extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = cardQuote.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("card-quote", card_quote);