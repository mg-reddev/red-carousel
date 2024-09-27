const carousels = document.querySelectorAll('.elementor-carousel');

let selectedCarousel = null;

carousels.forEach(function(carousel) {
  carousel.addEventListener('click', function() {
    if (selectedCarousel === carousel) {
      carousel.classList.remove('hover-active');
      carousel.classList.remove('selected');

      const bar = carousel.querySelector('.bar-carousel');
      bar.style.width = '';
      const img = carousel.querySelector('.img-carousel > img');
      img.style.transform = '';
      document.body.classList.remove('card-selected');

      selectedCarousel = null;
      return;
    }

    if (selectedCarousel) {
      selectedCarousel.classList.remove('hover-active');
      selectedCarousel.classList.remove('selected');

      const prevBar = selectedCarousel.querySelector('.bar-carousel');
      prevBar.style.width = '';

      const prevImg = selectedCarousel.querySelector('.img-carousel > img');
      prevImg.style.transform = '';
    }

    selectedCarousel = carousel;

    carousel.classList.add('hover-active');
    carousel.classList.add('selected');

    const bar = carousel.querySelector('.bar-carousel');
    bar.style.width = '90%';

    const img = carousel.querySelector('.img-carousel > img');
    img.style.transform = 'translateY(-10px)';

    document.body.classList.add('card-selected');
  });
});
