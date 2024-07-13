document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const scrollLinks = document.querySelectorAll('.sidebar nav ul li a');

    scrollLinks.forEach(scrollLink => {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = scrollLink.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
        });
    });

    function scrollToSection(section) {
        window.scrollTo({
            top: section.offsetTop - 50,
            behavior: 'smooth'
        });
    }

    // Form submission handling
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const formDataSerialized = Object.fromEntries(formData.entries());
        console.log('Form Data:', formDataSerialized);
        alert('Thank you for your message!');
        form.reset();
    });
});
