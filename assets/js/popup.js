const popup = document.querySelector('#popup');
const backdrop = document.querySelector('#popup-backdrop');
const openButton = document.querySelector('#open-popup');
const closeButtons = document.querySelectorAll('[data-close]');

const togglePopup = (shouldOpen) => {
  const isOpen = shouldOpen ?? popup.getAttribute('aria-hidden') === 'true';
  popup.setAttribute('aria-hidden', !isOpen);
  backdrop.hidden = !isOpen;

  if (isOpen) {
    popup.querySelector('.popup__close').focus();
  } else {
    openButton.focus();
  }
};

const openPopup = () => togglePopup(true);
const closePopup = () => togglePopup(false);

const onBackdropClick = (event) => {
  if (event.target === popup) {
    closePopup();
  }
};

const onKeydown = (event) => {
  if (event.key === 'Escape' && popup.getAttribute('aria-hidden') === 'false') {
    closePopup();
  }
};

openButton.addEventListener('click', openPopup);
closeButtons.forEach((button) => button.addEventListener('click', closePopup));
popup.addEventListener('click', onBackdropClick);
document.addEventListener('keydown', onKeydown);

popup.setAttribute('aria-hidden', 'true');
