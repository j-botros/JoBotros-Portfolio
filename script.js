// Wait until the HTML content is fully loaded before running JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // Select all navigation links that have the class "nav-link"
    const navLinks = document.querySelectorAll('.nav-link');

    // Select all content sections that have the class "content-section"
    const sections = document.querySelectorAll('.content-section');

    // For each navigation link, add a click event listener
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {

            // Prevent the default behavior of the link (page refresh or scrolling)
            e.preventDefault();

            // Remove the "active" class from all navigation links
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            // Add the "active" class to the navigation link that was just clicked
            this.classList.add('active');

            // Hide all content sections by adding the "d-none" class (Bootstrap class to set display:none)
            sections.forEach(function(section) {
                section.classList.add('d-none');
            });

            // Retrieve the target section's id from the clicked link's "data-target" attribute
            const target = document.getElementById(this.dataset.target);

            // Show the targeted content section by removing "d-none" class
            target.classList.remove('d-none');
        });
    });
});