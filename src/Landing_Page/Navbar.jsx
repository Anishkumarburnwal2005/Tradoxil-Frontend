import "./navbar.css";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary border-bottom sticky-top bg-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="\images\logo.svg" alt="nav_img" style={{ width: "35%" }} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <a class="nav-link active" href="/signUp">
              Signup
            </a>
            <a class="nav-link active" href="/about">
              About
            </a>
            <a class="nav-link active" href="/pricing">
              Pricing
            </a>
            <a class="nav-link active" href="/products">
              Product
            </a>
            <a class="nav-link active" href="/support">
              Support
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
