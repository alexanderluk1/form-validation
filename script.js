const form = document.querySelector("#form");
const formGroups = document.querySelectorAll(".form-group");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#password-confirmation");
const checkbox = document.querySelector("#terms");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // To hold all error messages
  let errorMessages = [];
  // Clear all error messages initially
  clearErrors();

  // Get Textbox Values
  const usernameValue = username.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;

  // Form Validation
  if (!checkbox.checked) errorMessages.push("You must accept the terms");
  if (usernameValue.length < 6) {
    errorMessages.push("Username must be at least 6 characters long");
  }
  if (passwordValue.length < 10) {
    errorMessages.push("Password must be at least 10 characters long");
  } else {
    if (passwordValue != confirmPasswordValue) {
      errorMessages.push("Password and confirmation password must match");
    }
  }

  // If there are errors, display errors
  if (errorMessages.length > 0) {
    showErrors(errorMessages);
    // Reset the array back to empty
    errorMessages = [];
  } else {
    // Redirect to the success page
    window.location.href = "thank-you.html";
  }
});

// This will clear all errors from the errorList
function clearErrors() {
  const errorsContainer = document.querySelector(".errors");

  // Selecting the parent element
  const errorsList = document.querySelector(".errors-list");
  // Removing all child elements
  while (errorsList.firstChild) {
    errorsList.removeChild(errorsList.firstChild);
  }

  // Removing the error container
  errorsContainer.classList.remove("show");
}

// This will show all errors in the error list
function showErrors(errorMessages) {
  // Converting to an array so we can access forEach method
  const errorMsgs = Array.from(errorMessages);

  // Selecting error container element so we can display the error container
  const errorsContainer = document.querySelector(".errors");

  // Selecting the error list element so we can append the errors
  const errorList = document.querySelector(".errors-list");

  // Iterate through each error & create a list element
  errorMsgs.forEach((eachError) => {
    const tempElement = document.createElement("li");
    tempElement.innerText = eachError;
    // Add the element as a child to the errorList
    errorList.appendChild(tempElement);
  });

  // To display the error
  errorsContainer.classList.add("show");
}
