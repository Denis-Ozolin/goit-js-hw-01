
let total = 0;

while (true) {
    let input = prompt('Введите число');
    
    if (input !== null) {
        input = Number(input);
        total += input;

    }  else {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }

}
   


// alert('Было введено не число, попробуйте еще раз');


// while (true) {
//     let input = prompt('Введите число');

//     if (input !== null) {
//         total += Number(input);
//     } else {
//         alert(`Общая сумма чисел равна ${total}`);
//         break;
//     }
// }
   
