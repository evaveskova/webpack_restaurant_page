import './style.css';

const menuPage = (() => {
  const src = document.getElementById('content');
  src.innerHTML = '';

  const menuContainer = document.createElement('DIV');
  menuContainer.classList.add('menu-container');
  src.appendChild(menuContainer);

  const menuHeader = document.createElement('H2');
  menuHeader.textContent = 'Our Menu';
  menuContainer.appendChild(menuHeader);

  const menuItem1 = document.createElement('P');
  menuItem1.textContent = 'Caviar and Strawberries';
  menuContainer.appendChild(menuItem1);

  const menuItem2 = document.createElement('P');
  menuItem2.textContent = 'Salmon with Spring Vegetables';
  menuContainer.appendChild(menuItem2);

  const menuItem3 = document.createElement('P');
  menuItem3.textContent = 'Beef Wellington';
  menuContainer.appendChild(menuItem3);

  const menuItem4 = document.createElement('P');
  menuItem4.textContent = 'Souffle with Gold Leaf';
  menuContainer.appendChild(menuItem4);

  const menuItem5 = document.createElement('P');
  menuItem5.textContent = 'Trio of Chocolate Tarts';
  menuContainer.appendChild(menuItem5);
});

export default menuPage;
