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
