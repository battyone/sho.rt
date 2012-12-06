$(document).ready(function(){
  $("#form").hide(0);
  $("#form").show(500, function(){
    $("#url").focus();
  });
});
