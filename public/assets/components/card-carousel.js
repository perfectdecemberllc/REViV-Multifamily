
class cardCarousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.currentSlide = 0;
    this.slides = this.querySelectorAll('[slot]');

    const styles = `
      <style>
        :host {
          display: block;
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .carousel-container {
          padding-left: var(--padding-horz);
          position: relative;
        }

        .carousel-container:hover .arrows-container {
          opacity: 1;
        }

        .slides {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: auto;
          gap: 2rem;
          padding-bottom: .5rem;
          scroll-snap-type: inline mandatory;
          -webkit-overflow-scrolling: touch;
          overflow-x: auto;
          overscroll-behavior-inline: contain;
          scroll-padding-inline: 2rem;
          scrollbar-width: none; /* For Firefox */
        }

        .slides::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Edge */
        }

        ::slotted([slot]) {
          scroll-snap-align: start;
        }

        .arrows-container {
          display: flex;
          gap: 3rem;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          padding: 10px;
          left: 30px;
          opacity: 0;
          transition: var(--btn-off);
        }

        .arrow {
          cursor: pointer;
        }

        .arrow svg path {
          transition: var(--btn-on);
        }

        .arrow:hover svg path {
          fill: var(--clr-primary-500);
        }

        .left-arrow {
          z-index: 10;
        }

        .right-arrow {
          z-index: 10;
        }

        @media (min-width: 51em) {
          .slides {
            grid-auto-columns: max-content;
          }
          .carousel-container {
            padding-left: calc(var(--padding-horz) + 110px + 3rem);
          }
        }
        @media (min-width: 90em) {
          .carousel-container {
            margin-left: calc((100% - 104.625rem) / 2);
          }
        }
        
        }
      </style>
    `;

    const slotsHtml = [...this.slides].map(slide => `
          <slot name="${slide.getAttribute('slot')}"></slot>
        `).join('');

      this.shadowRoot.innerHTML = `
        ${styles}
        
        <div class="carousel-container">
          <div class="arrows-container">
            <div class="arrow left-arrow" id="left-arrow">
              <svg width="21" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 0.500001L-9.39761e-07 22.0008L21 43.5L21 33.5394L9.72928 22.0008L21 10.4606L21 0.500001Z" fill="var(--clr-neutral-300)"/>
              </svg>
            </div>
            <div class="arrow right-arrow" id="right-arrow">
              <svg width="21" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 43.5L21 21.9992L1.87959e-06 0.5L1.4442e-06 10.4606L11.2707 21.9992L4.35391e-07 33.5394L0 43.5Z" fill="var(--clr-neutral-300)"/>
              </svg>
            </div>
          </div>
          <div class="slides">
            ${slotsHtml}
          </div>
        </div>
      `;

    this.leftArrow = this.shadowRoot.getElementById('left-arrow');
    this.rightArrow = this.shadowRoot.getElementById('right-arrow');
    this.slidesContainer = this.shadowRoot.querySelector('.slides');

    this.leftArrow.addEventListener('click', () => this.moveLeft());
    this.rightArrow.addEventListener('click', () => this.moveRight());
    this.slidesContainer.addEventListener('scroll', () => this.updateCurrentSlide());
  }

  moveLeft() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlides();
  }

  moveRight() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlides();
  }

  updateSlides() {
    this.slidesContainer.scrollTo({
      left: this.currentSlide * this.slidesContainer.clientWidth,
      behavior: 'smooth'
    });
  }

  updateCurrentSlide() {
    this.currentSlide = Math.round(this.slidesContainer.scrollLeft / this.slidesContainer.clientWidth);
  }
}

customElements.define('card-carousel', cardCarousel);
