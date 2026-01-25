const userText = prompt("Введите текст")?.trim() || "";
const wordFromText = prompt("Введите слово из текста")?.trim() || "";

if (userText && wordFromText) {
    const indexOfWord = userText.indexOf(wordFromText);
    
    if (indexOfWord !== -1) {
        const result = userText.slice(0, indexOfWord + wordFromText.length);
        alert(`Результат: ${result}`);
    } else {
        alert("Слово не найдено в тексте!");
    }
} else {
    alert("Пожалуйста, введите текст и слово для поиска");
}