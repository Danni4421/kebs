document.getElementById('flower-button').addEventListener('click', () => {
  setTimeout(() => {
    window.location = 'index.html#flower'
  }, 700)

  setTimeout(() => {
    const flower = document.getElementById('load-container')
    flower.classList.remove('not-loaded')
    flower.classList.add('loaded')
  }, 500)
})
