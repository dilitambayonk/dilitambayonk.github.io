document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    closeNav();

    var carousel = document.querySelectorAll('.carousel');
    M.Carousel.init(carousel, {
        fullWidth: true,
        indicators: true
    });
});

function closeNav() {
    document.querySelectorAll('.sidenav a, topnav a').forEach(function (elm) {
        elm.addEventListener('click', function (event) {
            const sidenav = document.querySelector('.sidenav');
            M.Sidenav.getInstance(sidenav).close();
        });
    });
}

function submitForm() {
    var form = document.getElementsByName('contact-form')[0];
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name !== '' || email !== '' || message !== '') {
        form.submit();
        form.reset();
        return true;
    } else {
        return false;
    }
}

// Typed
var options = {
    strings: ["Hello, I'am DILI^1000", "Front End Developer^1000", "UI/UX Designer^1000", "Tech Enthusiast^1000", "Keep Learn :)^1000"],
    typeSpeed: 40,
    startDelay: 90,
    loop: true
};

var typed = new Typed("#typed", options);

// animate AOS
AOS.init();