const now1 = new Date();

const date_TH = now1.toLocaleDateString("th-TH", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});

const dateText = document.getElementById("text-date-th");
const timeText = document.getElementById("text-time");

dateText.innerText = date_TH;
timeText.innerText =
  "เวลา " +
  now1
    .toLocaleDateString("th-TH", {
      hour: "numeric",
      minute: "numeric",
    })
    .split(" ")[1] +
  " น.";

const Text1 = document.getElementById("time1");
const Text2 = document.getElementById("time2");
const Text3 = document.getElementById("time3");

var [fHour, sHour] = now1
  .toLocaleDateString("th-TH", {
    hour: "numeric",
    minute: "numeric",
  })
  .split(" ")[1]
  .split(":")[0]
  .split("");

Text1.innerText = fHour + "" + (parseInt(sHour) + 1) + ":00 น.";
Text2.innerText = fHour + "" + (parseInt(sHour) + 2) + ":00 น.";
Text3.innerText = fHour + "" + (parseInt(sHour) + 3) + ":00 น.";
