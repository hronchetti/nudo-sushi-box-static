const getFooterYear = () => {
  document.getElementById(
    "footer-site-copyright-year"
  ).innerHTML = new Date().getFullYear()
}

document.addEventListener("DOMContentLoaded", getFooterYear)

const showMobileNav = () => {
  document.getElementById("nav-mobile").classList.add("active")
  lockBodyScroll()
}

const hideMobileNav = () => {
  document.getElementById("nav-mobile").classList.remove("active")
  unlockBodyScroll()
}

const showBasket = () => {
  document.getElementById("basket-drawer").classList.add("active")
  document.getElementById("basket-overlay").classList.add("active")
  lockBodyScroll()
}

const hideBasket = () => {
  document.getElementById("basket-drawer").classList.remove("active")
  document.getElementById("basket-overlay").classList.remove("active")
  unlockBodyScroll()
}

const lockBodyScroll = () => {
  document.querySelector("body").classList.add("body-locked")
}

const unlockBodyScroll = () => {
  document.querySelector("body").classList.remove("body-locked")
}
