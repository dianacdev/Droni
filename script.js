// check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});

//form validation
document.addEventListener("DOMContentLoaded", function () {

  let inputs = document.querySelectorAll("input");
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let form = document.getElementById("form");
  for (let i = 0; i < inputs.length; ++i) {

    inputs[i].addEventListener("change", function (ev) {
      let el = ev.currentTarget;
      el.classList.add('was-validated');
      console.log(`element ${el.name} was changed!`);
    });

  }

  nameInput.addEventListener("input", ev => {validateName(ev.currentTarget)});

  form.addEventListener("submit", function (ev) {
    console.log("in submit");

    event.preventDefault();  //for now so we don't redirect
    event.stopPropagation();

    //Call custom validation here
    validateName(nameInput);

    //DOM checkValidity function tells you current status of form according to html5
    //'this' keyword will refer to the form since 'this' always refers to element that captured the event
    let formValid = this.checkValidity();

    if (!formValid) {
      console.log("form not valid");
      event.preventDefault();
      event.stopPropagation();
    }
    else {
      console.log("form is valid!!");

    }
    form.classList.add('was-validated');
  });


});
function validateName(el) {
  if (el.value === "Ken") {
    //setCustomValidity called with a null string sets input 'valid' property to true
    console.log("setCustomValidity('')")
    el.setCustomValidity('Name is Ken!');
  } else {
    //setCustomValidity called with a null string sets input 'invalid' property to true
    console.log("setCustomValidity('Name must be Ken!')")
    el.setCustomValidity('Name must be "Ken"!');
  }
}