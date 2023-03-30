class TeamCard extends HTMLElement {
    constructor() {
      super();
  
      const shadow = this.attachShadow({ mode: 'open' });
  
      const wrapper = document.createElement('div');
      wrapper.setAttribute('class', 'card');
  
      this.picture = document.createElement('picture');
      this.img = document.createElement('img');
      this.img.setAttribute('class', 'card-image');
      this.picture.appendChild(this.img);
      wrapper.appendChild(this.picture);
  
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
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.5s, transform 0.5s;
          background-color: var(--clr-neutral-100);
          box-shadow: var(--ds-primary);
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
          font-family: var(--ff-primary);
          font-size: var(--fs-50);
          font-weight: var(--fw-regular);
          color: var(--clr-primary-500);
          margin-bottom: 5px;
        }
        .info-container p {
          margin: 0;
          font-family: var(--ff-primary);
          font-size: var(--fs-300);
          font-weight: var(--fw-regular;
          color: var(--clr-neutral-900);
        }
      `;
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }
  
    connectedCallback() {
        this.jobTitle.textContent = this.getAttribute('title');
        this.memberName.textContent = this.getAttribute('name');
        this.initObserver();
    
        // Assuming srcset attribute is passed like: image-srcset="img-1x.jpg 1x, img-2x.jpg 2x, img-3x.jpg 3x"
        const srcset = this.getAttribute('image-srcset');
        if (srcset) {
          this.img.setAttribute('srcset', srcset);
        }
    
        const src = this.getAttribute('image-src');
        if (src) {
          this.img.setAttribute('src', src);
        }
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
  