document.querySelectorAll('.imageContainer img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = (e) => {
    e.stopPropagation();
    document.querySelector('.popup-image').style.display = 'none';
};

