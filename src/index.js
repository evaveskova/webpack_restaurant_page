import "./style.css"

let header = document.createElement("h1");
header.textContent = "The World's Greatest Restaurant";
document.getElementById("nav").appendChild(header);

let homeTab = document.createElement("a");
homeTab.textContent = "Home";
document.getElementById("nav").appendChild(homeTab);

let menuTab = document.createElement("a");
menuTab.textContent = "Menu";
document.getElementById("nav").appendChild(menuTab);

let contactTab = document.createElement("a");
contactTab.textContent = "Contact Us";
document.getElementById("nav").appendChild(contactTab);

import homePage from "./home.js"

homePage();
