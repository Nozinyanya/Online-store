document.getElementById('payment-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiration = document.getElementById('expiration').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    // Validate card number (16 digits)
    const cardNumberPattern = /^\d{16}$/;
    if (!cardNumberPattern.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number.');
        return;
    }

    // Validate expiration date (MM/YY)
    const expirationPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expirationPattern.test(expiration)) {
        alert('Please enter a valid expiration date in MM/YY format.');
        return;
    }

    // Validate CVV (3 digits)
    const cvvPattern = /^\d{3}$/;
    if (!cvvPattern.test(cvv)) {
        alert('Please enter a valid 3-digit CVV.');
        return;
    }

    alert('Payment details are valid. Proceeding to checkout.');
});

// Function to add items to cart
function addToCart(productName, price) {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    let li = document.createElement('li');
    li.textContent = `${productName} - R${price.toFixed(2)}`;
    cartItems.appendChild(li);

    let currentTotal = parseFloat(totalPrice.textContent.replace('Total: R', '')) || 0;
    totalPrice.textContent = `Total: R${(currentTotal + price).toFixed(2)}`;
}
