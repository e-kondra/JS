// 7. *Сравнить null и 0. Попробуйте объяснить результат.

let a = null;
let b = 0, c = NaN, d;

if (a > b)
    alert('null > 0');
if (a < b) alert('null < 0');
if (a == b) alert('null == 0');
if (a === b) alert('null === 0');
if (a !== b) alert('null !== 0');   // !!!
if (a != b) alert('null != 0');     // !!!


if (b > c) alert('0 > NaN');
if (b < c) alert('0 < NaN');
if (b == c) alert('0 == NaN');
if (b === c) alert('0 === NaN');
if (b != c) alert('0 != NaN');      // !!!
if (b !== c) alert('0 !== NaN');    // !!!


if (a > c) alert('null > NaN');
if (a < c) alert('null > NaN');
if (a == c) alert('null == NaN');
if (a === c) alert('null === NaN');
if (a != c) alert('null != NaN');   // !!!
if (a !== c) alert('null !== NaN'); // !!!

if (c > d) alert('NaN > indefined');
if (c < d) alert('NaN < indefined');
if (c == d) alert('NaN == indefined');
if (c === d) alert('NaN === indefined');
if (c != d) alert('NaN != indefined');       // !!!
if (c !== d) alert('NaN !== indefined');     // !!!

if (a > d) alert('Null > undefined');
if (a < d) alert('Null < undefined');
if (a == d) alert('Null == undefined');     // !!! -- не строгое сравнение
if (a === d) alert('Null === undefined');
if (a != d) alert('Null != undefined');
if (a !== d) alert('Null !== undefined');     // !!! Null - определенное отсутствие объекта, а undefined - неопределенность

alert('NaN == NaN' + NaN == NaN) // даже сравнение с NaN возвращает false

//null, 0, Nan, undefined - абсолютно разные сущности, поэтому и сравнение их дало такие результаты

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow === 1)
        return val;
    else
        return power(val, pow - 1) * val;
}

alert(power(2, 5));