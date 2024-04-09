function assignClassToElements() {
    // Toggles on a class that makes the images appear
    const images = document.querySelectorAll('.hiddingImages'); 
    images.forEach(function(image) {
        image.classList.toggle('showImages'); 
    });

    // Toggle the class on the container
    var container = document.getElementById("container");
    container.classList.toggle("card--colorful-drawings");

    // Toggle the justify-content property for centering
    if (container.classList.contains("card--colorful-drawings")) {
        container.style.justifyContent = 'center'; // Apply centering
    } else {
        container.style.justifyContent = ''; // Reset to default
    }
}

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