import "./template.css";

function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function setMailErrorMessage(message) {
  const emailError = document.querySelector(".mail-error");
  emailError.textContent = message;
}

function emailValidation() {
  if (!emailPath.validity.valid) {
    emailPath.classList.add("input-error");
    if (emailPath.validity.valueMissing) {
      setMailErrorMessage("This field cannot be empty");
    } else if (!isEmailValid(emailPath.value)) {
      setMailErrorMessage("Not correct email format");
    }

    return false;
  } else {
    setMailErrorMessage("");
    emailPath.classList.remove("input-error");
    return true;
  }
}

const emailPath = document.querySelector("#mail-input");

emailPath.addEventListener("input", emailValidation);

function isUSAZipCode(zipCode) {
  const zipCodeRegex = /^\d{5}(-\d{4})?$/;

  return zipCodeRegex.test(zipCode);
}
function isNotLetter(zipCode) {
  const notLetterRegex = /[a-zA-Z]/;
  return notLetterRegex.test(zipCode);
}
function setZipCodeErrorMessage(message) {
  const zipCodeError = document.querySelector(".zip-code-error");
  zipCodeError.textContent = message;
}
function zipCodeValidation() {
  if (
    zipCodePath.validity.valueMissing ||
    zipCodePath.validity.tooShort ||
    !isUSAZipCode(zipCodePath.value) ||
    isNotLetter(zipCodePath.value)
  ) {
    zipCodePath.classList.add("input-error");

    if (zipCodePath.validity.valueMissing) {
      setZipCodeErrorMessage("This field cannot be empty");
    } else if (isNotLetter(zipCodePath.value)) {
      setZipCodeErrorMessage("Zip code cannot have letters");
    } else if (zipCodePath.validity.tooShort) {
      setZipCodeErrorMessage("Zip code has minimum 5 numbers");
    } else if (!isUSAZipCode(zipCodePath.value)) {
      setZipCodeErrorMessage("Correct zip code is in format 12345-1234");
    } else {
      setZipCodeErrorMessage("");
      zipCodePath.classList.remove("input-error");
    }
    return false;
  } else {
    setZipCodeErrorMessage("");
    zipCodePath.classList.remove("input-error");
    return true;
  }
}
const zipCodePath = document.querySelector("#zip-code-input");
zipCodePath.addEventListener("input", zipCodeValidation);

function hasMinimumOneletter(password) {
  const passwordRegex = /[A-Z]/;
  return !passwordRegex.test(password);
}
function hasMinimumOneNumber(password) {
  const passwordRegex = /\d/;
  return !passwordRegex.test(password);
}
function setPasswordErrorMessage(message) {
  const passwordError = document.querySelector(".password-error");
  passwordError.textContent = message;
}

function passwordValidation() {
  if (
    passwordPath.validity.valueMissing ||
    passwordPath.validity.tooShort ||
    hasMinimumOneletter(passwordPath.value) ||
    hasMinimumOneNumber(passwordPath.value)
  ) {
    passwordPath.classList.add("input-error");
    if (passwordPath.validity.valueMissing) {
      setPasswordErrorMessage("You have to set password");
    } else if (passwordPath.validity.tooShort) {
      setPasswordErrorMessage(
        `Password must have at least 6 characters. Now it is ${passwordPath.value.length}`,
      );
    } else if (hasMinimumOneletter(passwordPath.value)) {
      setPasswordErrorMessage("Password must have at least 1 uppercase letter");
    } else if (hasMinimumOneNumber(passwordPath.value)) {
      setPasswordErrorMessage("Password must have at least 1 number");
    }
    return false;
  } else {
    setPasswordErrorMessage("");
    passwordPath.classList.remove("input-error");
    return true;
  }
}

function setPasswordRepeatErrorMessage(message) {
  const passworRepeatdError = document.querySelector(".password-repeat-error");
  passworRepeatdError.textContent = message;
}

const passwordPath = document.querySelector("#password-input");

passwordPath.addEventListener("input", passwordValidation);

function passwordRepeatValidation() {
  if (
    passwordRepeatPath.validity.valueMissing ||
    passwordRepeatPath.validity.tooShort ||
    hasMinimumOneletter(passwordRepeatPath.value) ||
    hasMinimumOneNumber(passwordRepeatPath.value) ||
    passwordRepeatPath.value !== passwordPath.value
  ) {
    passwordRepeatPath.classList.add("input-error");
    if (passwordRepeatPath.validity.valueMissing) {
      setPasswordRepeatErrorMessage("You have to set password");
    } else if (passwordRepeatPath.validity.tooShort) {
      setPasswordRepeatErrorMessage(
        `Password must have at least 6 characters. Now it is ${passwordRepeatPath.value.length}`,
      );
    } else if (hasMinimumOneletter(passwordRepeatPath.value)) {
      setPasswordRepeatErrorMessage(
        "Password must have at least 1 uppercase letter",
      );
    } else if (hasMinimumOneNumber(passwordRepeatPath.value)) {
      setPasswordRepeatErrorMessage("Password must have at least 1 number");
    } else if (passwordRepeatPath.value !== passwordPath.value) {
      setPasswordRepeatErrorMessage("Passwords must be the same");
    }
    return false;
  } else {
    setPasswordRepeatErrorMessage("");
    passwordRepeatPath.classList.remove("input-error");
    return true;
  }
}

const passwordRepeatPath = document.querySelector("#password-repeat-input");
passwordRepeatPath.addEventListener("input", passwordRepeatValidation);

function formValidation(event) {
  const submitBtn = document.querySelector("button");
  if (
    emailValidation() &&
    zipCodeValidation() &&
    passwordValidation() &&
    passwordRepeatValidation()
  ) {
    alert("Properly submitted");
  } else {
    event.preventDefault();
  }
}
const submitBtn = document.querySelector("button");
submitBtn.addEventListener("click", formValidation);
