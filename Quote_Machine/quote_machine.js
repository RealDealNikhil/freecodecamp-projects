// store colors
var colors = ["#922B21", "#B03A2E", "#76448A",
              "#6C3483", "#1F618D", "#2874A6",
              "#148F77", "#117A65", "#1E8449",
              "#239B56", "#AF601A", "#A04000"];

// to store the quote and the author
var quote = "";
var author = "";

// generate a new quote from https://quotesondesign.com
function getQuote() {

  // clear cache for the callback so new quotes are generated
  var cb = Math.round(new Date().getTime() / 1000);
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + cb, function(data) {
    // remove <p>...</p> markers from the quote
    quote = data[0].content.replace(/<p>|<\/p>/g, "");
    // remove html entities from the quote
    quote = $("<textarea />").html(quote).text();
    author = data[0].title;
    $("#text").html(data[0].content + "<p>— " + data[0].title + "</p>");
  });

  // change colors every time function is called
  var color = Math.floor(Math.random() * colors.length);
  $("body").css("background", colors[color]);
  $("#text").css("color", colors[color]);
  $("#tweet").css("background", colors[color]);
  $("#new-quote").css("background", colors[color]);
}

// script calls
$(document).ready(function() {
  getQuote();
  $("#new-quote").on("click", getQuote);
  $("#tweet").on("click", function() {
    window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(quote + '- '+ author));
  });
});
