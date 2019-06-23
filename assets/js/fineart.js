const host = "http://35.232.244.226:5000/";
const getLatentUrl = host + "randomLatent";
const getPredictionUrl = host + "predict";
const getInterpolationUrl = host + "interpolation";
const getSliderValue = host + "getSliderValue"

function initialSetup() {
  getRandomFace(setLeft);
  getRandomFace(setRight);
  interpolation(setInterpolation);
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

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

  $.getJSON(getLatentUrl, function(data) {

    latent_vector = data["latent"];
    $.ajax(getPredictionUrl,{
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

function setInterpolation(data) {
  $("#interpolation").attr("src", "data:image/png;base64," + data);
}

function interpolation(callback) {
  var latent1 = getCookie("leftlatent");
  var latent2 = getCookie("rightlatent");
  var n = $("#interpolationNum").val();
  $.ajax(getInterpolationUrl,{
      'data': JSON.stringify({"latent1": latent1, "latent2": latent2, "n":n}), 
      'type': 'POST',

      'processData': false,
      'contentType': 'application/json',//typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
      success: function (p, status, jqXHR) { 
        callback(p["image"]);
      },
    });
}