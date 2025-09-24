document.addEventListener("DOMContentLoaded", () => {
    console.log("file.js is connected!");

    const cartButtons = document.querySelectorAll(".product-card button");
    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("🛒 Item added to cart!");
        });
    });

    const contactForm = document.querySelector("footer form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Your message has been sent!");
            contactForm.reset();
        });
    }
});
