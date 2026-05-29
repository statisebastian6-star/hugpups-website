// contact.js - the contact form + the FAQ accordion


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

    var name = document.getElementById("contactName").value.trim();
    var email = document.getElementById("contactEmail").value.trim();
    var subject = document.getElementById("contactSubject").value.trim();
    var msg = document.getElementById("contactMessage").value.trim();

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
    if (msg.length < 10) {
        document.getElementById("errorContactMessage").className = "error-text show";
        document.getElementById("contactMessage").className = "input-error";
        fail = true;
    }

    if (fail) {
        return;
    }

    document.getElementById("contactSuccess").style.display = "block";

    document.getElementById("contactName").value = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactSubject").value = "";
    document.getElementById("contactMessage").value = "";

    document.getElementById("contactSuccess").scrollIntoView({ behavior: "smooth" });
}


// opens or closes a FAQ when you click the question
function toggleFaq(question) {
    var answer = question.nextElementSibling;
    if (answer.style.display == "block") {
        answer.style.display = "none";
    }
    else {
        answer.style.display = "block";
    }
}
