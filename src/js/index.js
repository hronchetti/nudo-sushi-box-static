const getFooterYear = () => {
  document.getElementById(
    "footer-site-copyright-year"
  ).innerHTML = new Date().getFullYear()
}

document.addEventListener("DOMContentLoaded", () => {
  getFooterYear()
})

const showMobileNav = () => {
  document.getElementById("nav-mobile").classList.add("active")
  document.getElementById("nav-mobile-overlay").classList.add("active")
  lockBodyScroll("nav-wrapper")
  revealNavOverflow()
}

const hideMobileNav = () => {
  document.getElementById("nav-mobile").classList.remove("active")
  document.getElementById("nav-mobile-overlay").classList.remove("active")
  unlockBodyScroll("nav-wrapper")
  setTimeout(hideNavOverflow, 500) // 500 milliseconds  matches CSS transition duration
}

const showBasket = () => {
  document.getElementById("basket-drawer").classList.add("active")
  document.getElementById("basket-overlay").classList.add("active")
  lockBodyScroll("nav-wrapper")
  revealNavOverflow()
}

const hideBasket = () => {
  document.getElementById("basket-drawer").classList.remove("active")
  document.getElementById("basket-overlay").classList.remove("active")
  unlockBodyScroll("nav-wrapper")
  setTimeout(hideNavOverflow, 500) // 500 milliseconds  matches CSS transition duration
}

const lockBodyScroll = (targetElementId) => {
  // const targetElement = document.getElementById(targetElementId)
  // bodyScrollLock.disableBodyScroll(targetElement)
}

const unlockBodyScroll = () => {
  // const targetElement = document.getElementById(targetElementId)
  // bodyScrollLock.enableBodyScroll(targetElement)
}

const revealNavOverflow = () => {
  document.getElementById("nav-wrapper").classList.add("active")
}

const hideNavOverflow = () => {
  document.getElementById("nav-wrapper").classList.remove("active")
}
