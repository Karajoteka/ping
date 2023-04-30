const emailInput = document.querySelector('input');
const submitBtn  = document.querySelector('button');
const errorMessage = document.querySelector('.error-message');

submitBtn.addEventListener('click', submitForm);

function submitForm(event) {
  event.preventDefault();

  const inputEmail = emailInput.value;
  
  if (inputEmail === '' || !isValidEmail(inputEmail)) {
    errorMessage.classList.remove('inactive');
    emailInput.style.border = '2px solid hsl(354, 100%, 66%)';
  } else {
    errorMessage.classList.add('inactive');
    emailInput.style.border = '';
  }
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
