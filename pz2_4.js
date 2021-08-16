// 4. Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15

let n = parseInt(prompt('Введите значение в промежутке [0..15]'));

let a = ''
switch (n) {
    case 1: a += `${n++} `;
    case 2: a += `${n++} `;
    case 3: a += `${n++} `;
    case 4: a += `${n++} `;
    case 5: a += `${n++} `;
    case 6: a += `${n++} `;
    case 7: a += `${n++} `;
    case 8: a += `${n++} `;
    case 9: a += `${n++} `;
    case 10: a += `${n++} `;
    case 11: a += `${n++} `;
    case 12: a += `${n++} `;
    case 13: a += `${n++} `;
    case 14: a += `${n++} `;
    case 15:
        a += `${n++} `; alert(a); break;
    default: alert('Вы ввели не корректное значение');
}5
// C: \Program Files\nodejs\