import React from 'react';

function Roles() {
  return (
      <section className="roles">
         <h2 className="roles__title">В роли наставника и ревьюера вы будете:</h2>
         <div className="roles__overflow">
         <ul className="roles__grid">
            <li className="roles__subtitle">Менять жизнь людей к лучшему
               <p className="roles__text">Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться,</p>
            </li>
            <li className="roles__subtitle">Учиться новому
               <p className="roles__text">Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей</p>
            </li>
            <li className="roles__subtitle">Развивать личный бренд
               <p className="roles__text">Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас как об эксперте</p>
            </li>
            <li className="roles__subtitle">Общаться с людьми из EdTech
               <p className="roles__text">Станете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри</p>
            </li>
            <li className="roles__subtitle">Развиваться внутри роли
               <p className="roles__text">Вы сможете стать старшим наставником или сеньор-ревьювером</p>
            </li>
         </ul>
         </div>

      </section>
  );
}

export default Roles;
