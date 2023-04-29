import throttle from "lodash.throttle";
const formEl = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';


const {
  elements: { email, message },
} = formEl;

// Зчитування даних з полів та збереження їх у вигляді об'єкту
formEl.addEventListener('input', throttle(saveDataForm, 500));

function saveDataForm() {
  const formData = {
    email: '',
    message: '',
  };

  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

// Заповнення полів форми, збереженими даними у сховище
document.addEventListener('DOMContentLoaded', loadDataForm);

function loadDataForm() {
  if (!localStorage.getItem(storageKey)) {
    email.removeAttribute('value');
    message.textContent = '';
  } else {
    const savedDataFormObj = JSON.parse(localStorage.getItem(storageKey));
    if (savedDataFormObj.email) {
      email.setAttribute('value', savedDataFormObj.email);
    }
    message.textContent = savedDataFormObj.message;
  }
}

// Очищення сховища і полів, та виведення у консоль об'єкта з поточними даними
formEl.addEventListener('submit', update);

function update(event) {
  event.preventDefault();

  if (!localStorage.getItem(storageKey) || !message.value || !email.value) {
    return;
  } else {
    console.log(JSON.parse(localStorage.getItem(storageKey)));
    localStorage.clear();
    formEl.reset();
    loadDataForm();
  }
}
// import throttle from 'lodash.throttle';
// var throttle = require('lodash.throttle');

// const LOCAL_STORAGE_KEY = 'feedback-form-state';
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('.feedback-form input'), };
// refs.form.addEventListener('submit', onFormSubmit);
// populateTextarea();
// function populateTextarea() {
//   const sevedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (sevedMessage) {
//     refs.input.value = sevedMessage.email;
//     refs.textarea.value = sevedMessage.message;
//   }
// }
// function onFormSubmit(evt) {
//   evt.preventDefault();
//   evt.currentTarget.reset();
//   console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
//   localStorage.removeItem(LOCAL_STORAGE_KEY);
// }
// refs.form.addEventListener('input', throttle(evt => {
//     const formData = new FormData(evt.currentTarget);
//     let localStorageData = {};
//     formData.forEach((value, name) => {
//       const obj = {
//         [name]: value,
//       };
//       Object.assign(localStorageData, obj);
//     });
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(localStorageData));
// }, 500));

  // refs.form.addEventListener('input', throttle(onTextareaInput, 500));

  // refs.form.addEventListener('submit', e => {
  //   e.preventDefault();
  //   e.currentTarget.reset();
  //   const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  //   localStorage.removeItem(STORAGE_KEY);
  // });