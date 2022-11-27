import React from 'react';

function Request() {
  return (
    <section className="request">
      <h2 className="request__title">Не нашли себя в открытых предложениях?</h2>
      <p className="request__text">Оставьте свои контакты – мы свяжемся с вами в течение нескольких часов</p>
      <form className="request__form">
        <input type="text" className="request__input" placeholder='Имя' />
        <input type="tel" className="request__input" placeholder='+7 --- --- -- --' />
        <input type="email" className="request__input" placeholder='Эл.адрес' />
        <div className="request__select">
          <select className="request__input" size="1">
            <option disabled>Какая роль Вам ближе?</option>
            <option>Наставник</option>
            <option>Ревьюер</option>
          </select>
          <select className="request__input" size="1">
            <option disabled>Выберите направление</option>
            <option>Аналитика данных</option>
            <option>Дизайн</option>
            <option>Маркетинг</option>
            <option>Менеджмент</option>
          </select>
        </div>
        <input type="file" className="request__input"/>
      </form>
    </section>
  );
}

export default Request;
