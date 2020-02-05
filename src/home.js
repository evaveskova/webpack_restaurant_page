import "./style.css"

const homePage =(() => {
  const src = document.getElementById("content");
  src.innerHTML = "";

  const homeContainer = document.createElement('DIV');
  homeContainer.classList.add('home-container');
  src.appendChild(homeContainer);

  const img = document.createElement("img");
  img.src = "../src/assets/food_plate.jpg";
  homeContainer.appendChild(img);

  const description = document.createElement("p");
  description.textContent = `Do you like food? Great! Because we have lots of it.
  That's because we're a restaurant, and restaurants serve food.
  We've been around since 1202, starting out as a small pub that serves
  sheep's intenstines, to a renowed, 5-star establishment with
  delightful, overpriced, tiny food. Enjoy!`;
  homeContainer.appendChild(description);
})

export default homePage;
