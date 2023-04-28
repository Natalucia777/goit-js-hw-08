import throttle from 'lodash.throttle';
var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('feedback-form textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);
function onFormSubmit(evt) {
  
}
function onTextareaInput(evt) {
  
}