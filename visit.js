// visit.js - validates the booking form


function looksLikeEmail(text) {
    var at = text.indexOf("@");
    var dot = text.lastIndexOf(".");
    if (at < 1) return false;
    if (dot < at + 2) return false;
    if (dot >= text.length - 1) return false;
    return true;
}


// checks if the chosen date is today or later
function dateIsFuture(d) {
    if (d == "") {
        return false;
    }

    var picked = new Date(d);
    var today = new Date();

    // reset both to midnight so we just compare the day not the time
    today.setHours(0, 0, 0, 0);
    picked.setHours(0, 0, 0, 0);

    if (picked.getTime() >= today.getTime()) {
        return true;
    }
    return false;
}


function wipeVisitErrors() {
    var errorIds = ["errorVisitName", "errorVisitEmail", "errorVisitPeople", "errorVisitDate", "errorVisitTimeslot"];
    var inputIds = ["visitName", "visitEmail", "visitPeople", "visitDate", "visitTimeslot"];

    for (var i = 0; i < errorIds.length; i++) {
        document.getElementById(errorIds[i]).className = "error-text";
        document.getElementById(inputIds[i]).className = "";
    }
}


function visitError(fieldId, errorId) {
    document.getElementById(errorId).className = "error-text show";
    document.getElementById(fieldId).className = "input-error";
}


function submitVisitForm() {
    wipeVisitErrors();

    var name = document.getElementById("visitName").value.trim();
    var email = document.getElementById("visitEmail").value.trim();
    var people = document.getElementById("visitPeople").value;
    var date = document.getElementById("visitDate").value;
    var slot = document.getElementById("visitTimeslot").value;

    var bad = false;

    if (name == "") {
        visitError("visitName", "errorVisitName");
        bad = true;
    }
    if (email == "" || looksLikeEmail(email) == false) {
        visitError("visitEmail", "errorVisitEmail");
        bad = true;
    }

    var howMany = parseInt(people);
    if (people == "" || howMany < 1 || howMany > 20) {
        visitError("visitPeople", "errorVisitPeople");
        bad = true;
    }
    if (dateIsFuture(date) == false) {
        visitError("visitDate", "errorVisitDate");
        bad = true;
    }
    if (slot == "") {
        visitError("visitTimeslot", "errorVisitTimeslot");
        bad = true;
    }

    if (bad == true) {
        return;
    }

    document.getElementById("visitSuccess").style.display = "block";

    document.getElementById("visitName").value = "";
    document.getElementById("visitEmail").value = "";
    document.getElementById("visitPeople").value = "";
    document.getElementById("visitDate").value = "";
    document.getElementById("visitTimeslot").value = "";
    document.getElementById("visitSupport").value = "";

    document.getElementById("visitSuccess").scrollIntoView({ behavior: "smooth" });
}
