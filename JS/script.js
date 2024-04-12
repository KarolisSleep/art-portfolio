/* If the profile icon is clicked while a section is open the section closes immediately */
function checkAndToggleContainer() {
    const colorfulContainer = document.querySelector('.colorful-drawings--container');
    const pokemonContainer = document.querySelector('.pokemon-drawings--container');
    const uniqueContainer = document.querySelector('.unique-drawings--container');

    if (containsShowImages(colorfulContainer)) {
        openColorfulDrawingsContainer(); // Toggle off
    } else if (containsShowImages(pokemonContainer)) {
        openPokemonDrawingsContainer(); // Toggle off
    } else if (containsShowImages(uniqueContainer)) {
        openUniqueDrawingsContainer(); // Toggle off
    }
}

function containsShowImages(container) {
    if (!container) return false;
    const children = container.children;
    for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains('showImages')) {
            return true;
        }
    }
    return false;
}

/* Supports healthy layouts */
function toggleGridClass() {
    var parentContainer = document.getElementById("container--sections-holder");
    parentContainer.classList.toggle("grid");
}

/* This makes it so when I click on the profile icon it opens the about me page*/
function toggleAboutMe() {
    var aboutMeSection = document.querySelector('.about-me-section');
    aboutMeSection.classList.toggle('about-me-section__animation');

    var container = document.getElementById('container--sections-holder');
    container.classList.toggle('background--darken');
    container.classList.toggle('containerBorderRemoveAnimation__animation');
}

/* Clicking on a section removes the custom icons on toggle */
function toggleSolidIconVisibility() {
    const solidIcons = document.querySelectorAll('.fa-solid'); // Select all elements with the class .fa-solid
    solidIcons.forEach(icon => {
        icon.style.display = icon.style.display === 'none' ? '' : 'none'; // Toggle display property
    });
}

/* First container */
function openColorfulDrawingsContainer() {
    // Toggles on a class that makes the images appear
    const images = document.querySelectorAll('.hiddingImages');
    images.forEach(function (image) {
        image.classList.toggle('showImages');
    });

    // Toggle the class on the container
    var container = document.getElementById("colorful-drawings--container");
    container.classList.toggle("card--colorful-drawings");

    // Toggle the justify-content property for centering
    if (container.classList.contains("card--colorful-drawings")) {
        container.style.justifyContent = 'center'; // Apply centering
    } else {
        container.style.justifyContent = ''; // Reset to default
    }

    var containers = document.querySelectorAll(".pokemon-drawings--container, .unique-drawings--container");

    containers.forEach(function (container) {
        if (container.style.position !== "absolute" || container.style.zIndex !== "-10" || container.style.transform !== "scale(0)") {
            container.style.position = "absolute";
            container.style.zIndex = "-10";
            container.style.transform = "scale(0)";
        } else {
            container.style.position = "";
            container.style.zIndex = "";
            container.style.transform = "";
        }
    });

    var img = document.querySelector(".img-sunrise");
    img.src = "./IMG/colorful drawings/Sunrise.jpg";

    var img = document.querySelector(".img-woods");
    img.src = "./IMG/colorful drawings/Woods.jpg";

    var img = document.querySelector(".img-town");
    img.src = "./IMG/colorful drawings/Town.jpg";

    var img = document.querySelector(".img-desert");
    img.src = "./IMG/colorful drawings/Desert.jpg";

    var img = document.querySelector(".img-khazix");
    img.src = "./IMG/colorful drawings/KhaZix.jpg";

    var img = document.querySelector(".img-sunflowers");
    img.src = "./IMG/colorful drawings/Sunflowers.jpg";

    var img = document.querySelector(".img-windmill");
    img.src = "./IMG/colorful drawings/Windmill.jpg";

    toggleSolidIconVisibility()
    toggleGridClass();
}

/* Second container */
function openPokemonDrawingsContainer() {
    // Toggles on a class that makes the images appear
    const images = document.querySelectorAll('.img-pokemon');
    images.forEach(function (image) {
        image.classList.toggle('showImages');
    });

    // Select both containers
    var containers = document.querySelectorAll('.colorful-drawings--container, .unique-drawings--container');

    // Loop through each container
    containers.forEach(function (container) {
        if (container.style.position !== "absolute" || container.style.zIndex !== "-10" || container.style.transform !== "scale(0)") {
            container.style.position = "absolute";
            container.style.zIndex = "-10";
            container.style.transform = "scale(0)";
        } else {
            container.style.position = "";
            container.style.zIndex = "";
            container.style.transform = "";
        }
    });

    // Update image sources
    document.querySelector(".img-zoroark").src = "./IMG/pokemon drawings/Zoroark.jpg";
    document.querySelector(".img-sylveon").src = "./IMG/pokemon drawings/Sylveon.png";
    document.querySelector(".img-darkrai").src = "./IMG/pokemon drawings/Darkrai.jpg";
    document.querySelector(".img-ghosts").src = "./IMG/pokemon drawings/Chandelure and Annihilape.jpg";

    toggleSolidIconVisibility()
    toggleGridClass();
};

/* Third container. */
function openUniqueDrawingsContainer() {
    // Toggles on a class that makes the images appear
    const images = document.querySelectorAll('.img-section3');
    images.forEach(function (image) {
        image.classList.toggle('showImages');
    });

    // Select both containers
    var containers = document.querySelectorAll('.colorful-drawings--container, .pokemon-drawings--container');

    // Loop through each container
    containers.forEach(function (container) {
        if (container.style.position !== "absolute" || container.style.zIndex !== "-10" || container.style.transform !== "scale(0)") {
            container.style.position = "absolute";
            container.style.zIndex = "-10";
            container.style.transform = "scale(0)";
        } else {
            container.style.position = "";
            container.style.zIndex = "";
            container.style.transform = "";
        }
    });
    document.querySelector(".img-kingler").src = "./IMG/simpler drawings/Kingler.jpg";
    document.querySelector(".img-alex").src = "./IMG/simpler drawings/Alex Mercer.jpg";
    document.querySelector(".img-trees").src = "./IMG/simpler drawings/Trees.jpg";
    document.querySelector(".img-whale").src = "./IMG/simpler drawings/Manic whale.jpg";
    document.querySelector(".img-trio").src = "./IMG/simpler drawings/Revenge Wrath Apathy.jpg";
    document.querySelector(".img-eye").src = "./IMG/simpler drawings/Teary eye.jpg";
    document.querySelector(".img-paradise").src = "./IMG/simpler drawings/Paradise.jpg";
    document.querySelector(".img-hurt2").src = "./IMG/simpler drawings/Hurt2.jpg";
    document.querySelector(".img-angel").src = "./IMG/simpler drawings/Angel.jpg";
    document.querySelector(".img-city").src = "./IMG/simpler drawings/City.jpg";

    toggleSolidIconVisibility()
    toggleGridClass();
}

/* This code helps the custom scrollbar function. */
let colorIndex = 0; // Initialize color index

function changeScrollbarStyle() {
    const rainbowColors = [
        "rgb(0, 170, 255)",     // Lighter blue (12 PM)
        "rgb(0, 156, 10)",      // Green (1 PM)
        "rgb(255, 255, 0)",     // Yellow (2 PM)
        "rgb(235, 0, 0)",       // Red (3 PM)
        "rgb(111, 0, 255)",     // Purple (4 PM)
        "rgb(0, 0, 255)",       // Blue (5 PM)
        "rgb(0, 156, 10)",      // Green (6 PM)
        "rgb(255, 255, 0)",     // Yellow (7 PM)
        "rgb(235, 0, 0)",       // Red (8 PM)
        "rgb(111, 0, 255)",     // Purple (9 PM)
        "rgb(0, 0, 255)",       // Blue (10 PM)
        "rgb(0, 170, 255)"      // Lighter blue (11 PM)
    ];

    const date = new Date();
    const hour = date.getHours();
    let currentColorIndex;

    // Calculate the index of the color based on the current hour
    if (hour >= 12) {
        currentColorIndex = (hour - 12) % rainbowColors.length;
    } else {
        currentColorIndex = hour;
    }

    // Get the selected color for the background
    const selectedBackgroundColor = rainbowColors[currentColorIndex];

    // Calculate the corresponding color for the background by dividing RGB values by 3
    const backgroundRgbValues = selectedBackgroundColor.match(/\d+/g);
    const selectedBackgroundDividedColor = `rgb(${backgroundRgbValues[0] / 3}, ${backgroundRgbValues[1] / 3}, ${backgroundRgbValues[2] / 3})`;

    // Apply the styles to the scrollbar thumb directly
    document.documentElement.style.setProperty('--scrollbar-background-color', selectedBackgroundDividedColor);
    document.documentElement.style.setProperty('--scrollbar-box-shadow-color', selectedBackgroundColor);

    // Update color index if necessary
    if (colorIndex !== currentColorIndex) {
        colorIndex = currentColorIndex;
    }
}

// Call the function initially
changeScrollbarStyle();

// Call the function every hour to update the colors based on the device's time
setInterval(changeScrollbarStyle, 3600000); // 3600000 milliseconds = 1 hour

/* Makes it so screen rotating is set and ultimately disabled. */
window.addEventListener("orientationchange", function () {
    // Check if the device is in landscape mode
    if (window.orientation === 90 || window.orientation === -90) {
        // If it's in landscape mode, rotate the viewport back to portrait
        document.body.style.transform = "rotate(-90deg)";
    } else {
        // If it's in portrait mode, reset the rotation
        document.body.style.transform = "none";
    }
});