const email = document.getElementById("mail");
const password = document.getElementById("password");
const password_repeat = document.getElementById("password_repeat");
const name_const = document.getElementById("name");
const form = document.getElementsByTagName("form")[0];

email.addEventListener("input", function (event) {
  if (!email.validity.typeMismatch) {
    email.setCustomValidity("");
  } 
});
password.addEventListener("input", function (event) {
  if (!password.validity.typeMismatch) {
    password.setCustomValidity("");
  } 
});
password_repeat.addEventListener("input", function (event) {
  if (!password_repeat.validity.typeMismatch) {
    password_repeat.setCustomValidity("");
  } 
});
name_const.addEventListener("input", function (event) {
  if (!name_const.validity.typeMismatch) {
    name_const.setCustomValidity("");
  } 
});

form.addEventListener("submit", function (event) {

    if (!email.validity.valid) {
      email.setCustomValidity("fgnfn");
        showError();
        event.preventDefault();
    }
    if (!password.validity.valid) {
      password.setCustomValidity("fgnfn");
        showError();
        event.preventDefault();
    }
    if (!password_repeat.validity.valid) {
      password_repeat.setCustomValidity("fgnfn");
        showError();
        event.preventDefault();
    }
    if (!name_const.validity.valid) {
      name_const.setCustomValidity("fgnfn");
        showError();
        event.preventDefault();
    }
  }
);


