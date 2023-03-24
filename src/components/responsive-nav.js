class ResponsiveNavbar extends HTMLElement {
    constructor() {
      super();
  
      // Create a shadow root
      const shadowRoot = this.attachShadow({ mode: 'open' });
  
      // Create a container element for the navbar
      const container = document.createElement('div');
      container.setAttribute('class', 'navbar-container');

      // Create logo link
      const logoLink = document.createElement('a');
      logoLink.setAttribute('href', 'index.html')

      // Add logo image to link
      logoLink.innerHTML = '<img class="logo" src="assets/images/RM_B&W_Logo_Horizontal_White.png">'
  
      // Create a button for toggling the menu
      const toggleButton = document.createElement('button');
      toggleButton.setAttribute('class', 'navbar-toggle');
      toggleButton.innerHTML = '&#9776;'; // Hamburger icon
  
      // Create a menu element
      const menu = document.createElement('ul');
      menu.setAttribute('class', 'navbar-menu');
  
      // Add menu items to the menu
      const homeItem = document.createElement('li');
      homeItem.innerHTML = '<a href="#">Home</a>';
      const servicesItem = document.createElement('li');
      servicesItem.innerHTML = '<a href="#">Services</a>';
      const processItem = document.createElement('li');
      processItem.innerHTML = '<a href="#">Process</a>';
      const projectsItem = document.createElement('li');
      projectsItem.innerHTML = '<a href="#">Projects</a>';
      const aboutItem = document.createElement('li');
      aboutItem.innerHTML = '<a href="#">About Us</a>';
  
      menu.appendChild(homeItem);
      menu.appendChild(servicesItem);
      menu.appendChild(processItem);
      menu.appendChild(projectsItem);
      menu.appendChild(aboutItem);
  
      // Add elements to the container
      container.appendChild(logoLink);
      container.appendChild(toggleButton);
      container.appendChild(menu);
  
      // Add styles to the shadow root
      const styles = `
        :host {
          display: flex;
          justify-content: center;
          width: 100%;
          padding-top: 3rem;
          padding-bottom: 2rem;
        }
        .navbar-container {
          display: flex;
          align-items: center;
          max-width: var(--max-width);
        }
        .logo {
          max-width: 13rem;
        }
        .navbar-toggle {
          display: none;
          font-size: 20px;
          color: #fff;
          background-color: transparent;
          border: none;
          cursor: pointer;
          outline: none;
        }
        .navbar-menu {
          display: flex;
          gap: 3.5rem;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
        .navbar-menu li a {
          text-decoration: none;
          color: var(--clr-neutral-100);
          font-family: var(--ff-nav);
          font-size: var(--fs-nav);
          font-weight: var(--fw-semi-bold);
          line-height: var(--lh-100);
          letter-spacing: 0.0325em;
        }
        .navbar-menu li a:hover {
          color: var(--clr-primary-500);
        }
        @media only screen and (max-width: 600px) {
          .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            background-color: #333;
            color: #fff;
          }
          .navbar-menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 50px;
            left: 0;
            right: 0;
            background-color: #333;
            color: #fff;
            padding: 10px;
          }
          .navbar-menu li {
            margin: 10px 0;
          }
          .navbar-toggle {
            display: block;
          }
          .open {
            display: block;
          }
        }
      `;
      const styleElement = document.createElement('style');
      styleElement.innerHTML = styles;
  
      // Add elements to the shadow root
      shadowRoot.appendChild(styleElement);
      shadowRoot.appendChild(container);
  
      // Add event listener for toggle button
      toggleButton.addEventListener('click', () => {
        menu.classList.toggle('open');
      });
    }
  }
  
  // Define the web component
  customElements.define('responsive-navbar', ResponsiveNavbar);
  