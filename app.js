// Document ready

$(document).ready(function(){
  $('.js-like').click(function(event){
    event.preventDefault();

    $(this).text('Liked!')
    .closest('.news-item')
    .addClass('is-liked');
  });


$('.js-add-link').click(function(event){
    event.preventDefault();

    $('.js-form').toggleClass('is-visible');
  });


// modal
  $('.js-show-modal').click(function(event){
    event.preventDefault();

    $('.js-modal').addClass('is-visible');
    $('.js-modal-overlay').addClass('is-visible');
  });

  $('.js-modal-overlay').click(function(event){
    $('.js-modal').removeClass('is-visible');
    $('.js-modal-overlay').removeClass('is-visible');
  });
});
