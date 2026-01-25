//1 задание

const myName = "Катя";
const programmingLanguage = "Js";
const courseCreatorName = "Никита Михайлович";
const reasonText = "Деньги";
const numberOfMonth = "3";

const result = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;

console.log(result);

//2 задание

let myInfoText = `Всем привет! Меня зовут ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен(а), что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll(
  programmingLanguage,
  programmingLanguage.toUpperCase()
);
console.log(myInfoText);

console.log("Длина строки:", myInfoText.length);

console.log("Первый символ:", myInfoText[0]);
console.log("Последний символ:", myInfoText[myInfoText.length - 1]);
