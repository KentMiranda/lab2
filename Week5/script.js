document.addEventListener("DOMContentLoaded", function () {
    // DOM is ready for manipulation

    // Get the "Learn more about me!" element by its class
    var learnMoreButton = document.querySelector('.profile-bottom');

    // Get the "About Me" section by its ID
    var aboutMeSection = document.getElementById('about-me');

    // Add a click event listener to the "Learn more about me!" element
    learnMoreButton.addEventListener("click", function () {
        // Scroll to the "About Me" section smoothly
        aboutMeSection.scrollIntoView({ behavior: "smooth" });
    });

    // Get the "Projects" section by its class
    var projectsSection = document.querySelector('.projects');

    // Add a click event listener to the "Projects" section header
    document.querySelector('h2.projects').addEventListener('click', function () {
        // Scroll to the "Projects" section smoothly
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Get the Follow button element by its ID
    var followBtn = document.getElementById("followBtn");

    // Add a click event listener to the Follow button
    followBtn.addEventListener("click", function () {
        // Change the background color of the profile-box
        document.querySelector('.profile-box').style.backgroundColor = getRandomColor();
    });

    // Get all project cards
    var projectCards = document.querySelectorAll('.project-card');

    // Add click event listeners to toggle project card visibility
    projectCards.forEach(function (card) {
        card.addEventListener('click', function () {
            // Toggle the class to show/hide project details
            card.classList.toggle('expanded');
        });
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Get the Menu icon element by its class
    var menuIcon = document.querySelector(".menu-icon");

    // Get the Social Media icons container by its class
    var socialMediaIcons = document.querySelector(".social-media");

    // Add a click event listener to the Menu icon
    menuIcon.addEventListener("click", function () {
        // Toggle the visibility of the social media icons
        socialMediaIcons.classList.toggle("visible");
    });

    // Rest of your existing code...
});

