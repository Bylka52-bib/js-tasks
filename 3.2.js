const Num = Number(prompt('Введите число: '));

let sum = 0;

for (let i = 1; i <= Num; i++) {
    if (i % 2 === 0) {
        sum += i;
    } 
}

console.log(sum);