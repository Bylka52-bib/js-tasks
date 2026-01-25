const javascriptDescription =
  "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";
const middleIndex = Math.floor(javascriptDescription.length / 2);
let result = javascriptDescription.slice(1, middleIndex);

console.log("1. Обрезанная строка:");
console.log(result);

result = result.replaceAll("а", "А").replaceAll("a", "А");
console.log("2. Замена 'а' на 'А':");
console.log(result);

result = result.replaceAll(" ", "");
console.log("3. Удаление пробелов:");
console.log(result);

result = result.repeat(3);
console.log("4. Дублирование 3 раза:");
console.log(result);

const finalMiddleIndex = Math.floor(result.length / 2);
const middleChar = result[finalMiddleIndex];
console.log("5. Символ посередине финальной строки:");
console.log(`Индекс: ${finalMiddleIndex}, Символ: '${middleChar}'`);

console.log("6. Финальная строка:");
console.log(result);
