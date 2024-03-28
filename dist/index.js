document.addEventListener('DOMContentLoaded', function () {
    var galleryImages = document.querySelectorAll('.gallery__image');
    var modalWindow = document.querySelector('.overlay');
    var modalImage = document.querySelector('.carousel__image');
    var nextBtn = document.querySelector('.controls__btn--right');
    var prevBtn = document.querySelector('.controls__btn--left');
    var imageIdx = 0;
    // Обработка кликов по картинкам
    galleryImages.forEach(function (image, i) {
        image.addEventListener('click', function () {
            modalImage.src = image.src;
            modalWindow.classList.add('active');
            imageIdx = i;
            updateButtonState();
        });
    });
    // Обработка закрытия модального окна
    document.addEventListener('click', function (event) {
        if (event.target === modalWindow) {
            closeModal();
        }
    });
    nextBtn.addEventListener('click', function () {
        imageIdx = imageIdx + 1 < galleryImages.length ? imageIdx + 1 : galleryImages.length - 1;
        modalImage.src = galleryImages[imageIdx].src;
        updateButtonState();
    });
    prevBtn.addEventListener('click', function () {
        imageIdx = imageIdx - 1 >= 0 ? imageIdx - 1 : 0;
        modalImage.src = galleryImages[imageIdx].src;
        updateButtonState();
    });
    var updateButtonState = function () {
        prevBtn.disabled = imageIdx === 0;
        nextBtn.disabled = imageIdx === galleryImages.length - 1;
    };
    var closeModal = function () {
        modalWindow.classList.remove('active');
    };
});
