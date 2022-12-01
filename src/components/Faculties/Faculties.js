import React from 'react';
import datas from './datas';
import Faculty from './Faculty/Faculty';

// eslint-disable-next-line react/prop-types
function Faculties({ navButtonHandler, vacancies }) {
  return (
      <section className="faculties">
         <h2 className="faculties__title">Наши факультеты</h2>
         <div className="wrapper">
         <ul className="faculties__grid">
          {datas.map((item, i) => <Faculty
          navButtonHandler={navButtonHandler} vacancies={vacancies} key={i} {...item} />)}
         </ul>
         </div>
      </section>
  );
}

export default Faculties;
