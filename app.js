// Document ready

$(document).ready(function(){
  $('.js-like').click(function(event){
    event.preventDefault();

    $(this).text('Liked!')
    .closest('.news-item')
    .addClass('is-liked');
  });
});
