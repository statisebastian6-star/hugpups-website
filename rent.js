// rent.js
// handles the application form on the rent a dog page


// quick check if an email looks ok
// must have @ and a dot after the @
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


// hide all the red error stuff (used when retrying)
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


// show one error - saves me writing the same code 4 times
function flagError(fieldId, errorId) {
    document.getElementById(errorId).className = "error-text show";
    document.getElementById(fieldId).className = "input-error";
}


// runs when the user hits submit
function submitRentForm() {

    resetErrors();

    // grab whats in the fields
    var dog = document.getElementById("rentDog").value;
    var name = document.getElementById("rentName").value;
    var email = document.getElementById("rentEmail").value;
    var situation = document.getElementById("rentSituation").value;

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

    // situation must be a real description not just a word or 2
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
