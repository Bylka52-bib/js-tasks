const userInput = prompt('Введите строку: ');
const convertNumber = Number(userInput);

if (isNaN(convertNumber)) {
    console.log('Введено не число.');
} else {
    if (convertNumber % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}