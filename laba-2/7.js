const clientName = prompt("Введите имя клиента: ")?.trim() || "";
const clientSpentForAllTime = Number(prompt("Сколько клиент потратил за все время?")?.trim() || "");
const clientSpentToday = Number(prompt("Сколько клиент потратил сегодня?")?.trim() || "");

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
    alert("Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.");
} else {
    let discount = 0;
    
    if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
        discount = 10;
    } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
        discount = 20;
    } else if (clientSpentForAllTime >= 500) {
        discount = 30;
    }
    
    alert(`Вам предоставляется скидка в ${discount}%!`);

    const newClientSpentForAllTime = clientSpentForAllTime + clientSpentToday;
    
    const discountAmount = clientSpentToday * (discount / 100);
    const amountToPay = clientSpentToday - discountAmount;
    
    alert(`Спасибо, ${clientName}! К оплате ${amountToPay}$. За все время в нашем ресторане вы потратили ${newClientSpentForAllTime}$.`);
}