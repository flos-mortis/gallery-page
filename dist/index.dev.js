"use strict";

var galleryImage = document.querySelectorAll('.gallery__image');
var modalOverlay = document.querySelector('.overlay');
console.log("beb");
galleryImage.forEach(function (image) {
  image.addEventListener('click', function () {
    if (modalOverlay !== null) {
      modalOverlay.classList.toggle('active');
      console.log("Popa");
    }
  });
});