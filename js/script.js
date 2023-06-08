const headerNav = document.querySelector(".header__nav");
const toggleOpen = document.querySelector("#mobile-menu");
const toggleClose = document.querySelector("#mobile-menu-close");
const logoImage = document.querySelector(".header__logo img");

let isMobileMenuOpen = false;
let isLogoAppended = false;

toggleOpen.addEventListener("click", () => {
  isMobileMenuOpen = true;
  headerNav.classList.add("mobile-menu-open");
  toggleOpen.style.display = "none";
  toggleClose.style.display = "block";

  if (window.innerWidth < 768 && !isLogoAppended) {
    headerNav.insertBefore(logoImage.cloneNode(true), headerNav.firstChild);
    isLogoAppended = true;
  }
});

toggleClose.addEventListener("click", () => {
  isMobileMenuOpen = false;
  headerNav.classList.remove("mobile-menu-open");
  toggleOpen.style.display = "block";
  toggleClose.style.display = "none";

  if (isLogoAppended) {
    headerNav.removeChild(headerNav.firstChild);
    isLogoAppended = false;
  }
});

const handleWindowResize = () => {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    toggleOpen.style.display = isMobileMenuOpen ? "none" : "block";
    toggleClose.style.display = isMobileMenuOpen ? "block" : "none";

    if (!isLogoAppended) {
      headerNav.insertBefore(logoImage.cloneNode(true), headerNav.firstChild);
      isLogoAppended = true;
    }
  } else {
    toggleOpen.style.display = "none";
    toggleClose.style.display = "none";
    headerNav.classList.remove("mobile-menu-open");

    if (isLogoAppended) {
      headerNav.removeChild(headerNav.firstChild);
      isLogoAppended = false;
    }
  }
};

window.addEventListener("resize", handleWindowResize);
handleWindowResize();
