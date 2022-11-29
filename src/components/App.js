import React, { useRef } from 'react';
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
  const quiz = useRef(null);
  const vacancies = useRef(null);
  const tasks = useRef(null);

  const navButtonHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="inner">
      <Header
      onRedirectButton={navButtonHandler}
      vacancies={vacancies}
      tasks={tasks}/>
      <Intro onRedirectButton={navButtonHandler} quiz={quiz} />
      <Tasks componentRef={tasks}/>
      <Quiz componentRef={quiz} />
      <Expert />
      <Faculties />
      <Roles />
      <Schedule />
      <Teachers />
      <Vacancies componentRef={vacancies}/>
      <Request />
      <PopupWithForm />
      <Footer />
    </div>
  );
}

export default App;
