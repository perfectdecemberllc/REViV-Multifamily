class ceoQuote extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block;
                position: relative;
                border-radius: 24px;
                background-color: #FEFDFC;
                width: 100%;
                padding: 2.5rem 1rem 1.5rem 0;
            }
            :host::before {
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-image: linear-gradient(
                    to left,
                    #656974,
                    rgba(101, 105, 116, 0)
                );
                border-radius: 24px;
                z-index: -1;
                margin: -1px; /* Adjust the margin to control the border size */
            }

            .quote-container {
                margin-bottom: 2rem;
            }
            ::slotted(p) {
                color: var(--clr-neutral-500);
                font-family: var(--ff-primary);
                font-size: var(--fs-body);
                font-weight: var(--fw-normal);
                line-height: var(--lh-600);
                font-style: italic;
            }
            .container {
                display: flex;
                align-items: center;
                gap: 1.5rem;
                width: 100%;
                justify-content: right;
            }
            .ceo {
              width: 4.5rem;
              height: 4.5rem;
              border-radius: 50%;
              overflow: hidden;
            }
            .ceo img {
              width: 100%;
            }
            @media (min-width: 1024px) {
                :host {
                    padding: 2.5rem 5rem 1.5rem;
                }
            }
        }
        </style>
        <div class="quote-container">
          <slot name="quote"></slot>
        </div>
        <div class="container">
          <div class="ceo">
            <img src="assets/images/quote_devon_2x.webp" alt="Avatar">
          </div>
          <div class="signature">
            <img src="assets/images/signature.png" alt="Signature">
          </div>
        </div>
      `;
  
      
      const content = this.shadowRoot.querySelector(".content");
      
  
      this.addEventListener("click", () => {
        content.classList.toggle("open");
      });
    }
  }
  
  customElements.define("ceo-quote", ceoQuote);
  