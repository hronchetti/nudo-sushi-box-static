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
