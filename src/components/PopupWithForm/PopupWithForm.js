/* eslint-disable react/prop-types */
import React from 'react';

function PopupWithForm({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup-overlay">
        <div className="popup-content">
          <div className="request__form-wrapper">
            <button type="button" className="popup__close-button" onClick={onClose}></button>
            <form className="request__form">
              <h2 className="request__form-title">Оставьте свои контакты — мы свяжемся с вами в&nbsp;течение нескольких часов</h2>
              <div className="request__info">
                <div className="request__input-block">
                  <input
                    type="text"
                    className="request__input"
                    placeholder="Имя"
                    required
                    minLength="2"
                    maxLength="30"
                  />
                </div>
                <div className="request__input-block">
                  <input
                    type="tel"
                    className="request__input"
                    placeholder="+7 --- --- -- --"
                    required
                  />
                </div>
                <div className="request__input-block">
                  <input
                    type="email"
                    className="request__input"
                    placeholder="Эл.адрес"
                    required
                  />
                </div>
                <select className="request__input_select" size="1">
                  <option selected disabled>Какая роль Вам ближе?</option>
                  <option>Наставник</option>
                  <option>Ревьюер</option>
                </select>
                <select className="request__input_select" size="1">
                  <option selected disabled>Выберите направление</option>
                  <option>Аналитика данных</option>
                  <option>Дизайн</option>
                  <option>Маркетинг</option>
                  <option>Менеджмент</option>
                </select>
                <div className="request__container">
                  <div className="request__input-block">
                    <input
                      type="url"
                      className="request__input"
                      placeholder="Ссылка на резюме"
                    />
                  </div>
                  <span className="request__span">*Пожалуйста проверьте, что вы открыли доступ
                    к документу</span>
                </div>
              </div>

              <div className="request__block">
                <p className="request_text-small">
                  Перечислите набор технологий, которыми вы владеете и уровень владения каждой
                </p>
                <div className="request__input-block request__block_long">
                  <input type="text" className="request__input request__input_long" placeholder="Например..."/>
                </div>
                <div className="request__agreement">
                  <input type="checkbox" name="agreement" id="agreement" value="1" required/>
                  <label className="request__agreement_text" htmlFor="agreement"> Я даю согласие АНО ДПО «ШАД» и ООО «ЯНДЕКС» на обработку
                    указанных данных для целей рассмотрения анкеты и обратной связи по ней.</label>
                </div>
              </div>
              <button type="submit" className="request__button">Оставить заявку</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}

export default PopupWithForm;
