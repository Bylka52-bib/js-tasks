let userName = prompt("Как вас зовут?");
userName = userName.trim().toLowerCase();
let userAge = prompt("Сколько вам лет?");
userAge = Number(userAge.trim());

if (isNaN(userAge)) {
  userAge = "не указано";
}

alert(`Вас зовут ${userName} и вам ${userAge} лет`);
