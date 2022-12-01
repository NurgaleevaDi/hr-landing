import React from 'react';
import vk from './images/social-vk.png';
import tg from './images/social-tg.png';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer__container-first'>
        <div className="footer__contacts">
          <p className="footer__tel">8-800-700-93-29</p>
          <p className="footer__tel-text">Звонок по России бесплатный</p>
          <ul className="footer__contacts-list list">
            <li className="footer__contacts-item">
              <a className="footer__contacts-link link" href="https://thecode.media/" target="_blank" rel="noreferrer">Журнал</a>
              </li>
            <li className="footer__contacts-item">
              <a className="footer__contacts-link link" href="https://vk.com/yandex.practicum" target="_blank" rel="noreferrer">
                <img className="footer__vk-icon" src={vk} alt="ВКонтакте"/>
              </a>
            </li>
          </ul>
          <button type="button" className="footer__button">
          <a className="link" href="https://t.me/practicum_experts">Следить за предложениями</a>
          <img src={tg} className="footer__tg-icon" alt="Телеграмм"/>
        </button>
        </div>
        <ul className='footer__nav list'>
          <li className='footer__nav-link'><a className='link' href="https://yandex.ru/support/praktikum/feedback.html" target="_blank" rel="noreferrer">Помощь</a></li>
          <li className='footer__nav-link'><a className='link' href="https://practicum.yandex.ru/job" target="_blank" rel="noreferrer">Сотрудничество</a></li>
          <li className='footer__nav-link'><a className='link' href="https://practicum.yandex.ru/employment/" target="_blank" rel="noreferrer">Для работодателей</a></li>
          <li className='footer__nav-link'><a className='link' href="https://practicum.yandex.ru/reviews" target="_blank" rel="noreferrer">Отзывы</a></li>
          <li className='footer__nav-link'><a className='link' href="https://yandex.ru/legal/practicum_termsofuse/" target="_blank" rel="noreferrer">Правовая информация</a></li>
          <li className='footer__nav-link'><a className='link' href="https://code.s3.yandex.net/License%20YSDA.pdf" target="_blank" rel="noreferrer">Лицензия</a></li>
        </ul>
      </div>
      <div className='footer__container-second'>

        <div className='footer__legal-info'>
          <p className='footer__legal-text'>Информация на данной странице описывает возможные варианты получения
            дополнительного дохода в месяц (т.н. подработка). Не является предложением о работе.
            Размещенные объявления о потребности в тех или иных услугах не являются вакансиями.</p>
          <p className='footer__legal-text'>Образовательные услуги оказываются АНО ДПО «ШАД». ШАД — это Школа анализа данных,
            основанная Яндексом и оказывающая образовательные услуги на основании Лицензии № 036031
            от 24 марта 2015 года.Сертификат о прохождении обучения по программе дополнительного
            профессионального образования также выдается АНО ДПО «ШАД».</p>
        </div>
        <p className='footer__copyright'>&copy;2022 АНО ДПО «ШАД», ООО «Яндекс»</p>
      </div>
    </footer>
  );
}

export default Footer;
