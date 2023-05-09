// este archivo contendra los principales archivos js de la pag en general

//para que el menu se desplace cuando hacemos scroll 
window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }
  });