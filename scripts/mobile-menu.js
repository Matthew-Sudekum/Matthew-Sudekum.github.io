const html = document.querySelector('html');
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function () {
    const mobileElements = document.querySelectorAll('.menu');
    mobileElements.forEach(function (element) {
        if(element.id=='menu-underlay')
            element.style.display = checkbox.checked ? 'block' : 'none';
        element.style.opacity = checkbox.checked ? 1 : 0;
    });
    html.classList.toggle('disable-scroll');
});
