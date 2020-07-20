const getFooterYear = () => {
  document.getElementById(
    "footer-site-copyright-year"
  ).innerHTML = new Date().getFullYear()
}

document.addEventListener("DOMContentLoaded", getFooterYear)
// Nav handlers

const showMobileNav = () => {
  document.getElementById("nav-mobile").classList.add("active")
}

const hideMobileNav = () => {
  document.getElementById("nav-mobile").classList.remove("active")
}
