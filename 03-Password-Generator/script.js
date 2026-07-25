let password = document.getElementById("password");

let length = document.getElementById("length");

let numbers = document.getElementById("numbers");

let symbols = document.getElementById("symbols");

function generatePassword() {
    if (length.value < 4 || length.value > 20) {

        alert("Password length must be between 4 and 20");

        return;

    }

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numbers.checked) {

        characters += "0123456789";

    }

    if (symbols.checked) {

        characters += "!@#$%^&*()_+";

    }

    let newPassword = "";

    for (let i = 0; i < length.value; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        newPassword += characters[randomIndex];

    }

    password.value = newPassword;

}

function copyPassword() {

    navigator.clipboard.writeText(password.value);

    alert("Password Copied!");

}