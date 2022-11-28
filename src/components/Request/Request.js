import React from 'react';

function Request() {
  return (
    <section className="request">
      <h2 className="request__title">Не нашли себя в открытых предложениях?</h2>
      <p className="request__text">Оставьте свои контакты – мы свяжемся с вами в течение нескольких часов</p>
      <form className="request__form">
        <div className="request__info">
          <div className="request__input-block">
            <input type="text" className="request__input" value='Имя' />
          </div>
          <div className="request__input-block">
            <input type="tel" className="request__input" value='+7 --- --- -- --' />
          </div>
          <div className="request__input-block">
            <input type="email" className="request__input" value='Эл.адрес' />
          </div>
            <select className="request__input_select" size="1">
              <option disabled>Какая роль Вам ближе?</option>
              <option>Наставник</option>
              <option>Ревьюер</option>
            </select>
            <select className="request__input_select" size="1">
              <option disabled>Выберите направление</option>
              <option>Аналитика данных</option>
              <option>Дизайн</option>
              <option>Маркетинг</option>
              <option>Менеджмент</option>
            </select>
          <div className="request__container">
            <div className="request__input-block">
              <input type="url" className="request__input" value="Ссылка на резюме"/>
            </div>
            <span className="request__span">*Пожалуйста проверьте, что вы открыли доступ к документу</span>
          </div>
        </div>
        <p className="request_text-small">
          Перечислите набор технологий, которыми вы владеете и уровень владения каждой
        </p>
        <div className="request__input-block request__block_long">
          <input type="text" className="request__input" value="Например..."/>
        </div>
        <button type="submit" className="request__button">Оставить заявку</button>
      </form>
    </section>
  );
}

export default Request;