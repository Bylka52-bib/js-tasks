const Name = prompt("Введите ваше имя: ");
const Age = prompt("Введите ваш возраст: ");

const convertedNumber = Number(Age);

if (isNaN(convertedNumber) || convertedNumber < 0) {
  console.log("Возраст введен не верно.");
} else if (convertedNumber < 18) {
  console.log(`Привет, ${Name}! Ты ещё школьник.`);
} else if (convertedNumber >= 18 && convertedNumber <= 65) {
  console.log(`Привет, ${Name}! Ты взрослый человек, заходи.`);
} else {
  console.log(`Привет, ${Name}! Для возрастных лиц у нас скидки.`);
}
