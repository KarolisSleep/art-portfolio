function assignClassToElements() {
    var images = document.querySelectorAll('.hiddingImages'); // Select all images with class 'hiddenImages'
    images.forEach(function(image) {
        image.classList.toggle('normalImage'); // Add the class 'highlight' to each image
    });
}
