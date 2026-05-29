// dogs.js
// all the therapy dogs and the code to put them on the page
// the brief said dont put dogs in html so its all in here


// each dog is an object with the info we need to show
// image_position lets me crop the photo nicely per dog
// (some dogs have their face at the top so they need different cropping)
var dogs = [
    {
        name: "Tofu",
        age: 4,
        breed: "Mastiff",
        temperament: "Calm, Gentle, Protective",
        image_url: "assets/dog-tofu.jpg",
        image_position: "center"
    },
    {
        name: "Bella",
        age: 3,
        breed: "Golden Retriever",
        temperament: "Friendly, Loyal, Playful",
        image_url: "assets/dog-bella.jpg",
        image_position: "center"
    },
    {
        name: "Max",
        age: 5,
        breed: "Labrador Retriever",
        temperament: "Affectionate, Energetic, Patient",
        image_url: "assets/dog-max.jpg",
        image_position: "center top"
    },
    {
        name: "Charlie",
        age: 2,
        breed: "Cocker Spaniel",
        temperament: "Gentle, Loving, Alert",
        image_url: "assets/dog-charlie.jpg",
        image_position: "center"
    },
    {
        name: "Lucy",
        age: 6,
        breed: "Bernese Mountain Dog",
        temperament: "Calm, Patient, Affectionate",
        image_url: "assets/dog-lucy.jpg",
        image_position: "center"
    },
    {
        name: "Daisy",
        age: 4,
        breed: "Cavalier King Charles Spaniel",
        temperament: "Friendly, Quiet, Adaptable",
        image_url: "assets/dog-daisy.jpg",
        image_position: "center"
    }
];


// puts the dog cards on the rent page
function showDogs() {

    // find where the cards should go
    var box = document.getElementById("dogsGrid");

    // if its not the rent page, do nothing
    if (box == null) {
        return;
    }

    // start with empty grid
    box.innerHTML = "";

    // go through every dog
    var i = 0;
    while (i < dogs.length) {

        var d = dogs[i];

        // build the card as one big string
        // i tried doing this with createElement first but this is way easier
        var html = "<div class='card dog-card'>";
        html += "<img src='" + d.image_url + "' alt='" + d.name + "' style='object-position: " + d.image_position + ";'>";
        html += "<div class='dog-info'>";
        html += "<h3>" + d.name + "</h3>";
        html += "<p class='dog-meta'><strong>Age:</strong> " + d.age + " years</p>";
        html += "<p class='dog-meta'><strong>Breed:</strong> " + d.breed + "</p>";
        html += "<p class='dog-meta'><strong>Temperament:</strong> " + d.temperament + "</p>";
        html += "</div>";
        html += "</div>";

        // add it to the page
        box.innerHTML += html;

        i++;
    }
}


// fills the dropdown on the rental form with each dogs name
function fillDogDropdown() {

    var pick = document.getElementById("rentDog");

    // not all pages have this dropdown
    if (pick == null) {
        return;
    }

    // first option is empty (so we can check if they picked one)
    var menu = "<option value=''>Choose a dog...</option>";

    // add an option for each dog
    for (var n = 0; n < dogs.length; n++) {
        menu += "<option>" + dogs[n].name + "</option>";
    }

    pick.innerHTML = menu;
}


// these get called from nav.js when the page loads
// (one shared window.onload across the site so they dont overwrite eachother)
