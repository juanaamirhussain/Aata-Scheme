document.querySelectorAll('.zoom-image').forEach(image => {
    image.addEventListener('mousemove', e => {
        const rect = image.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        image.style.transformOrigin = `${x}% ${y}%`;
        image.style.transform = "scale(2)";
    });

    image.addEventListener('mouseleave', () => {
        image.style.transform = "scale(1)";
    });
});

function sendOrder(button) {
    const productBox = button.closest('.product-box');
    const productName = productBox.getAttribute('data-name');
    const productCode = productBox.getAttribute('data-code');
    const productPrice = productBox.getAttribute('data-price');
    const productAvailability = productBox.getAttribute('data-availability');

    const userName = productBox.querySelector('#userName').value;
    const userNumber = productBox.querySelector('#userNumber').value;
    const quantity = productBox.querySelector('#quantity').value;
    const address = productBox.querySelector('#address').value;

    const message = `Order for Product:\nName: ${productName}\nCode: ${productCode}\nPrice: ${productPrice}\nAvailability: ${productAvailability}\n\nCustomer Info:\nName: ${userName}\nPhone Number: ${userNumber}\nQuantity: ${quantity}\nAddress: ${address}`;
    const whatsappLink = `https://wa.me/923295453167?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}
