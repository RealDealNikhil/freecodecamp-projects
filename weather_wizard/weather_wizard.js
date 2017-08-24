// This app will NOT work over https because the resources used below are http only

// API Key
var API_KEY = "3725f8c6ca6db525e50d81194f6b30cd";

// store temperature
var temp;

// keep track of fahrenheit/celsius
var celsius = true;

// store colors to rotate once the website has loaded
var colors = ["rgba(179, 182, 183, 0.5)",
              "rgba(144, 148, 151, 0.5)",
              "rgba(113, 125, 126, 0.5)",
              "rgba(97, 106, 107, 0.5)"];

// store background weather images
var scenes = {sunny: "http://ipack.info/wp-content/uploads/2015/11/Animated-blue-sky-and-sun-light-video-background.jpg",
              rainy: "http://wallpapercraze.com/images/wallpapers/25334-drops-845884.jpeg",
             snow: "http://www.wallpaperup.com/uploads/wallpapers/2013/01/07/28265/big_thumb_a37ef69062c8eccadcd03fa1b7d46bf7.jpg",
             lightning: "http://wallpapercave.com/wp/Dy8BZRq.jpg",
             cloudy: "https://img11.deviantart.net/83f3/i/2012/114/c/e/cloudy_grey_sky_by_yuiharunashinozaki-d4x53ja.jpg"
             };

// get weather
function getWeatherInfo() {

  // get location (city and country)
  $.getJSON("http://ipinfo.io/json?", function(data) {
    var loc = data.loc.split(",");
    var lat = "lat=" + loc[0]
    var lon = "lon=" + loc[1]
    var api = "http://api.openweathermap.org/data/2.5/weather?";
    var appid = "&APPID=" + API_KEY;
    // get weather info based off of city
    $.getJSON(api + lat + "&" + lon + appid, function(info) {
      // give location
      $("#location").html("<p>" + data.city + ", " + data.country + "</p>");
      // give temperature
      $("#temp").prepend(Math.round(info.main.temp - 273.15));
      // save temperature (°C to var temp)
      temp = Math.round(info.main.temp - 273.15);
      // give weather info
      $("#weather").html("<p>" + info.weather[0].main + "</p>");
      // display according background
      backgroundGen(info.weather[0].main);
    });
  });
}

// determines the background image based on the weather obtained in getWeatherInfo()
function backgroundGen(weather) {
  var weather = weather.toLowerCase();
  switch(weather) {
    case "clouds":
      $("body").css("background", "url(" + scenes.cloudy + ")");
      break;
    case "rain":
      $("body").css("background", "url(" + scenes.rainy + ")");
      break;
    case "snow":
      $("body").css("background", "url(" + scenes.snow + ")");
      break;
    case "clear":
      $("body").css("background", "url(" + scenes.sunny + ")");
      break;
    case "thunderstorm":
      $("body").css("background", "url(" + scenes.lightning + ")");
      break;
    default:
      $("body").css("background", "url(" + scenes.sunny + ")");
                }
}

// when doc is loaded
$(document).ready(function() {

  // choose a random color background
  var color = Math.floor(Math.random() * colors.length);
  $(".jumbotron").css("background", colors[color]);

  // load in weather info for display
  getWeatherInfo();

  // if the temperature units symbol is clicked switch between °C and °F
  $("#units").on("click", function() {
    if (celsius) {
      celsius = false;
      $("#units").html("F");
      $("#temp").html(Math.round(temp * 9/5 + 32));
    } else {
      celsius = true;
      $("#units").html("C");
      $("#temp").html(temp);
    }
  });
});
