
let total = 0;
let input = '';

do {
    input = prompt('Введите число'); 
} while (input === !null) {
    // let input = prompt('Введите число'); 
    
    // if (input === null) {
    //     break
    // } 

    input = Number(input);

    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        total += input;
    }

}  

    alert(`Общая сумма чисел равна ${total}`);



