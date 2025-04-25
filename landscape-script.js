document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav a');
    var toggle = document.getElementById('toggle');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Uncheck the checkbox to close the menu
            toggle.checked = false;
        });
    });
});