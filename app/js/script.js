var slides = $('.reviews__slide');
var currentSlide = 0;
ESC_KEYCODE = 27;

$('.reviews__toggle--before').on('click', function() {
    goToSlide(currentSlide - 1);
});

$('.reviews__toggle--after').on('click', function() {
    goToSlide(currentSlide + 1);
});

$('.reviews__switch-range').on('click', function() {
  var valueRange = $('.reviews__switch-range').val();

  goToSlide(Number(valueRange));
});

var goToSlide = function(n) {
 $(slides).removeClass('reviews__slide--showing');
 currentSlide = (n + slides.length) % slides.length;
 $(slides[currentSlide]).addClass('reviews__slide--showing');
};

$('.open-modal').on('click', function() {
  $('.modal').removeClass('modal--hidden');
  $('.modal').addClass('modal--show');
});

$('.exit').on('click', function(evt) {
  evt.preventDefault();
  closeModal()
});

$('.modal__btn').on('click', function(evt) {
  evt.preventDefault();
  closeModal()
});

$(window).on('click', function(evt) {
  var target = $(event.target);
  if (target.is('.modal')) {
    closeModal()
  }
});

$(window).on('keydown', function(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if ($('.modal').is('.modal--show')) {
      closeModal();
    }
  }
});

var closeModal = function() {
  $('.modal').removeClass('modal--show');
  $('.modal').addClass('modal--hidden');
};