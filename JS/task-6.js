let total = 0;
let input = '';

do {
    input = prompt('Введите число');
    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        total += Number(input);
    }
} while (input !== null) {
    alert(`Общая сумма чисел равна ${total}`);
}