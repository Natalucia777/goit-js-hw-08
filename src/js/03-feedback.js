import throttle from 'lodash.throttle';
var throttle = require('lodash.throttle');
const LOCAL_STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'), };
refs.form.addEventListener('submit', onFormSubmit);
populateTextarea();
function populateTextarea() {
  const sevedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (sevedMessage) {
    refs.input.value = sevedMessage.email;
    refs.textarea.value = sevedMessage.message;
  }
}
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
refs.form.addEventListener('input', throttle(evt => {
    const formData = new FormData(evt.currentTarget);
    let localStorageData = {};
    formData.forEach((value, name) => {
      const obj = {
        [name]: value,
      };
      Object.assign(localStorageData, obj);
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStorageData));
  }, 500));