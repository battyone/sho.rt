$(document).ready(function(){
  $("#form").hide(0);
  $("#form").slideDown(500, function(){
    $("#url").focus();
  });
  $("#formdata").submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/",
      data: $("#formdata").serialize(),
      success: function(data){
        $("#shorturl").html("<a href='" + data + "'>"+ data +"</a>");
        $("#shorturl").slideDown(500);
      }
    });
  });
});
