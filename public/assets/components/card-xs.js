const cardxs = document.createElement("template");
cardxs.innerHTML = `
    <style>
        :host {
            width: 100%;
            max-width: 23rem;
            border-radius: var(--br-md);
            box-shadow: var(--ds-primary);
            display: flex;
            gap: 1.25rem;
            padding: .25rem;
            align-items: center;
            background-color: var(--clr-neutral-100);
            border: 1px solid rgba(250, 250, 250, 1);
            color: var(--clr-neutral-500);
        }

        .property {
            font-family: var(--ff-label);
            font-weight: var(--fw-regular);
            font-size: var(--fs-label-sm);
            color: var(--clr-neutral-500);
        }

        .realtor {
            font-family: var(--ff-label);
            font-weight: var(--fw-semi-bold);
            font-size: var(--fs-label-md);
        }
        .avatar-container {
            max-width: 4.6875rem;
            border-radius: var(--br-md);
            overflow: hidden;
        }

        @media (min-width: 53em) {
            :host {
                width: 23rem;
            }
        }
    </style>

    
        <div class="avatar-container">
            <slot name="realtorAvatar"></slot>
        </div>
        <div>
            <slot class="property" name="propertyName"></slot>
            <slot class="realtor" name="realtorName"></slot>
        </div>
    
`;

class cardXs extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        let clone = cardxs.content.cloneNode(true);
        shadowRoot.append(clone);

    }
}

window.customElements.define("card-xs", cardXs);