class CustomNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        
    <nav>
      
    </nav>
      
      `;
  }
}

window.customElements.define("custom-nav", CustomNav);
