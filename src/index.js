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
  } else {
    setMailErrorMessage("");
    emailPath.classList.remove("input-error");
  }
}

const emailPath = document.querySelector("#mail-input");

emailPath.addEventListener("input", emailValidation);

function isUSAZipCode(zipCode) {
  const zipCodeRegex = /^\d{5}(-\d{4})?$/;

  return zipCodeRegex.test(zipCode);
}
function setZipCodeErrorMessage(message) {
  const zipCodeError = document.querySelector(".zip-code-error");
  zipCodeError.textContent = message;
}
function zipCodeValidation() {
  if (
    zipCodePath.validity.valueMissing ||
    zipCodePath.validity.tooShort ||
    !isUSAZipCode(zipCodePath.value)
  ) {
    zipCodePath.classList.add("input-error");

    if (zipCodePath.validity.valueMissing) {
      setZipCodeErrorMessage("This field cannot be empty");
    } else if (zipCodePath.validity.tooShort) {
      setZipCodeErrorMessage("Zip code has minimum 5 numbers");
    } else if (!isUSAZipCode(zipCodePath.value)) {
      setZipCodeErrorMessage("This is not valid zip code");
    }
  } else {
    setZipCodeErrorMessage("");
    zipCodePath.classList.remove("input-error");
  }
}
const zipCodePath = document.querySelector("#zip-code-input");
zipCodePath.addEventListener("input", zipCodeValidation);
