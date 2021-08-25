// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

'use strict';

const basket = {
    goods: [
        {
            goodName: 'компрессор Wabko',
            quantity: 2,
            price: 320,
        },
        {
            goodName: 'компрессор AMK',
            quantity: 1,
            price: 331.20,
        },
        {
            goodName: 'пневмоподушка BMW',
            quantity: 6,
            price: 150,
        },
        {
            goodName: 'ремкомплект',
            quantity: 2,
            price: 85,
        },
    ],
    countBasketPrice() {
        return this.goods.reduce((accumulator, currentGood) => accumulator += currentGood.price * currentGood.quantity, 0);
    },
};

console.log(basket.countBasketPrice());