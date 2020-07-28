const toggleFaq = (faq) => {
  faq.classList.toggle("active")
  const faqAnswer = faq.nextElementSibling

  if (faqAnswer.style.maxHeight) {
    faqAnswer.style.maxHeight = null
  } else {
    faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px"
  }
}
