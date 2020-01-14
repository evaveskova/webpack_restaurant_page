let img = document.createElement("img");
img.src = "../src/assets/food_plate.jpg";
let src = document.getElementById("content");
src.appendChild(img);

let header = document.createElement("h1");
header.textContent = "The World's Greatest Restaurant";
document.getElementById("content").appendChild(header);
