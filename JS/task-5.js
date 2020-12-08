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
            break;
    
        case 'чили':
            country = 'Чили';
            price = 250;
            break;
    
        case 'австралия':
            country = 'Австралия';
            price = 170;
            break;
    
        case 'индия':
            country = 'Индия';
            price = 80;
            break;
    
        case 'ямайка':
            country = 'Ямайка';
            price = 120;
            break;
    
        default:
            alert('В вашей стране доставка не доступна');
    }

    if (price) {
        console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    }
}





