import React from 'react';
import Header from './Header/Header';
import Intro from './Intro/Intro';
import Roles from './Roles/Roles';
import Tasks from './Tasks/Tasks';
import Expert from './Expert/Expert';
import Faculties from './Faculties/Faculties';
import Footer from './Footer/Footer';
import Schedule from './Schedule/Schedule';
import Request from './Request/Request';
import Quiz from './Quiz/Quiz';
import Teachers from './Teachers/Teachers';
import './app.css';
import Vacancies from './Vacancies/Vacancies';
import PopupWithForm from './PopupWithForm/PopupWithForm';

function App() {
  return (
    <div className="inner">
      <Header />
      <Intro />
      <Tasks />
      <Quiz />
      <Expert />
      <Faculties />
      <Roles />
      <Schedule />
      <Teachers />
      <Vacancies />
      <Request />
      <PopupWithForm />
      <Footer />
    </div>
  );
}

export default App;
