function getInitialChannels () {
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
    console.log(data);
    var channelName = "freecodecamp";
    displayData(data, channelName);
  });
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/ESL_SC2?callback=?', function(data) {
    console.log(data);
    var channelName = "ESL_SC2";
    displayData(data, channelName);
  });
  $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/xcaliz0rz?callback=?', function(data) {
    console.log(data);
    var channelName = "xcaliz0rz";
    displayData(data, channelName);
  });
}

function displayData (data, channelName) {
  var online = true;
  var status;
  var link = "https://www.twitch.tv/" + channelName;
  if (data.stream == null) {
    status = "Offline";
  } else {
    var game = data.stream.game;
    status = game + ": " + data.stream.channel.status;
  }
  console.log(channelName + "\t" + status);
  var parent = document.getElementById(channelName);
  var p = document.createElement("p");
  var node = document.createTextNode(": " + status);
  var a = document.createElement("a");
  a.textContent = channelName;
  a.setAttribute("href", link);
  parent.appendChild(a);
  parent.appendChild(p.appendChild(node));
}

$(document).ready(function() {
  getInitialChannels();
  console.log("_______")
});
