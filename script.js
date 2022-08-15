const displayedError = document.querySelector('.error');

const submitButton = document.querySelector('button');
submitButton.addEventListener('click', validateForm);
function validateForm(event) {
    const allInputs = document.querySelectorAll('.valid');
    if (allInputs.length !== 4) {
        event.preventDefault();
        alert("Please fill out all fields!");
    }
}

const form = document.querySelector('form');
form.addEventListener('input', checkInputs);

function checkInputs() {
    const allInputs = document.querySelectorAll('.valid');
    if (allInputs.length === 4) {
        submitButton.style.opacity = 1;
    }
}


const usernameInput = document.querySelector("#username");
usernameInput.addEventListener('input', validateUsername);
function validateUsername() {
    tooShortMessage = "Username should be at least 6 characters long.<br>";
    notOnlyLettersMessage = "Username should contain letters only.<br>"

    const isLong = usernameInput.value.length > 5 ? true : false;
    if (!isLong && !displayedError.innerHTML.includes(tooShortMessage)) displayedError.innerHTML += tooShortMessage;
    if (isLong) {
        displayedError.innerHTML = displayedError.innerHTML.replace(tooShortMessage, "");
    }

    const isLettersOnly = /^[a-zA-Z]+$/.test(usernameInput.value);
    if (!isLettersOnly && !displayedError.innerHTML.includes(notOnlyLettersMessage)) displayedError.innerHTML += notOnlyLettersMessage;
    if (isLettersOnly) {
        displayedError.innerHTML = displayedError.innerHTML.replace(notOnlyLettersMessage, "");
    }

    if (isLong && isLettersOnly) {
        usernameInput.classList.remove('invalid');
        usernameInput.classList.add('valid');
    } else {
        usernameInput.classList.remove('valid');
        usernameInput.classList.add('invalid');
    }
}

const emailInput = document.querySelector('#email');
emailInput.addEventListener('input', validateEmail);
function validateEmail() {
    const invalidEmailMessage = "Please provide a valid email.<br>";
    const emailValidationRegExp =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailIsValid = emailValidationRegExp.test(emailInput.value);

    if(emailIsValid) {
        displayedError.innerHTML = displayedError.innerHTML.replace(invalidEmailMessage, "");
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
    } else if (!emailIsValid && !displayedError.innerHTML.includes(invalidEmailMessage)) {
        displayedError.innerHTML += invalidEmailMessage;
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
    }
}

const passwordInput = document.querySelector('#pwd');
passwordInput.addEventListener('paste',event => event.preventDefault());
passwordInput.addEventListener('input', validatePassword);
function validatePassword() {
    const isLong = passwordInput.value.length > 7;
    const isNotLongMessage = "Password should be at least 8 characters long.<br>";

    const hasCapitalLetter = !!passwordInput.value.match(/[A-Z]/g);
    const hasNoCapitalLetterMessage = "Add a capital letter.<br>";

    const hasNumber = !!passwordInput.value.match(/[0-9]/g);
    const hasNoNumberMessage = "Add at least one number.<br>";
    
    const hasSpecialCharactrer = !!passwordInput.value.match(/[!@#$%^&*()_+]/g);
    const hasNoSpecialCharMessage = "Add at least one special character.<br>";

    const isValid = isLong && hasCapitalLetter && hasNumber && hasSpecialCharactrer;

    if (!hasCapitalLetter && !displayedError.innerHTML.includes(hasNoCapitalLetterMessage)) {
        displayedError.innerHTML += hasNoCapitalLetterMessage;
    }
    if (hasCapitalLetter) displayedError.innerHTML = displayedError.innerHTML.replace(hasNoCapitalLetterMessage, "");

    if (!hasNumber && !displayedError.innerHTML.includes(hasNoNumberMessage)) {
        displayedError.innerHTML += hasNoNumberMessage;
    }
    if (hasNumber) displayedError.innerHTML = displayedError.innerHTML.replace(hasNoNumberMessage, "");

    if (!hasSpecialCharactrer && !displayedError.innerHTML.includes(hasNoSpecialCharMessage)) {
        displayedError.innerHTML += hasNoSpecialCharMessage;
    }
    if (hasSpecialCharactrer) displayedError.innerHTML = displayedError.innerHTML.replace(hasNoSpecialCharMessage, "");
    
    if (!isLong && !displayedError.innerHTML.includes(isNotLongMessage)) {
        displayedError.innerHTML += isNotLongMessage;
    }
    if (isLong) displayedError.innerHTML = displayedError.innerHTML.replace(isNotLongMessage, "");

    if (isValid) {
        passwordInput.classList.remove('invalid');
        passwordInput.classList.add('valid');
    } else {
        passwordInput.classList.remove('valid');
        passwordInput.classList.add('invalid');
    }
}

const confirmPasswordInput = document.querySelector('#check-pwd');
confirmPasswordInput.addEventListener('input', validateConfirmPassword);
confirmPasswordInput.addEventListener('paste',event => event.preventDefault());
function validateConfirmPassword() {
    const passwordsMatch = passwordInput.value === confirmPasswordInput.value
    const passwordsDnotMatchMessage = "Passwords should match!<br>"
    if (!passwordsMatch && !displayedError.innerHTML.includes(passwordsDnotMatchMessage)) {
        displayedError.innerHTML += passwordsDnotMatchMessage;
        confirmPasswordInput.classList.remove('valid');
        confirmPasswordInput.classList.add('invalid');
    }
    if (passwordsMatch) {
        displayedError.innerHTML = displayedError.innerHTML.replace(passwordsDnotMatchMessage, "");
        confirmPasswordInput.classList.remove('invalid');
        confirmPasswordInput.classList.add('valid');
    }
}