// testimonials.js - comments form + saves them in localStorage
// (no backend so localStorage is the only way to keep them after refresh)


function loadSavedComments() {
    var saved = localStorage.getItem("hugpupsComments");
    if (saved == null) {
        return;
    }

    // localStorage only saves text so JSON.parse turns it back into an array
    var list = JSON.parse(saved);
    var grid = document.getElementById("reviewsGrid");

    for (var i = 0; i < list.length; i++) {
        var c = list[i];
        var html = "<div class='card review-card'>";
        html += "<p>\"" + c.text + "\"</p>";
        html += "<div class='reviewer-name'>" + c.name + "</div>";
        html += "</div>";
        grid.innerHTML += html;
    }
}


function clearCommentErrors() {
    document.getElementById("errorCommentName").className = "error-text";
    document.getElementById("errorCommentText").className = "error-text";
    document.getElementById("commentName").className = "";
    document.getElementById("commentText").className = "";
}


function submitComment() {
    clearCommentErrors();

    var who = document.getElementById("commentName").value.trim();
    var what = document.getElementById("commentText").value.trim();

    var broken = false;

    if (who == "") {
        document.getElementById("errorCommentName").className = "error-text show";
        document.getElementById("commentName").className = "input-error";
        broken = true;
    }
    if (what.length < 10) {
        document.getElementById("errorCommentText").className = "error-text show";
        document.getElementById("commentText").className = "input-error";
        broken = true;
    }

    if (broken) {
        return;
    }

    // get whats already saved, add the new one, save it back
    var saved = localStorage.getItem("hugpupsComments");
    var list = [];
    if (saved != null) {
        list = JSON.parse(saved);
    }
    list.push({ name: who, text: what });
    localStorage.setItem("hugpupsComments", JSON.stringify(list));

    var newOne = "<div class='card review-card'>";
    newOne += "<p>\"" + what + "\"</p>";
    newOne += "<div class='reviewer-name'>" + who + "</div>";
    newOne += "</div>";

    var grid = document.getElementById("reviewsGrid");
    grid.innerHTML += newOne;

    document.getElementById("commentSuccess").style.display = "block";

    document.getElementById("commentName").value = "";
    document.getElementById("commentText").value = "";

    grid.scrollIntoView({ behavior: "smooth" });
}
