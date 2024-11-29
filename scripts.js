// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});
// Burger Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const navbar = document.querySelector(".navbar");

    burgerMenu.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
});
function calculateCost() {
    const packageCost = parseFloat(document.getElementById("package").value);
    const guests = parseInt(document.getElementById("guests").value, 10);
    const addons = document.querySelectorAll("input[name='addon']:checked");

    let totalCost = packageCost + (guests * 20); // Assume $20 per guest for additional costs

    addons.forEach(addon => {
        totalCost += parseFloat(addon.value);
    });

    document.getElementById("total-cost").textContent = totalCost.toFixed(2);
}
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Show the thank-you pop-up
    document.getElementById('thankYouPopup').style.display = 'block';

    // Clear the form fields
    this.reset();
});

// Function to close the pop-up
function closePopup() {
    document.getElementById('thankYouPopup').style.display = 'none';
}
setTimeout(() => {
    document.getElementById('thankYouPopup').style.display = 'none';
}, 3000); // Closes after 3 seconds
