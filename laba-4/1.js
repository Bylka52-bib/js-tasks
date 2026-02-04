const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

function giveParcel() {
    const person = peopleWaiting.shift();
    alert(`${person} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.`);
}
function leaveQueueWithoutParcel() {
    const person = peopleWaiting.pop();
    alert(`${person} не получил(а) посылку и ушел(ла) из очереди`);
}

giveParcel();
giveParcel();
giveParcel();

while (peopleWaiting.length > 0) {
    leaveQueueWithoutParcel();
}