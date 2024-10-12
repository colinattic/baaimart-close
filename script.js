let cart = [];
let total = 0;

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('cart-count').textContent = cart.length;
}

// Adding event listeners to the "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));

        cart.push({ name, price });
        total += price;

        updateCart();
    });
});

// Checkout functionality
document.getElementById('checkout').addEventListener('click', function() {
    alert(`Thank you for your order of $${total.toFixed(2)}!`);
    cart = [];
    total = 0;
    updateCart();
});

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const title = item.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
