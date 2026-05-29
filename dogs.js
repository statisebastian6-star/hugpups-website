// dogs.js - therapy dog data + builds the cards on the rent page
// (brief said dont hardcode dogs in html so its all here)


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


function showDogs() {
    var box = document.getElementById("dogsGrid");
    if (box == null) {
        return;
    }
    box.innerHTML = "";

    var i = 0;
    while (i < dogs.length) {
        var d = dogs[i];

        var html = "<div class='card dog-card'>";
        html += "<img src='" + d.image_url + "' alt='" + d.name + "' style='object-position: " + d.image_position + ";'>";
        html += "<div class='dog-info'>";
        html += "<h3>" + d.name + "</h3>";
        html += "<p class='dog-meta'><strong>Age:</strong> " + d.age + " years</p>";
        html += "<p class='dog-meta'><strong>Breed:</strong> " + d.breed + "</p>";
        html += "<p class='dog-meta'><strong>Temperament:</strong> " + d.temperament + "</p>";
        html += "</div>";
        html += "</div>";

        box.innerHTML += html;
        i++;
    }
}


// fills the dog dropdown on the rental form
function fillDogDropdown() {
    var pick = document.getElementById("rentDog");
    if (pick == null) {
        return;
    }

    var menu = "<option value=''>Choose a dog...</option>";
    for (var n = 0; n < dogs.length; n++) {
        menu += "<option>" + dogs[n].name + "</option>";
    }
    pick.innerHTML = menu;
}
