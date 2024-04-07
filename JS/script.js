function assignClassToElements() {
    /*  Selects all elements with the class .hiddingImages and then
        toggles the class showImages */
    const images = document.querySelectorAll('.hiddingImages'); 
    images.forEach(function(image) {
        image.classList.toggle('showImages'); 
    });


    /* It's working fine */
    // Check if the window width is between 744px and 1113px
    if (window.innerWidth >= 730 && window.innerWidth <= 1113) {
        // Selects the class
        var element = document.querySelector('.card--colorful-drawings');

        // Toggle the inline styles
        if (element.style.position === 'relative') {
            element.style.position = '';
            element.style.left = '';
            element.style.transform = '';
        } else {
            element.style.position = 'relative';
            element.style.left = '50%';
            element.style.transform = 'translateX(-50%)';
            // This makes it so the children stay in the middle
        }
    }
/* This function makes it so when you toggle on the card it centers 
everything everything inside it(Works globally) */
    var element = document.querySelector('.card--colorful-drawings');
    // Toggle the justify-content property
    if (element.style.justifyContent === 'center') {
        element.style.justifyContent = ''; // Reset to default
    } else {
        element.style.justifyContent = 'center'; // Apply centering
    }


/* Testing code */
// if (window.innerWidth >= 443 && window.innerWidth <= 773) {}


/*     // this function makes it so everything works past it
    var element = document.querySelector('.card--colorful-drawings');
    var screenWidth = window.innerWidth;

    // Define scaling factor and top property based on screen width
    var scalingFactor, topValue, leftValue;
    if (screenWidth < 773) {
        if (element.style.transform === 'scale(0.6)') {
            scalingFactor = 1;
            topValue = '0px';
        } else {
            scalingFactor = 0.6;
            topValue = '-300px'
            leftValue = '0%';
        }

        // Apply transform property with the calculated scaling factor
        element.style.transform = 'scale(' + scalingFactor + ')';
        element.style.top = topValue;
    } */
}
