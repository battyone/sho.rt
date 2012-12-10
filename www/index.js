$(document).ready(function(){
  $("#form").hide(0);
  $("#form").slideDown(500, function(){
    $("#url").focus();
  });
  $("#formdata").submit(function(e){
    e.preventDefault();
    $("#shorturl").hide(0);
    $.ajax({
      type: "POST",
      url: "/",
      data: $("#formdata").serialize(),
      dataType: "json",
      success: function(data){
        switch(parseInt(data.mcd)){
          case 1:
            $("#shorturl").html("<a href='http://" + data.msg + "'>"+ data.msg +"</a>");
            $("#shorturl").slideDown(500);
            break;
          default:
            $("#shorturl").html("<p>An error ocurred: " + data.msg + "</p>");
            $("#shorturl").slideDown(500);
            break;
        }
      }
    });
  });
});
