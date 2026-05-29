// rent.js - validates the application form


// quick check if email has @ and a dot in the right place
function emailOk(text) {
    var at = text.indexOf("@");
    var dot = text.lastIndexOf(".");
    if (at < 1) return false;
    if (dot < at + 2) return false;
    if (dot >= text.length - 1) return false;
    return true;
}


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


function flagError(fieldId, errorId) {
    document.getElementById(errorId).className = "error-text show";
    document.getElementById(fieldId).className = "input-error";
}


function submitRentForm() {
    resetErrors();

    // .trim() removes spaces so people cant cheat with whitespace
    var dog = document.getElementById("rentDog").value.trim();
    var name = document.getElementById("rentName").value.trim();
    var email = document.getElementById("rentEmail").value.trim();
    var situation = document.getElementById("rentSituation").value.trim();

    var problem = false;

    if (dog == "") {
        flagError("rentDog", "errorDog");
        problem = true;
    }
    if (name == "") {
        flagError("rentName", "errorName");
        problem = true;
    }
    if (email == "" || emailOk(email) == false) {
        flagError("rentEmail", "errorEmail");
        problem = true;
    }
    if (situation.length < 20) {
        flagError("rentSituation", "errorSituation");
        problem = true;
    }

    if (problem == true) {
        return;
    }

    document.getElementById("rentSuccess").style.display = "block";

    document.getElementById("rentDog").value = "";
    document.getElementById("rentName").value = "";
    document.getElementById("rentEmail").value = "";
    document.getElementById("rentSituation").value = "";

    document.getElementById("rentSuccess").scrollIntoView({ behavior: "smooth" });
}
