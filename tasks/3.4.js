let n = Math.floor(Math.random() * 100) + 1;
let tries = 0;
let guess;

while (guess !== n) {
  guess = Number(prompt(`Попытка ${tries + 1}. Введите число:`));
  tries++;

  if (guess < n) {
    console.log("Больше!");
  } else if (guess > n) {
    console.log("Меньше!");
  } else {
    console.log(`Угадал! Число: ${n}, попыток: ${tries}`);
  }
}
