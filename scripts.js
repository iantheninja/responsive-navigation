const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId), 
  nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('header_toggle', 'nav_menu')