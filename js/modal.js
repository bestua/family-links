const refs = {
  openModalBtn: document.querySelector('[data-open-modal1]'),
  closeModalBtn: document.querySelector('[data-close-modal1]'),
  backdrop: document.querySelector('[data-backdrop1]'),

  openModalBtn2: document.querySelector('[data-open-modal2]'),
  closeModalBtn2: document.querySelector('[data-close-modal2]'),
  backdrop2: document.querySelector('[data-backdrop2]'),
};

// --- --- ---
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

refs.openModalBtn2.addEventListener('click', toggleModal2);
refs.closeModalBtn2.addEventListener('click', toggleModal2);
// --- --- ---

function toggleModal() {
  refs.backdrop.classList.toggle('backdrop--is-hidden1');
}
function toggleModal2() {
  refs.backdrop2.classList.toggle('backdrop--is-hidden2');
}

// refs.backdrop.addEventListener('click', logBackdropClick);
// function logBackdropClick() {
//   console.log('This is a click to the backdrop');
// }
