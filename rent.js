// rent.js
// validates the application form on rent.html


// quick check if an email looks ok
// it needs an @ and a dot somewhere after the @
function emailOk(text) {

    var at = text.indexOf("@");
    var dot = text.lastIndexOf(".");

    // needs to have an @ that isnt at the start
    if (at < 1) {
        return false;
    }
    // needs a dot at least 2 chars after the @
    if (dot < at + 2) {
        return false;
    }
    // dot cant be the last char
    if (dot >= text.length - 1) {
        return false;
    }
    return true;
}


// hides all the red error stuff (when they try again)
function resetErrors() {
    document.getElementById("errorDog").className = "error-text";
    document.getElementById("errorName").className = "error-text";
    document.getElementById("errorEmail").className = "error-text";
    document.getElementById("errorSituation").className = "error-text";

    document.getElementById("rentDog").className = "";
    document.getElementById("rentName").className = "";
    document.getElementById("rentEmail").className = "";
    document.getElementById("rentSituation").className = "";
}


// shows one error - saves repeating the same 2 lines
function flagError(fieldId, errorId) {
    document.getElementById(errorId).className = "error-text show";
    document.getElementById(fieldId).className = "input-error";
}


// runs when they hit submit
function submitRentForm() {

    resetErrors();

    // grab whats in the fields
    // .trim() removes spaces from the start and end
    // so people cant cheat by typing only spaces
    var dog = document.getElementById("rentDog").value.trim();
    var name = document.getElementById("rentName").value.trim();
    var email = document.getElementById("rentEmail").value.trim();
    var situation = document.getElementById("rentSituation").value.trim();

    // track if anything is wrong
    var problem = false;

    // empty dog dropdown
    if (dog == "") {
        flagError("rentDog", "errorDog");
        problem = true;
    }

    // empty name
    if (name == "") {
        flagError("rentName", "errorName");
        problem = true;
    }

    // bad email
    if (email == "" || emailOk(email) == false) {
        flagError("rentEmail", "errorEmail");
        problem = true;
    }

    // situation must be a proper description not just a word or 2
    if (situation.length < 20) {
        flagError("rentSituation", "errorSituation");
        problem = true;
    }

    // stop here if anything failed
    if (problem == true) {
        return;
    }

    // all good - show the green success box
    document.getElementById("rentSuccess").style.display = "block";

    // empty the form
    document.getElementById("rentDog").value = "";
    document.getElementById("rentName").value = "";
    document.getElementById("rentEmail").value = "";
    document.getElementById("rentSituation").value = "";

    // scroll down to the success message so they see it
    document.getElementById("rentSuccess").scrollIntoView({ behavior: "smooth" });
}
