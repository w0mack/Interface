$(function(){
  $('#console-box').append('Waiting on an input..');
  
  $('li').click(function(){
    $('#console-box').append('<br>You have seleceted '+$(this).attr("class")+':'+$(this).text()+'.');
    $(this).toggleClass('selected').siblings().removeClass('selected');
; 
  });
  
});