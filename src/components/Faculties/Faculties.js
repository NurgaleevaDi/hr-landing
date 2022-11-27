import facultiesIco from '../../images/facultiesIco.svg'

function Faculties() {
   return (
      <section className="faculties">
         <h2 className="faculties__title">Наши факультеты</h2>
         <ul className="faculties__grid">
            <li className="faculties__profession">Программирование
               <a className="faculties__link" href="" rel="noreferrer">
                  <img className='faculties__link-icon' src={facultiesIco} alt="Изображение стрелки"/>
               </a>
            </li>
            <li className="faculties__profession">Анализ данных
               <a className="faculties__link" href="" rel="noreferrer">
                  <img className='faculties__link-icon' src={facultiesIco} alt="Изображение стрелки"/>
               </a>
            </li>
            <li className="faculties__profession">Дизайн
               <a className="faculties__link" href="" rel="noreferrer">
                  <img className='faculties__link-icon' src={facultiesIco} alt="Изображение стрелки"/>
               </a>
            </li>
            <li className="faculties__profession">Маркетинг
               <a className="faculties__link" href="" rel="noreferrer">
                  <img className='faculties__link-icon' src={facultiesIco} alt="Изображение стрелки"/>
               </a>
            </li>
            <li className="faculties__profession">Менеджмент
               <a className="faculties__link" href="" rel="noreferrer">
                  <img className='faculties__link-icon' src={facultiesIco} alt="Изображение стрелки"/>
               </a>
            </li>
         </ul>
      </section>
   )
}

export default Faculties;