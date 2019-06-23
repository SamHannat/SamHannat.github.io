const host = "http://35.232.244.226:5000/";
const getLatentUrl = host + "randomLatent";
const getPredictionUrl = host + "predict";
getRandomFace(setLeft);


function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url, true);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}
function hexToBase64(str) {
	return btoa(String.fromCharCode.apply(null, str.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
}
/*
function getRandomFace() {
	const url = host + "randomFace";
	$.getJSON(url, function(data) {
		$("#leftimage").attr("src", "data:image/png;base64," + data["image"]);
	});	
}
*/
function setLeft(data, latent) {
  setImage(data, "left", latent);
}
function setRight(data, latent) {
  setImage(data, "right", latent);
}

function setImage(data, which, latent) {
  document.cookie = which + "latent=" + latent;
  $("#" + which + "image").attr("src", "data:image/png;base64," + data);
}

 
function getRandomFace(callback) {
  var latent_vector;
  var image;
  $.getJSON(getLatentUrl, function(data) {

    latent_vector = data["latent"];
    var p = $.ajax(getPredictionUrl,{
      'data': JSON.stringify({"latent": latent_vector}), //{action:'x',params:['a','b','c']}
      'type': 'POST',

      'processData': false,
      'contentType': 'application/json',//typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
      success: function (p, status, jqXHR) { 
        callback(p["image"], latent_vector);
      },
    });

  }, "json");
 
}