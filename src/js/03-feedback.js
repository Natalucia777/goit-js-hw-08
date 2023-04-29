import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const refs = document.querySelector('.feedback-form');
const  { elements: { email, message }, } = refs;
refs.addEventListener('submit', onFormSubmit);
populateTextarea();
function populateTextarea() {
  const sevedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (sevedMessage) {
    refs.email.value = sevedMessage.email;
    refs.message.value = sevedMessage.message;
  }
}
function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  localStorage.removeItem(LOCAL_STORAGE_KEY);
}
refs.addEventListener('input', throttle(addData, 500));
function addData() {
    const formData = { email: '', message: '', };
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  } 