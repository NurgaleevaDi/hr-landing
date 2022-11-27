import facultiesIco from './images/facultiesIco.svg'

function Faculties() {
   return (
      <section className="faculties">
         <h2 className="faculties__title">Наши факультеты</h2>
         <ul className="faculties__grid">
            <li className="faculties__profession-front">Программирование
                  <img className='faculties__button-icon' src={facultiesIco} alt="Изображение стрелки"/>
            </li>

            <li className="faculties__profession-front">Анализ данных
                  <img className='faculties__button-icon' src={facultiesIco} alt="Изображение стрелки"/>
            </li>
            
            <li className="faculties__profession-front">Дизайн
                  <img className='faculties__button-icon' src={facultiesIco} alt="Изображение стрелки"/>
            </li>
            <li className="faculties__profession-front">Маркетинг
                  <img className='faculties__button-icon' src={facultiesIco} alt="Изображение стрелки"/>
            </li>
            <li className="faculties__profession-front">Менеджмент
                  <img className='faculties__button-icon' src={facultiesIco} alt="Изображение стрелки"/>
            </li>
         </ul>
      </section>
   )
}

export default Faculties;