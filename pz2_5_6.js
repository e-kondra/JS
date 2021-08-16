// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function addition(a, b) {
    return a + b;
}
function substraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function devision(a, b) {
    return a / b
}
//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов,
// operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return addition(arg1, arg2);
        case '-': return substraction(arg1, arg2);
        case '*': return multiplication(arg1, arg2);
        case '/': return devision(arg1, arg2);
    }
}

alert(mathOperation(2, 18, '*'))