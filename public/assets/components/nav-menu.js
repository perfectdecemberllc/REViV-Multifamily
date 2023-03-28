class NavMenu extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({ mode: 'open' });
      this.render();
      this.menuToggle = this.shadowRoot.querySelector('.menu-toggle');
      this.previousScrollPosition = window.scrollY;
      this.scrollHandler = this.handleScroll.bind(this);
      this.toggleMenuHandler = this.toggleMenu.bind(this);
      this.scrollTimeout = null;
    }

    /**
   * Lifecycle method called when the custom element is connected to the DOM.
   * Adds event listeners for scrolling and the menu toggle button click.
   */
  
    connectedCallback() {
      window.addEventListener('scroll', this.scrollHandler);
      this.menuToggle.addEventListener('click', this.toggleMenuHandler);
    }

    /**
   * Lifecycle method called when the custom element is disconnected from the DOM.
   * Removes event listeners for scrolling and the menu toggle button click.
   */
  
    disconnectedCallback() {
      window.removeEventListener('scroll', this.scrollHandler);
      this.menuToggle.removeEventListener('click', this.toggleMenuHandler);
    }

     /**
   * Handles scroll events.
   * Adds the 'shrink' class to the menu toggle button when the user scrolls.
   * Removes the 'shrink' class when the user stops scrolling after a short delay.
   */
  
    handleScroll() {
      this.menuToggle.classList.add('shrink');
  
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.menuToggle.classList.remove('shrink');
      }, 200);
    }

    /**
   * Toggles the menu open and closed by toggling the 'open' and 'opened' classes on the nav links container and menu toggle button, respectively.
   */
  
    toggleMenu() {
      const navLinksContainer = this.shadowRoot.querySelector('.nav-links-container');
      navLinksContainer.classList.toggle('open');
      this.menuToggle.classList.toggle('opened');
    }

    /**
   * Renders the custom element's innerHTML and attaches styles.
   */
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            overflow: hidden;
          }
  
          .nav-menu {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            padding-inline: var(--padding-horz);
            max-width: var(--max-width);
            margin-inline: auto;
          }
  
          .logo img {
            width: 100%;
            max-width: 15.625rem;
            cursor: pointer;
          }
  
          .menu-toggle {
            position: fixed;
            right: 1.25rem;
            top: 1.5rem;
            border: none;
            background-color: var(--clr-primary-500);
            border-radius: 50%;
            opacity: 1;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 0.35rem;
            width: 3rem;
            height: 3rem;
            z-index: 1000;
            transition: transform 0.3s;
          }
  
          .menu-toggle.shrink {
            transform: scale(0.8);
            opacity: 0.4;
          }
  
          .menu-toggle .line {
            width: 1.5rem;
            height: 2px;
            background-color: var(--clr-neutral-100);
            transition: all 0.3s;
          }
  
          .menu-toggle.opened .line:nth-child(1) {
            transform: translateY(8px) rotate(45deg) scaleX(1.4);
          }
  
          .menu-toggle.opened .line:nth-child(2) {
            opacity: 0;
          }
  
          .menu-toggle.opened .line:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg) scaleX(1.4);
          }
  
          .nav-links-container {
            position: fixed;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background-color: var(--clr-primary-500);
            display: flex;
            align-items: center;
            z-index: 999;
            transition: left 0.3s ease;
          }
  
          .nav-links-container.open {
            padding-left: 1.5rem;
            left: 0;
          }
  
          .nav-links {
            display: flex;
            flex-direction: column;
            gap: 1.75rem;
            list-style: none;
            padding: 0;
          }
  
          .nav-links a {
            font-family: var(--ff-nav);
            font-weight: var(--fw-semi-bold);
            font-size: var(--fs-clamp-nav-mobile);
            line-height: var(--lh-100);
            color: var(--clr-neutral-100);
            text-decoration: none;
          }
          @media (min-width: 64em) {
            .nav-menu {
              display: grid;
              grid-auto-flow: column;
              grid-auto-columns: 1fr 2fr;
            }
            .menu-toggle {
              display: none;
            }
            .nav-links-container {
              position: relative;
              left: 0;
              background-color: transparent;
            }
            .nav-links {
              flex-direction: row;
              gap: 3rem;
            }
            .nav-links a {
              font-size: var(--fs-clamp-nav-desktop);
              font-weight: var(--fw-regular);
              line-height: var(--lh-100);
              letter-spacing: 0.0325em;
              transition: var(--btn-off)
            }
            .nav-links a:hover {
              color: var(--clr-primary-500);
              transition: var(--btn-on)
            }
          }
        </style>
  
      <nav class="nav-menu">
        <a href="index.html" class="logo">
          <img src="assets/images/RM_B&W_Logo_Horizontal_White.png" alt="Realty Company Logo">
        </a>
        <button class="menu-toggle">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
        <div class="nav-links-container">
          <ul class="nav-links">
            <li><a href="index">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Process</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="about-us">About Us</a></li>
            
          </ul>
        </div>
      </nav>
    `;
  }
}

window.customElements.define('nav-menu', NavMenu);

  