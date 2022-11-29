import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Request({ componentRef }) {
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = React.useState(false);

  function handleOpenPopup() {
    setIsPopupWithFormOpen(!isPopupWithFormOpen);
  }

  function handleClosePopup() {
    setIsPopupWithFormOpen(false);
  }

  return (
    <section className="request" ref={componentRef} >
      <h2 className="request__title">Не нашли себя в открытых предложениях?</h2>
      <p className="request__text">Оставьте свои контакты – мы свяжемся с вами в течение нескольких часов</p>
      <button type="button" className="request__button" onClick={handleOpenPopup}>Оставить заявку</button>
      <PopupWithForm
        isOpen = {isPopupWithFormOpen}
        onClose = {handleClosePopup}
      />
    </section>
  );
}

export default Request;
