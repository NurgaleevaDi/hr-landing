import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container-info">
        <p className="footer__tel">8-800-700-93-29</p>
        <p className="footer__tel-text">Звонок по России бесплатный</p>
        <ul className="footer__contact-list">
          <li className="footer__contact-item"><a className="footer__contact-link" href="https://thecode.media/" target="_blank">Журнал</a></li>
        </ul>
        <p className='footer__copyright'>&copy;2022 АНО ДПО «ШАД», ООО «Яндекс»</p>
      </div>
      <ul className='footer__nav'>
        <li className='footer__nav-link link'><a href="https://yandex.ru/support/praktikum/feedback.html" target="_blank">Помощь</a></li>
        <li className='footer__nav-link'><a href="https://yandex.ru/support/praktikum/feedback.html" target="_blank">Вакансии</a></li>
        <li className='footer__nav-link'><a href="https://yandex.ru/support/praktikum/feedback.html" target="_blank">Для работодателей</a></li>
        <li className='footer__nav-link'><a href="https://yandex.ru/support/praktikum/feedback.html" target="_blank">Отзывы</a></li>
        <li className='footer__nav-link'><a href="https://yandex.ru/support/praktikum/feedback.html" target="_blank">Правовая информация</a></li>
        <li className='footer__nav-link'><a href="https://yandex.ru/support/praktikum/feedback.html" target="_blank">Лицензия</a></li>
      </ul>
      <div className='footer__legal-info'>
        <p className='footer__legal-text'>Информация на данной странице описывает возможные варианты получения
        дополнительного дохода в месяц (т.н. подработка). Не является предложением о работе.
        Размещенные объявления о потребности в тех или иных услугах не являются вакансиями.</p>
        <p className='footer__legal-text'>Образовательные услуги оказываются АНО ДПО «ШАД». ШАД — это Школа анализа данных,
        основанная Яндексом и оказывающая образовательные услуги на основании Лицензии № 036031 от
        24 марта 2015 года.Сертификат
        о прохождении обучения по программе дополнительного профессионального образования также
        выдается АНО ДПО «ШАД».</p>
      </div>
    </footer>
  );
}

export default Footer;
