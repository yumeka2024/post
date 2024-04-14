$(function() {
  $('#btn').on('click', function(){
    $('#message').css('display', 'block');
  })

  $('#btn').on('mouseup', function(){
    setTimeout(function() {
      $('#message').css('display', 'none');
    }, 1300);
  });
});
