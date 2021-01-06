const navToggle = () => {
  const navbar = document.querySelector('.navbar');
  const navbarContent = document.getElementById('navbarSupportedContent');
  const navbarIcon = document.querySelector('.navbar-toggler-icon');
  $(navbarContent).on('show.bs.collapse', function() {
    navbarIcon.classList.toggle('rotate-icon');
    navbar.classList.add('active')
  })
  $(navbarContent).on('hide.bs.collapse', function() {
    navbarIcon.classList.toggle('rotate-icon');
    navbar.classList.remove('active')
  })
};

export { navToggle };
