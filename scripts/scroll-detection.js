let navSection = document.getElementById("nav");
let navAbout = document.getElementById("navAbout");
let navWork = document.getElementById("navWork");
let navContact = document.getElementById("navContact");

let aboutSection = document.getElementById("about");
let workSection = document.getElementById("work");
let contactSection = document.getElementById("contact");

let lastScrollPos = window.scrollY;

const links = document.querySelectorAll("#nav > a");

function getQuarterY(elem, multFactor) {
    return elem.getBoundingClientRect().top + ((elem.clientHeight / 4) * multFactor);
}

window.addEventListener("scroll", function(){
    if(lastScrollPos < this.window.scrollY) {
        if(aboutSection.getBoundingClientRect().top >= navSection.getBoundingClientRect().bottom
         && workSection.getBoundingClientRect().top > navSection.getBoundingClientRect().bottom + getQuarterY(aboutSection, 3)) {
            if(navAbout.classList[0] == "activeNav") { }
            else if(navAbout.classList[0] == null) {
                if(navWork.classList[0] != null) {
                    navWork.classList.remove("activeNav");
                }
                if(navContact.classList[0] != null) {
                    navContact.classList.remove("activeNav");
                }
                navAbout.classList.add("activeNav");
            }
        }
        if(getQuarterY(aboutSection, 3) <= navSection.getBoundingClientRect().bottom
         && workSection.getBoundingClientRect().bottom > navSection.getBoundingClientRect().bottom + getQuarterY(aboutSection, 3)) {
            if(navWork.classList[0] == "activeNav") { }
            else if(navWork.classList[0] == null) {
                if(navAbout.classList[0] != null) {
                    navAbout.classList.remove("activeNav");
                }
                if(navContact.classList[0] != null) {
                    navContact.classList.remove("activeNav");
                }
                navWork.classList.add("activeNav");
            }
        }
        if(getQuarterY(workSection, 3) <= navSection.getBoundingClientRect().bottom
         && contactSection.getBoundingClientRect().bottom > navSection.getBoundingClientRect().bottom + getQuarterY(workSection, 3)) {
            if(navContact.classList[0] == "activeNav") { }
            else if(navContact.classList[0] == null) {
                if(navAbout.classList[0] != null) {
                    navAbout.classList.remove("activeNav");
                }
                if(navWork.classList[0] != null) {
                    navWork.classList.remove("activeNav");
                }
                navContact.classList.add("activeNav");
            }
        }
        lastScrollPos = this.window.scrollY;
    }
    if(lastScrollPos > this.window.scrollY) {
        if(getQuarterY(workSection, 1) >= navSection.getBoundingClientRect().bottom
         && getQuarterY(navSection, 1) < navSection.getBoundingClientRect().bottom) {
            if(navWork.classList[0] == "activeNav") { }
            else if(navWork.classList[0] == null) {
                if(navAbout.classList[0] != null) {
                    navAbout.classList.remove("activeNav");
                }
                if(navContact.classList[0] != null) {
                    navContact.classList.remove("activeNav");
                }
                navWork.classList.add("activeNav");
            }
        }
        if(getQuarterY(aboutSection, 1) >= navSection.getBoundingClientRect().bottom) {
            if(navAbout.classList[0] == "activeNav") { }
            else if(navAbout.classList[0] == null) {
                if(navWork.classList[0] != null) {
                    navWork.classList.remove("activeNav");
                }
                if(navContact.classList[0] != null) {
                    navContact.classList.remove("activeNav");
                }
                navAbout.classList.add("activeNav");
            }
        }
        lastScrollPos = this.window.scrollY;
    }
});

for(const link of links) {
    link.addEventListener("click", clickEventHandler);
}

function clickEventHandler(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop - document.getElementById("nav").clientHeight;

    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}

