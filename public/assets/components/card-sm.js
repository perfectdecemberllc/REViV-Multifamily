// team-card.js
class TeamCard extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'card');
  
      this.img = document.createElement('img');
      this.img.setAttribute('class', 'card-image');
      wrapper.appendChild(this.img);
  
      const infoContainer = document.createElement('div');
      infoContainer.setAttribute('class', 'info-container');
  
      this.jobTitle = document.createElement('h4');
      infoContainer.appendChild(this.jobTitle);
  
      this.memberName = document.createElement('p');
      infoContainer.appendChild(this.memberName);
  
      wrapper.appendChild(infoContainer);
  
      const style = document.createElement('style');
      style.textContent = `
        .card {
          width: 270px;
          display: inline-block;
          margin-right: 10px;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.5s, transform 0.5s;
          background-color: var(--clr-neutral-100);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: var(--br-md);
          overflow: hidden;
        }
        .card-image {
          width: 100%;
          height: 330px;
          object-fit: cover;
        }
        .info-container {
          padding: 15px;
        }
        .info-container h4 {
          margin: 0;
          font-size: var(--fs-50);
          font-weight: var(--fw-regular);
          color: var(--clr-primary-500);
          margin-bottom: 5px;
        }
        .info-container p {
          margin: 0;
          font-size: var(--fs-300);
          font-weight: var(--fw-semi-bold);
          color: var(--clr-neutral-900);
        }
      `;
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }
  
    connectedCallback() {
        this.img.src = this.getAttribute('image-src');
        this.jobTitle.textContent = this.getAttribute('title');
        this.memberName.textContent = this.getAttribute('name');
        this.initObserver();
      }
  
    initObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      };
  
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              this.shadowRoot.querySelector('.card').style.opacity = '1';
              this.shadowRoot.querySelector('.card').style.transform = 'translateY(0)';
            }, this.index * 500);
            observer.unobserve(entry.target);
          }
        });
      }, options);
  
      observer.observe(this);
    }
  
    get index() {
      return Array.from(this.parentNode.children).indexOf(this);
    }
  }
  
  customElements.define('card-sm', TeamCard);
  