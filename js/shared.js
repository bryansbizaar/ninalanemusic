// Nina Lane Music - Enhanced Shared Components
// Reduces HTML duplication significantly while preserving page-specific styling

class NinaShared {
  static init() {
    this.insertNavigation();
    this.insertFooter();
    this.setupMobileNav();
    this.loadSecondaryFont();
  }

  // Insert navigation HTML - eliminates duplication across all pages
  static insertNavigation() {
    const navContainer = document.getElementById("nav-container");
    if (!navContainer) return;

    const currentPage = document.body.getAttribute("data-page") || "";

    navContainer.innerHTML = `
      <input type="checkbox" id="nav-toggle" class="nav-toggle" />
      <nav>
        <ul>
          <li><a href="about.html">About</a></li>
          <li>
            <a href="https://ninalane.bandcamp.com/" target="_blank" rel="noopener noreferrer">Music</a>
          </li>
          <li><a href="video.html">Video</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="duo.html">Duo</a></li>
          ${
            currentPage === "home"
              ? `
          <li class="nav-item">
            <a href="https://www.facebook.com/NinaLaneMusic" target="_blank" rel="noopener noreferrer">
              <img src="images/facebook.png" alt="Facebook" width="25" height="25" />
            </a>
          </li>`
              : ""
          }
        </ul>
      </nav>
      <label for="nav-toggle" class="nav-toggle-label">
        <span></span>
      </label>
    `;
  }

  // Insert footer HTML - eliminates footer duplication (except home page)
  static insertFooter() {
    const footerContainer = document.getElementById("footer-container");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <ul class="footer">
        <li class="footer-item">
          <a
            href="https://www.facebook.com/NinaLaneMusic"
            class="fb social-link"
            target="_blank"
            rel="noopener noreferrer"
            ><img
              src="images/facebook.png"
              alt="Facebook logo"
              width="25"
              height="25"
          /></a>
        </li>
        <li class="footer-item">
          <a href="https://ninalane.bandcamp.com/" target="_blank" rel="noopener noreferrer"
            ><img
              class="bc social-link"
              src="images/bandcamp.png"
              alt="Bandcamp logo"
              width="135"
              height="40"
          /></a>
        </li>
        <li class="footer-item">
          <a
            href="https://www.youtube.com/@ninalanemusic9493/playlists"
            class="yt social-link"
            target="_blank"
            rel="noopener noreferrer"
            ><img src="images/youtube.png" alt="YouTube logo" height="20"
          /></a>
        </li>
      </ul>
    `;
  }

  // Enhanced mobile navigation - works with all page layouts
  static setupMobileNav() {
    // Handle hamburger menu clicks
    document.addEventListener("click", (e) => {
      const label = e.target.closest(".nav-toggle-label");
      if (label) {
        e.preventDefault();
        const navToggle = document.getElementById("nav-toggle");
        if (navToggle) {
          navToggle.checked = !navToggle.checked;
        }
      }
    });

    // Close mobile nav when clicking nav links (except social icons)
    document.addEventListener("click", (e) => {
      const navLink = e.target.closest("nav a");
      if (navLink && !navLink.querySelector("img")) {
        const navToggle = document.getElementById("nav-toggle");
        if (navToggle) {
          navToggle.checked = false;
        }
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener("click", (e) => {
      const nav = document.querySelector("nav");
      const toggleLabel = document.querySelector(".nav-toggle-label");
      const navToggle = document.getElementById("nav-toggle");

      if (nav && toggleLabel && navToggle && navToggle.checked) {
        if (!nav.contains(e.target) && !toggleLabel.contains(e.target)) {
          navToggle.checked = false;
        }
      }
    });
  }

  // Load secondary font after page loads - performance optimization
  static loadSecondaryFont() {
    if (document.readyState === "complete") {
      this.addSecondaryFont();
    } else {
      window.addEventListener("load", () => this.addSecondaryFont());
    }
  }

  static addSecondaryFont() {
    const secondaryFont = document.createElement("link");
    secondaryFont.rel = "stylesheet";
    secondaryFont.href =
      "https://fonts.googleapis.com/css2?family=Thasadith:wght@400;600&display=swap";
    document.head.appendChild(secondaryFont);
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => NinaShared.init());
} else {
  NinaShared.init();
}
