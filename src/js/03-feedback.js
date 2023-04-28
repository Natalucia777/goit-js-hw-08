import throttle from 'lodash.throttle';
var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);


const LOCAL_STORAGE_KEY = "feedback-form-state";
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_KEY); }
function onTextareaInput(evt) {
  const message = evt.currentTarget.value;
  console.log(message);
  localStorage.setItem('feedback-form-state', message);
}
