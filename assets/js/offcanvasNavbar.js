class OffcanvasNavbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        
    <nav id="navbar" class="navbar fixed-top">
      <div class="container-fluid">
       
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i class="bi bi-text-left"></i>
        </button>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <div></div>
            <!-- <h3 class="offcanvas-title" id="offcanvasNavbarLabel">
              Lazy Reflex Complex
            </h3> -->
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="/about.html">About</a>
              </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold" href="/releases.html">Releases</a>
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link disabled" href="#">Vinyl Releases</a>
                </li> -->
                <li class="nav-item">
                  <a class="nav-link nav-link-margin" href="/releases/LRC01.html">LRC01 // 543ff, Jeroen Search</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-margin" href="/releases/LRC02.html">LRC02 // LENSON, Sculpturism, Miller & Keane</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-margin" href="#">LRC03 // TBD</a>
                </li>
                <!-- <li class="nav-item">
                  <a class="nav-link disabled" href="#">Ambient Releases</a>
                </li> -->
                <li class="nav-item">
                  <a class="nav-link nav-link-margin" href="/releases/LRC-AMBIENT01.html">LRCAMBIENT01 // 543ff</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-margin" href="#">LRCAMBIENT02 // TBD</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fw-bold" href="#">Podcasts</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-link-margin" href="/releases/LRC01.html">LRCPODCAST01 // 543ff</a>
                </li>
            </div>
        </div>
      </div>
    </nav>
      
      `;
  }
}

window.customElements.define("offcanvas-nav", OffcanvasNavbar);
