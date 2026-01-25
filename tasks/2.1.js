const Num = Number(prompt('Введите число: '))

if (Num > 0) {
    console.log('Число положительное');
} else if (Num < 0) {
    console.log('Число отрицательное');
} else {
    console.log('Число равно нулю')
}