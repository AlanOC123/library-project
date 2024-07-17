import '../../styles/utils.css';

function renderModal() {
  const modalBlur = document.createElement('div');
  modalBlur.id = 'modal-blur';
  modalBlur.addEventListener('click', e => {
    if (e.target.id === 'modal-blur') {
      removeModal(modalBlur);
    }
  })

  return modalBlur;
}

function removeModal(modal) {
  document.body.removeChild(modal);
};

export {
  renderModal,
  removeModal
}