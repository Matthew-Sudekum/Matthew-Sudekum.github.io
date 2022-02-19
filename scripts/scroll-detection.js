let currentSection = 0;
let lastScrollPos = window.scrollY;
let nav = document.getElementById("mobile-nav-bar");
let navBottom = document.getElementById("mobile-nav-bar").getBoundingClientRect().bottom;
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("#in-page-link");

function chooseNavAssigns(){
    if(screen.width <= 768){
        nav = document.getElementById("mobile-nav-bar");
    }
    else if(screen.width > 768){
        nav = document.getElementById("desktop-nav");
    }
    navBottom = nav.getBoundingClientRect().bottom;
}
window.addEventListener("load", chooseNavAssigns)

for(const link of links) {
    link.addEventListener("click", clickEventHandler);
}

function getQuarterY(elem, multFactor) {
    return elem.getBoundingClientRect().top + ((elem.clientHeight / 4) * multFactor);
}

//adds or removes the activeNav class from each nav element
function classCheckRemoveAdd(i) {
    for(const link of links) {
        if(link.classList[0] != null){
            link.classList.remove("activeNav");
        }
    }
    links[i].classList.add("activeNav");
    if(links[i + 4] != null){
        links[i + 4].classList.add("activeNav");
    }
}

window.addEventListener("scroll", ()=> {
    if(lastScrollPos < this.window.scrollY) {
        for(let i = 0; i < sections.length; i++) {
            if(i == 0){
                if(getQuarterY(sections[0], 3) > navBottom) {
                    classCheckRemoveAdd(i);
                    currentSection = i;
                }
            }
            if(i != 0 && i != sections.length - 1) {
                if(getQuarterY(sections[i - 1], 3) <= navBottom && getQuarterY(sections[i], 3) > navBottom) {
                    classCheckRemoveAdd(i);
                    currentSection = i;
                }
            }
            if(i == sections.length - 1) {
                if(getQuarterY(sections[i - 1], 3) <= navBottom) {
                    classCheckRemoveAdd(i);
                    currentSection = i;
                }
            }
            else { }
        }
        lastScrollPos = this.window.scrollY;
    }
    if(lastScrollPos > this.window.scrollY){
        for(let i = 0; i < sections.length; i++) {
            if (i == currentSection){
                i = sections.length;
            }
            if(i != currentSection && i < sections.length){
                if(i != sections.length - 1) {
                    if(getQuarterY(sections[i], 1) >= navBottom && sections[i].getBoundingClientRect().top < navBottom + getQuarterY(sections[i], 3)) {
                        classCheckRemoveAdd(i);
                        currentSection = i;
                        i = sections.length;
                    }
                }
            }
        }
        lastScrollPos = this.window.scrollY;
    }
});

function clickEventHandler(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - nav.clientHeight;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}