const student = {
    name: 'Maxim',
    programingLanguage: 'JavaScript',
}

const handleObjects = (obj, key, action) => {
    if (action === 'get') {
        return obj[key];
    } 
    else if (action === 'add') {
        obj[key] = '';
        return obj;
    } 
    else if (action === 'delete') {
        delete obj[key];
        return obj;
    } 
    else {
        return obj;
    }
}

const result1 = handleObjects (student, 'programingLanguage', 'delete');

console.log('result1', result1);