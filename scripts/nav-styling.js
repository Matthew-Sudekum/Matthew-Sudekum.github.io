const toggleEl = document.getElementById("checkbox");
const bars = document.querySelectorAll(".bar");
const dropNav = document.querySelector("#drop-nav")
const dropLinks = document.querySelectorAll("#drop-nav a")
const mobileNav = document.querySelector("#mobile-nav");
const desktopNav = document.querySelector("#desktop-nav");

toggleEl.addEventListener("click", burgerOutInAnim);
for(const link of dropLinks) {
    link.addEventListener("click", burgerOutInAnim);
}

function burgerOutInAnim(){
    for(let bar of bars) {
        bar.classList.toggle("active");
    }
    dropNav.classList.toggle("active");
    for(let link of dropLinks) {
        link.classList.toggle("active");
    }
    document.getElementById("body-filter").classList.toggle("active");
}

window.addEventListener("resize", chooseNav);

function chooseNav(){
    if(screen.width <= 768){
        if(mobileNav.classList[0] == null){
            mobileNav.classList.add("active");
        }
        if(desktopNav.classList[0] == "active"){
            desktopNav.classList.remove("active");
        }
    }
    else if(screen.width > 768){
        if(desktopNav.classList[0] == null){
            desktopNav.classList.add("active");
        }
        if(mobileNav.classList[0] == "active"){
            mobileNav.classList.remove("active");
        }
    }
}
window.addEventListener("load", chooseNav);