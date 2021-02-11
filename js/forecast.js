var url = "http://127.0.0.1:5000/getPredict";


function setForecsating(aqi) {
  if (aqi <= 50) {
    textMeaning.innerText = "ดี"
    textMeaning.setAttribute('style','-webkit-text-fill-color: green;width: 100%;')
    circle.style.background = "#5AC25B"
  } //"green-3x.png";
  else if (aqi <= 100) {
    textMeaning.innerText = "ปานกลาง"
    textMeaning.setAttribute('style','-webkit-text-fill-color: yellow;width: 100%;')
    circle.style.background = "#F2F051"
  } //"yellow-3x.png";
  else if (aqi <= 150) {
    textMeaning.innerText = "มีผลกระทบต่อกลุ่มเสี่ยง"
    textMeaning.setAttribute('style','-webkit-text-fill-color: orange;width: 100%;')
    circle.style.background = "#F78A24"
  } //"orange-3x.png";
  else if (aqi <= 200) {
    textMeaning.innerText = "มีผลกระทบต่อสุขภาพ"
    textMeaning.setAttribute('style','-webkit-text-fill-color: red;width: 100%;')
    circle.style.background = "#E30B17"
  } //"red-3x.png";
  else if (aqi <= 300) {
    textMeaning.innerText = "มีผลกระทบมาก"
    textMeaning.setAttribute('style','-webkit-text-fill-color: purple;width: 100%;')
    circle.style.background = "#AF2C7F"
  } //"purple-3x.png";
  else {
    textMeaning.innerText = "อันตราย"
    textMeaning.setAttribute('style','-webkit-text-fill-color: brown;width: 100%;')
    circle.style.background = "#92393D"
  } //"brown-3x.png";
}

var getPredict = function (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
};

getPredict(url, function (err, data) {
  if (err !== null) {
    alert("Something went wrong: " + err);
  } else {
    console.log(data.predict);
    // textAQI.innerText = data.value;
    // setForecsating(data.predict)
    

  }
});
