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
