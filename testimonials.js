// testimonials.js
// people can leave a comment and it gets saved
// uses localStorage so comments stay after refresh
// (theres no backend so this was the only way)


// reads any saved comments and puts them back on the page
function loadSavedComments() {

    // grab whats saved (if anything)
    var saved = localStorage.getItem("hugpupsComments");

    // if its null then this is their first time - nothing to load
    if (saved == null) {
        return;
    }

    // localStorage only saves text so we saved it as JSON
    // JSON.parse turns the text back into a real array
    var list = JSON.parse(saved);

    // loop through and add each one to the page
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

    // grab the inputs - trim removes spaces from start and end
    var who = document.getElementById("commentName").value.trim();
    var what = document.getElementById("commentText").value.trim();

    var broken = false;

    // name cant be empty
    if (who == "") {
        document.getElementById("errorCommentName").className = "error-text show";
        document.getElementById("commentName").className = "input-error";
        broken = true;
    }

    // comment must be at least 10 chars (otherwise its not really a comment)
    if (what.length < 10) {
        document.getElementById("errorCommentText").className = "error-text show";
        document.getElementById("commentText").className = "input-error";
        broken = true;
    }

    if (broken) {
        return;
    }


    // save it to localStorage so it stays forever

    // get whats already saved
    var saved = localStorage.getItem("hugpupsComments");

    var list = [];

    // if theres already comments saved, turn them back into an array
    if (saved != null) {
        list = JSON.parse(saved);
    }

    // add the new comment to the array
    list.push({
        name: who,
        text: what
    });

    // save the updated array back
    // JSON.stringify turns the array into text so it can be saved
    localStorage.setItem("hugpupsComments", JSON.stringify(list));


    // now add the card to the page right away

    var newOne = "<div class='card review-card'>";
    newOne += "<p>\"" + what + "\"</p>";
    newOne += "<div class='reviewer-name'>" + who + "</div>";
    newOne += "</div>";

    var grid = document.getElementById("reviewsGrid");
    grid.innerHTML += newOne;

    // show success message
    document.getElementById("commentSuccess").style.display = "block";

    // empty the form so they can leave another one
    document.getElementById("commentName").value = "";
    document.getElementById("commentText").value = "";

    // scroll up to the grid so they can see their new comment
    grid.scrollIntoView({ behavior: "smooth" });
}


// loadSavedComments gets called from nav.js when the page loads
// (one shared window.onload across the site so they dont overwrite eachother)
