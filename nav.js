// nav.js - mobile menu + page load handler


function flipMenu() {
    var menu = document.getElementById("navLinks");
    if (menu.className.indexOf("show") > -1) {
        menu.className = "nav-links";
    }
    else {
        menu.className = "nav-links show";
    }
}


function closeMenu() {
    var menu = document.getElementById("navLinks");
    menu.className = "nav-links";
}


function setupNavLinks() {
    var menu = document.getElementById("navLinks");
    var links = menu.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = closeMenu;
    }
}


// one shared window.onload for the whole site
// (otherwise the JS files overwirte eachothers onload)
window.onload = function() {
    setupNavLinks();

    if (typeof showDogs == "function") {
        showDogs();
    }
    if (typeof fillDogDropdown == "function") {
        fillDogDropdown();
    }
    if (typeof loadSavedComments == "function") {
        loadSavedComments();
    }
};
