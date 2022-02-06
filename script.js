var i = 0;
var speed = 75;
let hiEl = document.getElementById('hello');
let hiText = hiEl.innerHTML;
hiEl.innerHTML = "";

function type() {
    if(i < hiText.length) {
        hiEl.innerHTML += hiText.charAt(i);
        i++;
        setTimeout(type, speed);
    }
}

type();