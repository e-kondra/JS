// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 2;
let arr = [];

while (i < 101) {
    arr.push(i);
    for (const value of arr) {
        if (i % value === 0 && i !== value) {
            arr.pop();
            break;
        }
    };
}
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

