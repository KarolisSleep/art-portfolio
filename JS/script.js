function assignClassToElements() {
    /*  Selects all elements with the class .hiddingImages and then
        toggles the class showImages */
    const images = document.querySelectorAll('.hiddingImages'); 
    images.forEach(function(image) {
        image.classList.toggle('showImages'); 
    });

/* This function makes it so when you toggle on the card it centers 
everything everything inside it(Works globally) */
    var element = document.querySelector('.card--colorful-drawings');
    // Toggle the justify-content property
    if (element.style.justifyContent === 'center') {
        element.style.justifyContent = ''; // Reset to default
    } else {
        element.style.justifyContent = 'center'; // Apply centering
    }
}
