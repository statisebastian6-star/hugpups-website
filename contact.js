// contact.js
// contact form + the FAQ accordion at the bottom


// same email check as the other pages
function validEmail(e) {
    var at = e.indexOf("@");
    var dot = e.lastIndexOf(".");
    if (at < 1) return false;
    if (dot < at + 2) return false;
    if (dot >= e.length - 1) return false;
    return true;
}


function clearContactErrors() {
    var ids = ["ContactName", "ContactEmail", "ContactSubject", "ContactMessage"];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById("error" + ids[i]).className = "error-text";
        document.getElementById("contact" + ids[i].substring(7)).className = "";
    }
}


function submitContact() {

    clearContactErrors();

    // get the values
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var subject = document.getElementById("contactSubject").value;
    var msg = document.getElementById("contactMessage").value;

    var fail = false;

    if (name == "") {
        document.getElementById("errorContactName").className = "error-text show";
        document.getElementById("contactName").className = "input-error";
        fail = true;
    }

    if (email == "" || !validEmail(email)) {
        document.getElementById("errorContactEmail").className = "error-text show";
        document.getElementById("contactEmail").className = "input-error";
        fail = true;
    }

    if (subject == "") {
        document.getElementById("errorContactSubject").className = "error-text show";
        document.getElementById("contactSubject").className = "input-error";
        fail = true;
    }

    // need a proper message not just "hi"
    if (msg.length < 10) {
        document.getElementById("errorContactMessage").className = "error-text show";
        document.getElementById("contactMessage").className = "input-error";
        fail = true;
    }

    if (fail) {
        return;
    }

    // worked - show success
    document.getElementById("contactSuccess").style.display = "block";

    // clear the form
    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactSubject").value = "";
    document.getElementById("contactMessage").value = "";

    document.getElementById("contactSuccess").scrollIntoView({ behavior: "smooth" });
}


// opens or closes a FAQ when you click the question
function toggleFaq(question) {

    // the answer is the next element after the question button
    var answer = question.nextElementSibling;

    // if its showing, hide it. if its hidden, show it
    if (answer.style.display == "block") {
        answer.style.display = "none";
    }
    else {
        answer.style.display = "block";
    }
}
