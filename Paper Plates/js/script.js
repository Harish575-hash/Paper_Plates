document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // You could add more here, like:
    // - Form validation
    // - Image sliders/carousels (using a library or custom code)
    // - "Back to top" button
    // - Animations on scroll (using libraries like AOS)
});