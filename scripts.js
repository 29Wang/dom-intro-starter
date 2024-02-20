document.getElementById("firstPara").innerHTML +=
  " <span class='tan'>this is a new tan text</span>";

let images = document.getElementsByTagName("img");
console.log(images);

for (let img of images) {
  img.width = "250";
}

let ltBlueSpans = document.getElementsByClassName("light-blue");
let dkBlueSpans = document.getElementsByClassName("med-blue");

for (let span of ltBlueSpans) {
  span.style.color = "#7C9EA6";
}
for (let span of dkBlueSpans) {
  span.style.color = "#3C5E73";
}

let svgs = document.querySelectorAll("#svgs svg");

let colors = ["", "", "", "", ""];
