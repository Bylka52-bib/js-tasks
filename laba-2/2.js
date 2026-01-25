const correctAnswer1 = 4;
const correctAnswer2 = 4;
const correctAnswer3 = 2;
const correctAnswer4 = 12;
const correctAnswer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

const answer1 = parseInt(prompt("Сколько будет 2 + 2?")?.trim() || "0");
if (answer1 === correctAnswer1) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

const answer2 = parseInt(prompt("Сколько будет 2 * 2?")?.trim() || "0");
if (answer2 === correctAnswer2) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

const answer3 = parseInt(prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?")?.trim() || "0");
if (answer3 === correctAnswer3) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

const answer4 = parseInt(prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?")?.trim() || "0");
if (answer4 === correctAnswer4) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

const answer5 = parseInt(prompt("Сколько будет 2 + 2 * 2?")?.trim() || "0");
if (answer5 === correctAnswer5) {
    alert("Ответ верный");
    correctAnswers++;
} else {
    alert("Ответ неверный");
    incorrectAnswers++;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);