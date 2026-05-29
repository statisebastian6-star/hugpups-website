// nav.js
// makes the hamburger menu work on phones


// when you tap the burger icon it shows or hides the menu
function flipMenu() {

    var menu = document.getElementById("navLinks");

    // check if its already open
    if (menu.className.indexOf("show") > -1) {
        // close it
        menu.className = "nav-links";
    }
    else {
        // open it
        menu.className = "nav-links show";
    }
}
