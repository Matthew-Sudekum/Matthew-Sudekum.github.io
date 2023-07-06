const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('change', function () {
    toggle_menu();
});
const nav_links = document.querySelectorAll('nav a');
nav_links.forEach(function(element){
    element.addEventListener('click', function(){
    if(checkbox.checked){
        checkbox.checked=!checkbox.checked;
        toggle_menu();
    }
});
});
function toggle_menu(){
    const menuElements = document.querySelectorAll('.menu');
    menuElements.forEach(function (element) {
        if(element.id=='menu-underlay'){
            element.style.display = checkbox.checked ? 'block' : 'none';
        }
        element.style.opacity = checkbox.checked ? 1 : 0;
    });
}