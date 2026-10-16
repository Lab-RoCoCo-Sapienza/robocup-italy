// Mobile menu toggle and Events dropdown (opens on hover with a mouse, on click or keyboard otherwise)
document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.menu-toggle')
  const nav = document.getElementById('main-nav')
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open')
    button.setAttribute('aria-expanded', open)
  })

  const dropdown = document.querySelector('.dropdown')
  const toggle = dropdown.querySelector('.dropdown-toggle')
  const setOpen = (open) => {
    dropdown.classList.toggle('open', open)
    toggle.setAttribute('aria-expanded', open)
  }
  toggle.addEventListener('click', () => setOpen(!dropdown.classList.contains('open')))
  document.addEventListener('click', (e) => { if (!dropdown.contains(e.target)) setOpen(false) })
  dropdown.addEventListener('keydown', (e) => { if (e.key === 'Escape') { setOpen(false); toggle.focus() } })
  dropdown.addEventListener('focusout', (e) => { if (!dropdown.contains(e.relatedTarget)) setOpen(false) })
})
