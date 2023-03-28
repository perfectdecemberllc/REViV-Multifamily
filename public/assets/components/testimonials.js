const testimonialStyles = `
  customer-testimonials {
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: auto;
    align-items: center;
    justify-content: center;
    gap: clamp(2rem, 6vw, 7.5rem);
    min-height: 22rem;
  }
  
  @media (min-width: 53em) {
    customer-testimonials {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: auto;
    }
  }
`;

if (!document.head.querySelector('style[data-testimonial-styles="customer-testimonials"]')) {
  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-testimonial-styles', 'customer-testimonials');
  styleElement.textContent = testimonialStyles;
  document.head.appendChild(styleElement);
}

class CustomerTestimonials extends HTMLElement {
    constructor() {
      super();
      this.attachListeners = this.attachListeners.bind(this);
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style> 
            [slot^="name-"][aria-selected="true"] {
                background-color: white;
            }
            [slot^="name-"][aria-selected="true"] {
              color: var(--clr-primary-500);
            }
            [slot^="name-"][aria-selected="false"] {
              transition: var(--btn-off);
              background-color: rgba(250, 250, 250, .3);
            }
            [slot^="name-"][aria-selected="false"] img {
              filter: grayscale(100%);
              opacity: 0.65;
              transition: var(--btn-off);
            }
            [slot^="name-"][aria-selected="false"]:hover {
              background-color: rgba(250, 250, 250, .8);
              filter: grayscale(0%);
            }
            [slot^="name-"][aria-selected="false"]:hover img {
              transition: var(--btn-on);
              filter: grayscale(0%);
              opacity: 1;
            }
            [slot^="quote-"][aria-hidden="true"] {
              display: none;
            }
        </style>
      ` 
      + this.innerHTML;

      this.attachListeners();
      this.showQuote(0);
    }
  
    attachListeners() {
      const slots = this.querySelectorAll('[slot^="name-"]');
  
      slots.forEach((slot) => {
        slot.addEventListener('click', () => {
          this.showQuote(slot.slot.split("-")[1]);
        });
      });
    }
  
    showQuote(index) {
      this.querySelectorAll('[slot^="name-"]').forEach((element, i) => {
        element.setAttribute("aria-selected", i == index);
      });
  
      this.querySelectorAll('[slot^="quote-"]').forEach((element, i) => {
        element.setAttribute("aria-hidden", i != index);
      });
    }
  }
  
  customElements.define("customer-testimonials", CustomerTestimonials);
  