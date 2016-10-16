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

});
