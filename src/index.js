import "./style.css"

let header = document.createElement("h1");
header.textContent = "The World's Greatest Restaurant";
document.getElementById("content").appendChild(header);

let img = document.createElement("img");
img.src = "../src/assets/food_plate.jpg";
let src = document.getElementById("content");
src.appendChild(img);

let description = document.createElement("p");
description.textContent = `Do you like food? Great! Because we have lots of it.
That's because we're a restaurant, and restaurants serve food.
We've been around since 1202, starting out as a small pub that serves
sheep's intenstines, to a renowed, 5-star establishment with
delightful, overpriced, tiny food. Enjoy!`;
document.getElementById("content").appendChild(description);
