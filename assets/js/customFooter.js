class CustomFooter extends HTMLElement {
  constructor() {
    const datum = new Date().getFullYear().toString();
    super();
    this.innerHTML = `
      <footer></footer>

      
      `;
  }
}

window.customElements.define("custom-footer", CustomFooter);
