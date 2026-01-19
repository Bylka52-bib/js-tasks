const A = Number(prompt('Введите 1 число: '));
const B = Number(prompt('Введите 2 число: '));
const C = Number(prompt('Введите 3 число: '));

let max;

if (A > B) {
    if (A > C) {
        max = A;
    } else {
        max = C;
    }
} else {
    if (B > C) {
        max = B;
    } else {
        max = C;
    }
}

console.log(`Наибольшее число: ${max}`);