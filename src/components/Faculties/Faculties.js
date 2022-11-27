import React from 'react';

function Faculties() {
  return (
      <section className="faculties">
         <h2 className="faculties__title">Наши факультеты</h2>
         <ul className="faculties__grid">
            <li className="faculties__profession-front">Программирование
                  <button className="faculties__button-front" alt="Изображение стрелки"/>
            </li>
            <li className="faculties__profession-back faculties__profession-back_hidden">Направление для всех, кто хочет развиваться
            в сфере программирования вне зависимости от прошлого опыта.
            Учим разработке и тестированию в условиях, которые имитируют реальную работу:
            с проектами, спринтами и дедлайнами.
            Мы за честный взгляд на программирование: без клише и ложных ожиданий.
                  <button className="faculties__button-back" alt="К вакансиям">К вакансиям</button>
            </li>
            <li className="faculties__profession-front">Анализ данных
                  <button className="faculties__button-front" alt="Изображение стрелки"/>
            </li>
            <li className="faculties__profession-back faculties__profession-back_hidden">Курсы по анализу данных подойдут всем,
            кому интересно работать с цифрами и аналитикой.
            В эту область входят несколько направлений: предобработка и анализ,
            Data Science и Data Engineering,
            хранение и управление данными.
            Вы можете освоить новую специальность с нуля или
            углубить знания в сфере работы с данными.
                  <button className="faculties__button-back" alt="К вакансиям">К вакансиям</button>
            </li>
            <li className="faculties__profession-front">Дизайн
                  <button className="faculties__button-front" alt="Изображение стрелки"/>
            </li>
            <li className="faculties__profession-back faculties__profession-back_hidden">Направление подойдёт как новичкам,
            так и практикующим профессионалам —
            у нас обучаются дизайнеры, UX-писатели и UX-исследователи.
            Учим работать с композицией, цветом, типографикой,
            текстом, исследованиями так, чтобы приносить пользу и пользователям, и бизнесу.
            Процесс строится на постоянной практике: реальные проекты или максимально
            приближенные к ним учебные задачи,
            ТЗ, дедлайны и развёрнутая обратная связь от специалистов.
                  <button className="faculties__button-back" alt="К вакансиям">К вакансиям</button>
            </li>
            <li className="faculties__profession-front">Маркетинг
                  <button className="faculties__button-front" alt="Изображение стрелки"/>
            </li>
            <li className="faculties__profession-back faculties__profession-back_hidden">Направление для всех, кто хочет учиться маркетингу в интернете.
            На курсах мы учим запускать рекламу и управлять рекламными кампаниями.
            Знакомим с анализом бренда, рассказываем про seo-оптимизацию и email-маркетинг,
            обучаем на реальных примерах из бизнеса. В процессе вас поддержат наставники,
            кураторы и ревьюеры — практикующие специалисты с большим опытом работы в сфере.
                  <button className="faculties__button-back" alt="К вакансиям">К вакансиям</button>
            </li>
            <li className="faculties__profession-front">Менеджмент
                  <button className="faculties__button-front" alt="Изображение стрелки"/>
            </li>
            <li className="faculties__profession-back faculties__profession-back_hidden">Направление для тех, кто начинает или продолжает
            свой путь в сфере управления — людьми, проектами, продуктами, ресурсами.
            В обучении мы используем проблемно-ориентированный подход, силу данных
            и научно обоснованные методики. Курсы позволяют устроиться на работу в IT
            сразу после окончания учёбы или получить новые навыки для развития в текущей профессии.
                  <button className="faculties__button-back" alt="К вакансиям">К вакансиям</button>
            </li>
         </ul>
      </section>
  );
}

export default Faculties;
