'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

// Open modal function
const openModal = function () {
    console.log('Button clicked')
    modal.classList.remove('hidden'); // default is hidden
    overlay.classList.remove('hidden');
}

// Close modal function
const closeModal = function () {
    modal.classList.add('hidden'); 
    overlay.classList.add('hidden');
}

// loop for the function to take affect to all buttons
for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

// Upon clicking closebtn, closes window
btnCloseModal.addEventListener('click', closeModal)

// Upon clicking overlay, closes window
overlay.addEventListener('click', closeModal)

// On Esc KeyboardEvent, closes window
document.addEventListener('keydown', function (KeyboardEvent) {
    console.log(KeyboardEvent)
    if (KeyboardEvent.key === 'Escape' && !modal.classList.contains('hidden')) {
        return closeModal();
    }
})


