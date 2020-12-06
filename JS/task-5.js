const value = prompt('Введите страну, в которую желаете осуществить доставку');
let country = '';
let price = 0;
let message = '';

if (value === null) {
    alert('Доставка отменена.');

} else {
    switch (value.toLowerCase()) {
    case 'китай':
        country = 'Китай';
        price = 100;
        message =`Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    
    case 'чили':
        country = 'Чили';
        price = 250;
        message =`Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    
    case 'австралия':
        country = 'Австралия';
        price = 170;
        message =`Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    
    case 'индия':
        country = 'Индия';
        price = 80;
        message =`Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    
    case 'ямайка':
        country = 'Ямайка';
        price = 120;
        message =`Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    
    default:
        alert('В вашей стране доставка не доступна');    
}

console.log(message);
}





