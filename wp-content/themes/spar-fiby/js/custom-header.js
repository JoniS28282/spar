// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector('.mobile-menu-toggle');
//     const header = document.querySelector('.spar-header');
//
//     menuToggle.addEventListener('click', function () {
//         header.classList.toggle('mobile-menu-active');
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.sections');
    const navLinks = document.querySelectorAll('.elementor-nav-menu .menu-item a');

    // Function to calculate and compare visible area
    function getVisibleSection() {
        let maxVisibleHeight = 0;
        let mostVisibleSectionId = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Calculate the visible height of the section
            const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));

            // Keep track of the section with the most visible height
            if (visibleHeight > maxVisibleHeight) {
                maxVisibleHeight = visibleHeight;
                mostVisibleSectionId = section.getAttribute('id');
            }
        });

        // Update navigation links based on the most visible section
        navLinks.forEach(link => {
            link.classList.remove('navbar-active');
            if (mostVisibleSectionId && link.getAttribute('href') === `#${mostVisibleSectionId}`) {
                link.classList.add('navbar-active'); // Add active class to the link of the most visible section
            }
        });
    }

    // Run the function on page load and when scrolling
    window.addEventListener('scroll', getVisibleSection);
    window.addEventListener('resize', getVisibleSection); // Optional, to handle window resizing
    getVisibleSection();
});





