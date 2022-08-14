const errorMessage = document.querySelector(".error");

const nameInput = document.querySelector("#name");
nameInput.addEventListener('input', checkUserNameInput)

function checkUserNameInput() {
    const validityState = nameInput.validity;
    if (validityState.valid === false) {
        if (validityState.tooShort) {
            errorMessage.textContent = "Your Username should be at least 5 characters long!";
        }
        if (validityState.patternMismatch) {
            errorMessage.textContent = "User name can have english letters only, no punctuation and spaces!";
        }
        if (validityState.valueMissing) {
            errorMessage.textContent = "Please input a Username!";
        }
    } else {
        checkInputs()
    }
}

const emailInput = document.querySelector("#email");
emailInput.addEventListener('input', checkEmailInput)

function checkEmailInput() {
    const validityState = emailInput.validity;
    if (validityState.valid === false) {
        if (validityState.typeMismatch) {
            errorMessage.textContent = "Please enter a valid email";
        }
        if (validityState.valueMissing) {
            errorMessage.textContent = "Please input an email!";
        }
    } else {
        checkInputs()
    }
}

function checkInputs() {
    const inputs = document.querySelectorAll('input');
    // inputs.forEach(checkInput)
    for (let i = 0; i < inputs.length; i++) {
        let result = checkInput(inputs[i]);
        if (result) break;
        else errorMessage.textContent = "We are good!";
    }

    function checkInput(input) {
        const validityState = input.validity;
        if (validityState.valid === false) {
            const attrbuteName = input.getAttribute('data-name');
            switch(attrbuteName) {
                case "Password":
                    errorMessage.textContent = "Last step, a strong password!";
                    return true;
                    case "Email":
                    errorMessage.textContent = "Username looks good, now it's time for your email!";
                    return true;
                case "Username":
                    errorMessage.textContent = "Let's come up with a Username!";
                    return true;
            }  
        }
    }
}

const passwordInput = document.querySelector("#pass");
passwordInput.addEventListener('input', checkPasswordInput)

// function checkPasswordInput() {
//     const validityState = passwordInput.validity;
//     console.log(validityState);
//     if (validityState.valid === false) {
//         if (validityState.tooShort) {
//             errorMessage.textContent = "Your password should be at least 5 characters long!";
//         }
//         if (validityState.patternMismatch) {
//             errorMessage.textContent = "Your password must contain a capitial letterm number and a special character.";
//         }
//         if (validityState.valueMissing) {
//             errorMessage.textContent = "Please input a Passowrd!";
//         }
//     } else {
//         checkInputs()
//     }
// }

function checkPasswordInput() {
    passwordInput.validity.valid = false;
    console.log(passwordInput.validity);
}

checkInputs()