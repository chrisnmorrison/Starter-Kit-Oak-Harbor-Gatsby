document.addEventListener('scroll', e => {
  const scroll = document.documentElement.scrollTop
  if (scroll >= 100) {
    document.querySelector('body').classList.add('scroll')
  } else {
    document.querySelector('body').classList.remove('scroll')
  }
})
