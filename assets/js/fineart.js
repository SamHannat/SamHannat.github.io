const host = "https://api.samhannat.com/";
const getLatentUrl = host + "randomLatent";
const getPredictionUrl = host + "predict";
const getInterpolationUrl = host + "interpolation";
const getSliderValueUrl = host + "getSliderValue";
const changeLatentUrl = host + "changeLatent";

function initialSetup() {
  getRandomFace(setLeft);
  getRandomFace(setRight);
  setValues("left");
  setValues("right");
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
} 

function setValues(which) {
  var select = $("#"+which+"dimension");

  $.each([...Array(126).keys()], function(key, value) {
    if(key == 0) {
      select.append($("<option selected></option>").attr("value", key).text(value));
    } else {
      select.append($("<option></option>").attr("value", key).text(value));
    }
    
  });
}

function setLeft(data, latent) {
  setImage(data, "left", latent);
}
function setRight(data, latent) {
  setImage(data, "right", latent);
}

function setImage(data, which, latent) {
  document.cookie = which + "latent=" + latent;
  getScalerValue(setScalerValue, which);
  $("#" + which + "image").attr("src", "data:image/png;base64," + data);
}

 
function getRandomFace(callback) {
  $.getJSON(getLatentUrl, function(data) {
    predict(callback, data["latent"]);
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

function setScalerValue(data, which) {
  $("#" + which + "slider").val(data);
}


function getScalerValue(callback, which) {
  var latent = getCookie(which + "latent");
  var dimension = $("#" + which + "dimension").val();

  $.ajax(getSliderValueUrl,{
      'data': JSON.stringify({"latent": latent, "dimension":dimension}), 
      'type': 'POST',

      'processData': false,
      'contentType': 'application/json',//typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
      success: function (p, status, jqXHR) { 
        callback(p["id"], which);
      },
    });
}

function setLatent(data, which) {
  //data: latent representation of changed image
  // Step 1: Predict the image using the latent representation
  predict(setImage, data, which);
}

function predict(callback, latent_vector, which) {
  $.ajax(getPredictionUrl,{
      'data': JSON.stringify({"latent": latent_vector}), //{action:'x',params:['a','b','c']}
      'type': 'POST',

      'processData': false,
      'contentType': 'application/json',//typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
      success: function (p, status, jqXHR) { 
        if(which == undefined){
          callback(p["image"], latent_vector);
        }
        else{
          callback(p["image"], which, latent_vector);
        }
      },
    });
}

function changeLatent(callback, which) {
  var latent = getCookie(which + "latent");
  var dimension = $("#" + which + "dimension").val();
  var newID = $("#" + which + "slider").val();
  $.ajax(changeLatentUrl,{
      'data': JSON.stringify({"latent": latent, "dimension":dimension, "newid": newID}), 
      'type': 'POST',
      'processData': false,
      'contentType': 'application/json',//typically 'application/x-www-form-urlencoded', but the service you are calling may expect 'text/json'... check with the service to see what they expect as content-type in the HTTP header.
      success: function (p, status, jqXHR) { 
        callback(p["latent"], which);
      },
    });
}
