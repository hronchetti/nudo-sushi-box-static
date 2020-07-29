// Footer

const getFooterYear = () => {
  document.getElementById(
    "footer-site-copyright-year"
  ).innerHTML = new Date().getFullYear()
}

document.addEventListener("DOMContentLoaded", () => {
  getFooterYear()
})

// Navigation

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
  enableBasketButtonTabIndex()
}

const hideBasket = () => {
  document.getElementById("basket-drawer").classList.remove("active")
  document.getElementById("basket-overlay").classList.remove("active")
  unlockBodyScroll("nav-wrapper")
  setTimeout(hideNavOverflow, 500) // 500 milliseconds  matches CSS transition duration
  disableBasketButtonTabIndex()
}

const revealNavOverflow = () => {
  document.getElementById("nav-wrapper").classList.add("active")
}

const hideNavOverflow = () => {
  document.getElementById("nav-wrapper").classList.remove("active")
}

const enableBasketButtonTabIndex = () => {
  let basketButtons = document.getElementsByClassName("basket-drawer-button")

  for (let i = 0; i < basketButtons.length; i++) {
    basketButtons[i].tabIndex = "0"
  }
}

const disableBasketButtonTabIndex = () => {
  let basketButtons = document.getElementsByClassName("basket-drawer-button")

  for (let i = 0; i < basketButtons.length; i++) {
    basketButtons[i].tabIndex = "-1"
  }
}

const accessibleClick = (event, element) => {
  if (event.keyCode === 13) {
    element.click()
  }
}

const lockBodyScroll = (targetElementId) => {
  // const targetElement = document.getElementById(targetElementId)
  // bodyScrollLock.disableBodyScroll(targetElement)
}

const unlockBodyScroll = () => {
  // const targetElement = document.getElementById(targetElementId)
  // bodyScrollLock.enableBodyScroll(targetElement)
}

// Accounts

const showNewAddressForm = () => {
  document.getElementById("accounts-address-form-new").classList.add("active")
}

const hideNewAddressForm = () => {
  document
    .getElementById("accounts-address-form-new")
    .classList.remove("active")
}

const showEditAddressForm = () => {
  document.getElementById("accounts-address-form-edit").classList.add("active")
}

const hideEditAddressForm = () => {
  document
    .getElementById("accounts-address-form-edit")
    .classList.remove("active")
}

// FAQs

const toggleFaq = (faq) => {
  faq.classList.toggle("active")
  const faqAnswer = faq.nextElementSibling

  if (faqAnswer.style.maxHeight) {
    faqAnswer.style.maxHeight = null
  } else {
    faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px"
  }
}

// Delivery information

const setTabs = (e, tab) => {
  let i, tabs, tabButtons

  tabs = document.getElementsByClassName("tab")

  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active")
  }

  // Get all elements with class="tab-button" and remove the class "active"
  tabButtons = document.getElementsByClassName("tab-button")

  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active")
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tab).classList.add("active")
  e.currentTarget.classList.add("active")
}
