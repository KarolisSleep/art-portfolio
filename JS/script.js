function assignClassToElements() {
    /*  Selects all elements with the class .hiddenImages and then
        toggles the class showImage */
    const images = document.querySelectorAll('.hiddingImages'); 
    images.forEach(function(image) {
        image.classList.toggle('showImages'); 
        

// Check if the window width is between 744px and 1113px
if (window.innerWidth >= 744 && window.innerWidth <= 1113) {
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
        }}
    });


    var element = document.querySelector('.card--colorful-drawings');
    // Toggle the justify-content property
    if (element.style.justifyContent === 'center') {
        element.style.justifyContent = ''; // Reset to default
    } else {
        element.style.justifyContent = 'center'; // Apply centering
    }

    
    var element = document.querySelector('.card--colorful-drawings');
    var screenWidth = window.innerWidth;

    // Define scaling factor and top property based on screen width
    var scalingFactor, topValue;
    if (screenWidth < 773) {
        if (element.style.transform === 'scale(0.6)') {
            scalingFactor = 1;
            topValue = '0px';
        } else {
            scalingFactor = 0.6;
            topValue = '-300px';
        }

        // Apply transform property with the calculated scaling factor
        element.style.transform = 'scale(' + scalingFactor + ')';
        element.style.top = topValue;
    }
    };