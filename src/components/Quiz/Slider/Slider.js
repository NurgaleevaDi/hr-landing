import { React } from 'react';
import Card from './Card/Card';
import './Slider.css';
import cardsList from './datas';

const Slider = () => (<ul className='slider' >
  {cardsList.map((text, i) => <Card key={i} num={i} text={text} />)}
</ul>);

export default Slider;
