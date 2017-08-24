// need fixes on jquery calls

$(document).ready(function() {

  $("#query").on("submit", function() {
    var root = "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&redirects=1&exsentences=1&exlimit=10&exintro=1&explaintext=1&gsrnamespace=*&gsrlimit=10&gsrsearch=";
    var q = encodeURI($("#q").val());
    var cb = "&callback=?";
    console.log(q);
    console.log(root + q + cb);
    var url = root + q + cb
    $.ajax({
      url: url,
      type: "GET",
      dataType: "json",
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.log(error);
      }
    });
  });
});
