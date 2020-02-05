import "./style.css"

const contactPage = (() => {
  const src = document.getElementById("content");
  src.innerHTML = "";

  const contactContainer = document.createElement('DIV');
  contactContainer.classList.add('contact-container');
  src.appendChild(contactContainer);

  const contactHeader = document.createElement('H2');
  contactHeader.textContent = 'Contact Us'
  contactContainer.appendChild(contactHeader);

  const phoneNumber = document.createElement('P');
  phoneNumber.textContent = 'Telephone: 02-333-835';
  contactContainer.appendChild(phoneNumber);

  const email = document.createElement('P');
  email.textContent = 'Email: contact@greatestrestaurant.com';
  contactContainer.appendChild(email);
})

export default contactPage;
