// script.js

function toggleMenu() {
    const menuItems = document.getElementById('menu-items');
    if (menuItems.style.maxHeight === '0px') {
        menuItems.style.maxHeight = '200px';
    } else {
        menuItems.style.maxHeight = '0px';
    }
}

function calculateTotalPrice() {
    const cartTable = document.getElementById('cart-table');
    const cartItems = cartTable.querySelectorAll('tbody tr');
    let totalPrice = 0;
    cartItems.forEach((item) => {
        const price = parseFloat(item.cells[2].textContent);
        const quantity = parseInt(item.cells[1].querySelector('input').value);
        totalPrice += price * quantity;
    });
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Call the calculateTotalPrice function when the page loads
document.addEventListener('DOMContentLoaded', calculateTotalPrice);

// Call the calculateTotalPrice function when the quantity input changes
document.querySelectorAll('input[type="number"]').forEach((input) => {
    input.addEventListener('input', calculateTotalPrice);
});