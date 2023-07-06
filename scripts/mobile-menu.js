const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function () {
    const mobileElements = document.querySelectorAll('.menu');
    mobileElements.forEach(function (element) {
        element.style.opacity = checkbox.checked ? 1 : 0;
    });
});
