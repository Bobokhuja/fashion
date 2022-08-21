$(document).ready(function () {

  $('.slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      480:{
        items:1
      }
    }
  });

  $('.products .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: ['PREV', 'NEXT'],
    responsive:{
      0:{
        items: 1
      },
      480:{
        items:1
      },
      680: {
        items: 2
      },
      1024: {
        items: 3
      },

    }
  });

  $('.carousel .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
      },
      480:{
        items:2
      },
      680: {
        items: 3
      },
      1024: {
        items: 4
      }
    }
  });

  $('.blog .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    navText: [],
    responsive:{
      0:{
        items:1,
        dots: true,
        nav: false
      },
      480: {
        items: 1,
        nav: false
      },
      680: {
        nav: true,
        items: 1
      },
      768:{
        nav: true,
        items:2
      }
    }
  });

  const search = document.querySelector('.icons__search');
  const body = document.querySelector('body');

  search.onclick = function (e) {
    e.stopPropagation();
    this.classList.add('icons__search--active');
  }
  body.onclick = function () {
    search.classList.remove('icons__search--active')
  }

});