let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
const cartItemsList = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product');
        const productName = button.getAttribute('data-name');
        const productPrice = parseInt(button.getAttribute('data-price'));

       
        const product = { id: productId, name: productName, price: productPrice };
        cart.push(product);

      
        updateCart();
    });
});

function updateCart() {
    
    cartCount.textContent = cart.length;

    
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price} грн`;
        cartItemsList.appendChild(li);
    });

    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPrice.textContent = total;
}
