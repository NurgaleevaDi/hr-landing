import React from 'react';
import datas from './datas';
import Faculty from './Faculty/Faculty';

function Faculties() {
  return (
      <section className="faculties">
         <h2 className="faculties__title">Наши факультеты</h2>
         <ul className="faculties__grid">
          {datas.map((item, i) => <Faculty key={i} {...item} />)}
         </ul>
      </section>
  );
}

export default Faculties;
