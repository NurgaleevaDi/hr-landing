import React from 'react';
import './Empty.css';

const Empty = () => (
  <div className="empty__wrapper">
    <div className="empty__desc-container">
      <p className="empty__title">Таких предложений пока нет 😁
Чтобы посмотреть другие, поменяйте роль или направление</p>
      <p className="empty__text">Чтобы следить за новыми карьерными возможностями,
      подпишитесь на наш телеграмм и узнавайте о новостях первыми!</p>
      <a target="_blank" href="https://t.me/practicum_experts" className="empty__subscribe-btn" rel="noreferrer">
        <span className="empty__span-accent">Следить за предложениями</span>
        <div className="empty__svg"></div>
      </a>
    </div>
    <div className="empty__img"></div>
  </div>
);

export default Empty;
