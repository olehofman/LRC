class CustomFooter extends HTMLElement {
  constructor() {
    const datum = new Date().getFullYear().toString();
    super();
    this.innerHTML = `
      <footer class="container text-center d-flex align-self-end">
        <hr />
        <p>&copy; ${datum} - Lazy Reflex Complex</p>

      </footer>

      
      `;
  }
}

window.customElements.define("custom-footer", CustomFooter);
