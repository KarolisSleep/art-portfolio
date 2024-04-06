function assignClassToElements() {
    const images = document.querySelectorAll('.hiddingImages'); 
    images.forEach(function(image) {
        image.classList.toggle('showImages'); 
    });
};