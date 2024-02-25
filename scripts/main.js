const email = document.getElementById("mail");
const password = document.getElementById("password");
const password_repeat = document.getElementById("password_repeat");
const name_const = document.getElementById("name");
password.setCustomValidity("I am expecting an e-mail address!");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});
password.addEventListener("input", function (event) {
  if (password.validity.typeMismatch) {
    password.setCustomValidity("I am expecting an e-mail address!");
  } else {
    password.setCustomValidity("");
  }
});
password_repeat.addEventListener("input", function (event) {
  if (password_repeat.validity.typeMismatch) {
    password_repeat.setCustomValidity("I am expecting an e-mail address!");
  } else {
    password_repeat.setCustomValidity("");
  }
});
name_const.addEventListener("input", function (event) {
  if (name_const.validity.typeMismatch) {
    name_const.setCustomValidity("I am expecting an e-mail address!");
  } else {
    name_const.setCustomValidity("");
  }
});
