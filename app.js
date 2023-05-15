//variables
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart'); //cart container
const cartOverlay = document.querySelector('.cart-overlay'); //cart overlay
const cartItems = document.querySelector('.cart-items'); //cart items
const cartTotal = document.querySelector('.cart-total'); //cart total
const cartContent = document.querySelector('.cart-content'); //cart content
const productsDOM = document.querySelector('.products-center'); //products container 

//cart
let cart = [];

//getting the products
class Products {
    async getProducts() {
        try {
            let result = await fetch('products.json');
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const {title, price} = item.fields;
                const {id} = item.sys;
                const image = item.fields.image.fields.file.url;
                return {title, price, id, image};
            });
            return products;
        } catch(error) {
            console.log(error);
        }
    } 
}

//display products
class UI {

}

//local storage
class Storage {
    
}  

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();

    //get all products
    products.getProducts().then(data => data.console.log(data));
});
