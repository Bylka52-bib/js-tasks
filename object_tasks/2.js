const ordersArr = [4, 2, 1, 3];
const people = [
    {id: 1, name: 'Максим'},
    {id: 2, name: 'Николай'},
    {id: 3, name: 'Ангелина'},
    {id: 4, name: 'Виталий'}
];

const giveTalonsInOrder = (patients, orders) => {
    const result = [];
    for (let i = 0; i < orders.length; i++) {
        result.push(patients.find(patient => patient.id === orders[i]));
    }
    return result;
}

const result = giveTalonsInOrder(people, ordersArr);
console.log('result', result);