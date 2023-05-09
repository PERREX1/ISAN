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

  //las imagenes que aparezcan 

  window.addEventListener('scroll', function() {
    var textSection = document.querySelector('.texto');
    var imageSection = document.querySelector('.imagenes');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
  
    var textSectionHeight = textSection.offsetHeight;
    var imageSectionHeight = imageSection.offsetHeight;
  
    if (scrollPosition > textSectionHeight - windowHeight / 2) {
      imageSection.classList.add('img-visible');
      imageSection.classList.remove('img-hidden');
    } else {
      imageSection.classList.add('img-hidden');
      imageSection.classList.remove('img-visible');
    }
  });