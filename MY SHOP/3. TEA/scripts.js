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

function sendOrder(productName, productCode, productPrice, productAvailability, userNameId, userNumberId, quantityId, addressId) {
    var userName = document.getElementById(userNameId).value;
    var userNumber = document.getElementById(userNumberId).value;
    var quantity = document.getElementById(quantityId).value;
    var address = document.getElementById(addressId).value;

    const message = `Order for Product:\nName: ${productName}\nCode: ${productCode}\nPrice: ${productPrice}\nAvailability: ${productAvailability}\n\nCustomer Info:\nName: ${userName}\nPhone Number: ${userNumber}\nQuantity: ${quantity}\nAddress: ${address}`;
    const whatsappLink = `https://wa.me/923295453167?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}
