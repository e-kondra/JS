const prodItem = {
    render(good) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price} Euro.</div>
                    <button id="buy" class="btn" data-index=${good.index}>Купить</button>
                </div>`;
    },
};
const basketItem = {
    render(good) {
        return `<div class="basketStyle">
                    <div><b>Наименование</b>: ${good.product_name}</div>
                    <div><b>Цена за шт.</b>: ${good.price} Euro.</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${(good.quantity * good.price).toFixed(2)} Euro.</div>
                </div>`;
    },
};

const products = {
    productsElement: null,
    prodItem,
    basket: null,
    goods:
        [
            {
                index: 1,
                product_name: 'компрессор Wabko',
                quantity: 2,
                price: 320,
            },
            {
                index: 2,
                product_name: 'компрессор AMK',
                quantity: 1,
                price: 331.20,
            },
            {
                index: 3,
                product_name: 'пневмоподушка BMW',
                quantity: 6,
                price: 150.33,
            },
            {
                index: 4,
                product_name: 'ремкомплект',
                quantity: 2,
                price: 85,
            },
        ],
    init() {
        this.productsElement = document.querySelector('.products');
        this.render();
        this.basket = basket;
        const btns = document.getElementsByTagName('button');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', event => this.putProductInBacket(event));
        }
    },
    render() {
        this.productsElement.insertAdjacentHTML('afterbegin', '<h2>Каталог.</h2>')
        this.goods.forEach(good => {
            this.productsElement.insertAdjacentHTML('beforeend', this.prodItem.render(good));
        });
    },

    putProductInBacket(event) {
        const currentButton = event.target;
        let id_product = +currentButton.dataset.index;
        const prodObj = this.goods.find((currentValue) => currentValue.index === id_product);
        this.basket.addProductInCart(prodObj);
    },
};

const basket = {
    basketElement: null,
    basketItem,
    goods: [],
    btnClear: null,
    init() {
        this.basketElement = document.querySelector('.basket');
        this.basketElement.insertAdjacentHTML('afterbegin', '<h2>Корзина.</h2>');
        this.basketItem = basketItem;
        this.btnClear = document.querySelector('.clear');
        this.render();
        this.btnClickListener();
    },

    btnClickListener() {
        this.btnClear.addEventListener('click', () => this.clearBasket());
    },

    clearBasket() {
        this.goods = [];
        this.render();
    },

    getProductFromBasket(product) {
        return this.goods.find((good) => good.index === product.index)
    },

    render() {
        this.basketElement.innerHTML = '';
        this.basketElement.insertAdjacentHTML('afterbegin', '<h2>Корзина.</h2>');
        if (this.goods.length > 0) {
            this.goods.forEach(good => {
                this.basketElement.insertAdjacentHTML('beforeend', this.basketItem.render(good))
            })
            this.basketElement.insertAdjacentHTML('beforeend',
                `<div><b>В корзине ${this.countBasketGoods()} товаров на сумму ${this.countBasketPrice()} Euro.</b></div>`);
        } else {
            this.basketElement.insertAdjacentHTML('beforeend', '<div>Корзина пуста</div>');
        };
    },

    addProductInCart(product) {
        //проверим есть ли такой продукт в goods, если есть вернем его
        const goodInBasket = this.getProductFromBasket(product);
        //добавим объект в массив или увеличим количество 
        if (goodInBasket) {
            goodInBasket.quantity++;
        } else {
            this.goods.push({ ...product, quantity: 1 });
        }
        this.render();
    },

    countBasketGoods() {
        return this.goods.reduce((accumulator, currentGood) => accumulator += currentGood.quantity, 0);
    },

    countBasketPrice() {
        return this.goods.reduce((accumulator, currentGood) => accumulator += currentGood.price * currentGood.quantity, 0).toFixed(2);
    },
};

products.init();
basket.init();
