class expansionPanel extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            cursor: pointer;
            padding-bottom: 1.5rem;
          }
          button {
            background: transparent;
            border-left: 0;
            border-right: 0;
            border-bottom: 0;
            border-top: 1px solid var(--clr-neutral-200);
            outline: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            font-size: 1.125rem;
            color: var(--clr-accent-500);
            font-family: var(--ff-primary);
            font-size: var(--fs-300);
            font-weight: var(--fw-normal);
            line-height: var(--lh-100);
            padding: 1.5rem 0 0;
            text-align: left;
            transition: background-color 0.2s ease;
          }
          button:hover {
            background-color: #f7fafc;
          }
          .content {
            transition: max-height 0.3s ease;
            max-height: 0;
            overflow: hidden;
          }
          .content.open {
            max-height: 1000px;
          }
          ::slotted(h1) {
            margin: 0;
          }
          ::slotted(p) {
            padding-top: 1rem;
            max-width: 85ch;
            color: var(--clr-neutral-500);
            font-family: var(--ff-primary);
            font-size: var(--fs-body);
            font-weight: var(--fw-normal);
          }
        </style>
        <button>
          <slot name="heading"></slot>
        </button>
        <div class="content">
          <slot name="paragraph"></slot>
        </div>
      `;
  
      
      const content = this.shadowRoot.querySelector(".content");
      
  
      this.addEventListener("click", () => {
        content.classList.toggle("open");
      });
    }
  }
  
  customElements.define("expansion-panel", expansionPanel);
  