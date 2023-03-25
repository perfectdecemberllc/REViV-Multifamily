
class ColorCarousel extends HTMLElement {
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
        }

        .carousel-container {
          overflow: hidden;
        }

        .slides {
          display: flex;
          gap: 2rem;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          overflow-x: scroll;
          scrollbar-width: none; /* For Firefox */
        }

        .slides::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Edge */
        }

        ::slotted([slot]) {
          flex: 0 0 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          scroll-snap-align: start;
        }

        .arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          padding: 10px;
          cursor: pointer;
        }

        .left-arrow {
          left: 10px;
        }

        .right-arrow {
          right: 10px;
        }
      </style>
    `;

    const slotsHtml = [...this.slides].map(slide => `
          <slot name="${slide.getAttribute('slot')}"></slot>
        `).join('');

      this.shadowRoot.innerHTML = `
        ${styles}
        <div class="arrow left-arrow" id="left-arrow">&lt;</div>
        <div class="arrow right-arrow" id="right-arrow">&gt;</div>
        <div class="carousel-container">
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

customElements.define('color-carousel', ColorCarousel);
