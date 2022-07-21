let cards = document.querySelectorAll("#service-cards > div");
let frontCards = document.getElementsByClassName("card-front");
let backCards = document.getElementsByClassName("card-back");

for(const card of cards) {
    card.addEventListener("click", function(){
        card.classList.toggle("flip");
        for(let text of card.children){
            setTimeout(function(){
                text.classList.toggle("inactive-card");
            }, 250);
        }
    });
}