document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav__menu a');
    const sections = document.querySelectorAll("section");
    const navbarHeight = document.querySelector('nav').offsetHeight; // Get the navbar height

    // Function for smooth scrolling and setting active link
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section

            // Smooth scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Update active class for navigation
            navLinks.forEach(navLink => navLink.classList.remove('active')); // Remove active class from all links
            this.classList.add('active'); // Add active class to the clicked link
        });
    });

    // Function to set active link based on scroll position
    function setActiveLink() {
        window.addEventListener("scroll", () => {
            let current = "";

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                // Check if the current scroll position is within the section, accounting for navbar height
                if (pageYOffset >= sectionTop - sectionHeight / 3 - navbarHeight) {
                    current = section.getAttribute("id");
                }
            });

            // Remove the active class from all links and add to the current one
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });

            // Optionally, you can manage project headings here
        });
    }

    // Call the function to set the active link
    setActiveLink();
});
