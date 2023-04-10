class HighlightsList extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: grid;
            gap: 1rem;
            padding: 2.5rem 3.5rem;
            max-width: 23.175rem; 
            background-color: var(--clr-accent-500);
            border-radius: var(--br-700);
          }
          .heading {
            margin: 0;
            font-family: var(--ff-label);
            font-weight: var(--fw-semi-bold);
            font-size: var(--fs-label-md);
            color: var(--clr-neutral-100);
          }
          .list-container {
            display: grid;
            gap: 1rem;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          li {
            display: flex;
            gap: .5rem;
            align-items: center;
          }
          p {
            margin: 0;
            font-family: var(--ff-body);
            font-weight: var(--fw-bold);
            font-size: var(--fs-50);
            color: var(--clr-neutral-100);
          }
          span {
            font-weight: var(--fw-regular);
          }

        </style>
        
        <h4 class="heading">Highlights</h4>
        <ul class="list-container">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" fill="none" viewBox="0 0 5 10">
              <path fill="#ffffff" d="m0 10 5-5-5-5v10Z"/>
            </svg>
            <p>Status: <span class="status"></span></p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" fill="none" viewBox="0 0 5 10">
              <path fill="#ffffff" d="m0 10 5-5-5-5v10Z"/>
            </svg>
            <p>Area: <span class="area"></span></p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" fill="none" viewBox="0 0 5 10">
              <path fill="#ffffff" d="m0 10 5-5-5-5v10Z"/>
            </svg>
            <p>Location: <span class="location"></span></p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" fill="none" viewBox="0 0 5 10">
              <path fill="#ffffff" d="m0 10 5-5-5-5v10Z"/>
            </svg>
            <p>Type: <span class="type"></span></p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" fill="none" viewBox="0 0 5 10">
              <path fill="#ffffff" d="m0 10 5-5-5-5v10Z"/>
            </svg>
            <p>Price: <span class="price"></span></p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" fill="none" viewBox="0 0 5 10">
              <path fill="#ffffff" d="m0 10 5-5-5-5v10Z"/>
            </svg>
            <p>Parking: <span class="parking"></span></p>
          </li>
        </ul>
      `;
    }

    connectedCallback() {
        const attributes = ['status', 'area', 'location', 'type', 'price', 'parking'];
    
        for (const attr of attributes) {
          const value = this.getAttribute(attr);
          if (value) {
            this.shadowRoot.querySelector(`.${attr}`).textContent = value;
          }
        }
      }
    
      static get observedAttributes() {
        return ['status', 'area', 'location', 'type', 'price', 'parking'];
      }
    
      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'status' || name === 'area' || name === 'location' || name === 'type' || name === 'price' || name === 'parking') {
          this.shadowRoot.querySelector(`.${name}`).textContent = newValue;
        }
    }
}
    
    customElements.define('highlights-list', HighlightsList);