export default {
  bind (el) {
    el.addEventListener('click', function () {
      window.history.back()
    })
  }
}
