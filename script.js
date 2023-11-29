$(document).ready(function () {
    let currentIndex = 0;
    const $slider = $('.slider');
    const slides = $('.slide');
  
    function updateSlider() {
      $slider.css('transform', 'translateX(' + (-currentIndex * 100) + '%)');
    }
  
    $('.slide').on('swipeleft', function () {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
      }
    });
  
    $('.slide').on('swiperight', function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  });
  