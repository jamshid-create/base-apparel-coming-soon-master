const btnEl = document.getElementById('btn');
const inputEl = document.getElementById('input');
const textEl = document.getElementById('show-notification');
const errorEl = document.querySelector('.error-icon');

function checkEmail() {
  const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const email = inputEl.value;

  if(check.test(email)) {
    textEl.innerText = 'correct Email';
    textEl.classList.remove('active');
  } else{
    textEl.innerText = 'Please provide a valid email';
    textEl.classList.remove('active');
    errorEl.classList.remove('active');
  }
}

btnEl.addEventListener('click', () => {
  checkEmail();
});