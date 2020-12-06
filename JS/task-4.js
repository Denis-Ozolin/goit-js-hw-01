let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;
let message = '';

const value = prompt('Сколько дроидов вы желаете приобрести?');

totalPrice = value * pricePerDroid;

if (value === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {   
    message = 'Недостаточно средств на счету!';
} else {
    alert(`Вы купили ${value} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
};

console.log(message);