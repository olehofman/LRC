class CustomFooter extends HTMLElement {
  constructor() {
    const datum = new Date().getFullYear().toString();
    super();
    this.innerHTML = `
      <footer class="container d-flex justify-content-center">
        <hr />
        <p>&copy; ${datum} - Lazy Reflex Complex</p>

      </footer>

      
      `;
  }
}

window.customElements.define("custom-footer", CustomFooter);
