/* A function for the container */
function assignClassToElements() {
    /*  Toggles on a class that makes the images appear */
    const images = document.querySelectorAll('.hiddingImages'); 
    images.forEach(function(image) {
        image.classList.toggle('showImages'); 
    });

    /* On toggle the card centers 
    everything inside it(Works globally) */
    var element = document.querySelector('.card--colorful-drawings');
    // Toggle the justify-content property
    if (element.style.justifyContent === 'center') {
        element.style.justifyContent = ''; // Reset to default
    } else {
        element.style.justifyContent = 'center'; // Apply centering
    }
}

/* A function that changes colors of the scrollbar depending on the hour of the day*/
function updateTimeBasedScrollbarStyle() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let newStyle = "";

    if (currentHour >= 9 && currentHour < 11) {
        newStyle = `
            background: rgb(0, 63, 63);
            -webkit-box-shadow: inset 0 0 6px rgba(0, 255, 255, 0.5);
        `;
    } else if (currentHour >= 11 && currentHour < 13) {
        newStyle = `
            background: rgb(0, 63, 0);
            -webkit-box-shadow: inset 0 0 6px rgba(0, 255, 0, 0.5);
        `;
    } else if (currentHour >= 13 && currentHour < 14) {
        newStyle = `
            background: rgb(63, 63, 0);
            -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 0, 0.5);
        `;
    } else if (currentHour >= 14 && currentHour < 15) {
        newStyle = `
            background: rgb(255, 165, 0);
            -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 0, 0.5);
        `;
    } else if (currentHour >= 15 && currentHour < 16) {
        newStyle = `
            background: rgb(63, 42, 0);
            -webkit-box-shadow: inset 0 0 6px rgba(255, 165, 0, 0.5);
        `;
    } else if (currentHour >= 16 && currentHour < 18) {
        newStyle = `
            background: rgb(63, 0, 0);
            -webkit-box-shadow: inset 0 0 6px rgba(255, 0, 0, 0.5);
        `;
    } else if (currentHour >= 18 && currentHour < 20) {
        newStyle = `
            background: rgb(63, 16, 170);
            -webkit-box-shadow: inset 0 0 6px rgba(160, 32, 240, 0.5);
        `;
    } else if (currentHour >= 21 && currentHour < 22) {
        newStyle = `
            background: rgb(0, 0, 255);
            -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 255, 0.5);
        `;
    }

    const styleTag = document.getElementById("scrollbar-style");

    if (styleTag) {
        styleTag.innerHTML = `::-webkit-scrollbar-thumb { ${newStyle} }`;
    }
}

// Call the function initially
updateTimeBasedScrollbarStyle();

// Update every minute
setInterval(updateTimeBasedScrollbarStyle, 60000);
