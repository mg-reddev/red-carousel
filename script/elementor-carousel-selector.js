// Otteniamo tutti gli elementi con la classe 'elementor-carousel'
const carousels = document.querySelectorAll('.elementor-carousel');

// Variabile per tracciare l'elemento attualmente selezionato
let selectedCarousel = null;

// Aggiungiamo un event listener a ciascun elemento
carousels.forEach(function(carousel) {
  carousel.addEventListener('click', function() {
    // Se l'utente clicca sulla card già selezionata, la deselezioniamo
    if (selectedCarousel === carousel) {
      carousel.classList.remove('hover-active');
      
      // Nascondiamo la barra blu e ripristiniamo lo stato normale dell'immagine
      const bar = carousel.querySelector('.bar-carousel');
      bar.style.width = '0%'; // Nascondi la barra blu
      const img = carousel.querySelector('.img-carousel > img');
      img.style.transform = 'translateY(0)'; // Ripristina l'immagine allo stato normale

      selectedCarousel = null; // Nessuna card selezionata
      return; // Esci dall'evento
    }

    // Se esiste una card selezionata, deselezioniamola prima di selezionare quella nuova
    if (selectedCarousel) {
      selectedCarousel.classList.remove('hover-active');
      const prevBar = selectedCarousel.querySelector('.bar-carousel');
      prevBar.style.width = '0%'; // Nascondi la barra blu della card precedente

      const prevImg = selectedCarousel.querySelector('.img-carousel > img');
      prevImg.style.transform = 'translateY(0)'; // Ripristina l'immagine della card precedente
    }

    // Impostiamo la nuova card come selezionata
    selectedCarousel = carousel;

    // Aggiungiamo la classe 'hover-active' alla card corrente
    carousel.classList.add('hover-active');

    // Mostriamo manualmente la barra blu
    const bar = carousel.querySelector('.bar-carousel');
    bar.style.width = '90%'; // Mostra la barra blu

    // Manteniamo anche l'hover sull'immagine
    const img = carousel.querySelector('.img-carousel > img');
    img.style.transform = 'translateY(-10px)'; // Mantieni lo stato hover dell'immagine
  });
});
