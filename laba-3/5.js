function showSuccessMessage(message) {
    console.log(message);
}

function showErrorMessage(message) {
    console.error(message);
}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    let foundError = false;
    
    for (let i = 0; i < text.length; i++) {
        if (text[i] === errorSymbol) {
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}.`);
            foundError = true;
        }
    }
    
    if (!foundError) {
        successCallback("В данном тексте нет запрещенных символов");
    }
}

const text1 = 'Привет! Как дела! Давно мы с тобой не виделись.';
checkTextOnErrorSymbol(text1, 'а', showSuccessMessage, showErrorMessage);