var rootUrl = "http://localhost:61071";

$(document).ready(function() {
  $('#login-form').on('submit', function(ev) {
    ev.preventDefault();
    var url = rootUrl + $(this).attr("action");
    var data = $(this).serializeArray();
    $.ajax({
      url:url,
      type:"POST",
      dataType:"json",
      data:data,
      contentType:"application/x-www-form-urlencoded; charset=utf-8",
      success: function(qjXHR) {
        // move to another page
      },
      error: function(qjXHR) {
        var errorData = qjXHR.responseJSON;
        // do soemthing with the errors
      }
    }); 
  });
});