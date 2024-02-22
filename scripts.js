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

let colors = ["#F2Dcc9", "#d9bca3", "#7c9ea6", "#3c5e73", "#283040"];
for (let i = 0; i < svgs.length; i++) {
  svgs[i].style.stroke = colors[i];
}
document.querySelector("#query .bold").style.color = "#7c9ea6";
document.querySelector(".content_list li:first-of-type").textContent =
  "this is new list item text";
document.querySelectorAll(".content_list li")[2].innerHTML +=
  " <strong>Mengke </strong>";
document.querySelector("#remove a").removeAttribute("hidden");
