const password = prompt("Введите пароль")?.trim() || "";

let isValid = true;
let errorMessages = [];

if (password.length < 3 || password.length > 20) {
    isValid = false;
    errorMessages.push("Пароль должен быть от 3 до 20 символов");
}

if (!/[A-ZА-Я]/.test(password)) {
    isValid = false;
    errorMessages.push("Пароль должен содержать минимум 1 прописную букву");
}

if (!/\d/.test(password)) {
    isValid = false;
    errorMessages.push("Пароль должен содержать минимум 1 цифру");
}

if (isValid) {
    alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
    alert(`Пароль не удовлетворяет условиям!\n${errorMessages.join("\n")}\nПерезагрузите страницу и попробуйте ввести его еще раз.`);
}