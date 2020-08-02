// Navigation

const showMobileNav = () => {
  document.getElementById("nav-mobile").classList.add("active")
  document.getElementById("nav-mobile-overlay").classList.add("active")
  document.getElementsByTagName("body")[0].style.overflow = "hidden"
  revealNavOverflow()
}

const hideMobileNav = () => {
  document.getElementById("nav-mobile").classList.remove("active")
  document.getElementById("nav-mobile-overlay").classList.remove("active")
  document.getElementsByTagName("body")[0].style.overflow = "visible"
  setTimeout(hideNavOverflow, 500) // 500 milliseconds  matches CSS transition duration
}

const showBasket = () => {
  document.getElementById("basket-drawer").classList.add("active")
  document.getElementById("basket-overlay").classList.add("active")
  document.getElementsByTagName("body")[0].style.overflow = "hidden"
  revealNavOverflow()
  enableBasketButtonTabIndex()
}

const hideBasket = () => {
  document.getElementById("basket-drawer").classList.remove("active")
  document.getElementById("basket-overlay").classList.remove("active")
  document.getElementsByTagName("body")[0].style.overflow = "visible"
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

// Products

const toggleProductMoreInformation = (product) => {
  document.getElementById(product).classList.toggle("active")
  const productOverlay = product + "-overlay"
  document.getElementById(productOverlay).classList.toggle("active")

  if (document.getElementById(product).classList.contains("active")) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden"
  } else {
    document.getElementsByTagName("body")[0].style.overflow = "visible"
  }
}

// Counter

const increaseCounter = (counterElement) => {
  const counterInputWrapper = counterElement.previousElementSibling.children

  for (let i = 0; i < counterInputWrapper.length; i++) {
    if (counterInputWrapper[i].type === "number") {
      if (counterInputWrapper[i].value === "1") {
        counterElement.previousElementSibling.previousElementSibling.disabled = false
      }
      counterInputWrapper[i].value++
    }
  }
}

const decreaseCounter = (counterElement) => {
  const counterInputWrapper = counterElement.nextElementSibling.children

  for (let i = 0; i < counterInputWrapper.length; i++) {
    if (counterInputWrapper[i].type === "number") {
      if (
        counterInputWrapper[i].value === "2" ||
        Math.sign(counterInputWrapper[i].value) !== 1
      ) {
        counterElement.disabled = true
      }
      counterInputWrapper[i].value--
    }
  }
}

// Footer

const getFooterYear = () => {
  document.getElementById(
    "footer-site-copyright-year"
  ).innerHTML = new Date().getFullYear()
}

// Forms

const togglePasswordVisibility = (passwordButton) => {
  if (passwordButton.classList.contains("icon-show")) {
    // Changing icon
    passwordButton.classList.remove("icon-show")
    passwordButton.classList.add("icon-hide")
    // Mutating input type
    passwordButton.previousElementSibling.type = "text"
  } else if (passwordButton.classList.contains("icon-hide")) {
    // Changing icon
    passwordButton.classList.remove("icon-hide")
    passwordButton.classList.add("icon-show")
    // Mutating input type
    passwordButton.previousElementSibling.type = "password"
  }
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

// Banners

const closeBanner = (bannerId) => {
  document.getElementById(bannerId).classList.remove("active")
  sessionStorage.setItem(bannerId, "false")
}

// Contact form

const showToasts = (e, buttonElement) => {
  e.preventDefault()
  buttonElement.classList.add("loading")
  // CLEAR FORM

  // Send request

  // Once response is recieved (no timeout in real usage)
  setTimeout(() => {
    buttonElement.classList.remove("loading")
    // if -> Positive feedback
    document.getElementById("toast-wrapper").innerHTML =
      '<div class="toast positive"><span class="toast-message">Issue submitted, we’ll be in contact within 1-2 working days</span></div>'
    // if -> Negative feedback (case handled, changing message to suit case)
    //document.getElementById("toast-wrapper").innerHTML +=
    //  '<div class="toast negative"><span class="toast-message">Network error, no network connection found</span></div>'
  }, 1000)
}

// Check we deliver

const showDeliveryResponse = (e) => {
  e.preventDefault()

  document.getElementById("dialog-overlay").classList.add("active")
  // if positive ->
  document.getElementById("dialog-positive").classList.add("active")
  // if negative ->
  //document.getElementById("dialog-negative").classList.add("active")
}

const hideDeliveryResponse = (e) => {
  e.preventDefault()

  document.getElementById("dialog-overlay").classList.remove("active")
  // if positive ->
  document.getElementById("dialog-positive").classList.remove("active")
  // if negative ->
  //document.getElementById("dialog-negative").classList.remove("active")
}

// Document ready

document.addEventListener("DOMContentLoaded", () => {
  getFooterYear()
})
