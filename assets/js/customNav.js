class CustomNav extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        
   
      <ul class="nav  justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about.html">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/releases.html">Releases</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/Podcasts.html">Podcasts</a>
        </li>
    </ul>
    
      
      `;
  }
}

window.customElements.define("custom-nav", CustomNav);
