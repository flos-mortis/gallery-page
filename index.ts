document.addEventListener('DOMContentLoaded', () => {
    const galleryImages : NodeListOf<HTMLImageElement> = document.querySelectorAll('.gallery__image');
    const modalWindow : HTMLDivElement = document.querySelector('.overlay')!;
    const modalImage : HTMLImageElement = document.querySelector('.carousel__image')!;
    const closeBtn : HTMLSpanElement = document.querySelector('.modal__close')!;
    const nextBtn : HTMLButtonElement = document.querySelector('.controls__btn--right')!;
    const prevBtn : HTMLButtonElement = document.querySelector('.controls__btn--left')!;

    let imageIdx : number = 0;

    // Обработка кликов по картинкам
    galleryImages.forEach((image, i) => {
        image.addEventListener('click', () => {
            modalImage.src = image.src;
            modalWindow.classList.add('active');
            imageIdx = i;
            updateButtonState();
        })
    })

    // Обработка закрытия модального окна
    document.addEventListener('click' , event => {
        if (event.target === modalWindow || event.target === closeBtn) {
            closeModal();
        }
    })

    nextBtn.addEventListener('click', () => {
        imageIdx = imageIdx + 1 < galleryImages.length ? imageIdx + 1 : galleryImages.length - 1;
        modalImage.src = galleryImages[imageIdx].src;
        updateButtonState();
    })

    prevBtn.addEventListener('click', () => {
        imageIdx = imageIdx - 1 >= 0 ? imageIdx - 1 : 0;
        modalImage.src = galleryImages[imageIdx].src;
        updateButtonState();
    })
    
    const updateButtonState = () => {
        prevBtn.disabled = imageIdx === 0;
        nextBtn.disabled = imageIdx === galleryImages.length - 1;
    }

    const closeModal = () => {
        modalWindow.classList.remove('active');
    }
})
