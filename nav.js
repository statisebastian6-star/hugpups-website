// nav.js
// menu stuff for mobile
// also runs all the page load stuff


// shows or hides the burger menu when you tap it
function flipMenu() {

    var menu = document.getElementById("navLinks");

    // is it already open?
    if (menu.className.indexOf("show") > -1) {
        // close it
        menu.className = "nav-links";
    }
    else {
        // open it
        menu.className = "nav-links show";
    }
}


// closes the menu - used when you click a link on mobile
// (someone in feedback said the menu stayed open over the page)
function closeMenu() {
    var menu = document.getElementById("navLinks");
    menu.className = "nav-links";
}


// makes each nav link close the menu when clicked
function setupNavLinks() {

    var menu = document.getElementById("navLinks");
    var links = menu.getElementsByTagName("a");

    // loop through every link and add the onclick
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = closeMenu;
    }
}


// runs when the page is done loading
// every page links to this file so this is the one window.onload
// for the whole site (otherwise they overwirte eachother)
window.onload = function() {

    // every page has the nav so always do this
    setupNavLinks();

    // these only exist on some pages - check before calling
    // typeof checks if the function actually exists
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
