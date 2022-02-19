let formSubject;
let formMessage;
var email = "matthew.sudekum@outlook.com";

function sendEmail() {
    formSubject = document.querySelector("#subject").value;
    formMessage = document.querySelector("#message").value;
    document.location = "mailto:"+email+"?subject="+formSubject+"&body="+formMessage;
}