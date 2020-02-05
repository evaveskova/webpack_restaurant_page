import './style.css'
import homePage from './home.js'
import menuPage from './menu.js'
import contactPage from './contact.js'

let header = document.createElement("h1");
header.textContent = "The World's Greatest Restaurant";
document.getElementById("nav").appendChild(header);

let homeTab = document.createElement("a");
homeTab.textContent = "Home";
document.getElementById("nav").appendChild(homeTab);
homeTab.addEventListener('click', () => {
  homePage();
});

let menuTab = document.createElement("a");
menuTab.textContent = "Menu";
document.getElementById("nav").appendChild(menuTab);
menuTab.addEventListener('click', () => {
  menuPage();
});

let contactTab = document.createElement("a");
contactTab.textContent = "Contact Us";
document.getElementById("nav").appendChild(contactTab);
contactTab.addEventListener('click', () => {
  contactPage();
});

homePage();
