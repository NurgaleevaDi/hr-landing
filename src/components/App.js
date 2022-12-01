import React, { useRef, useState } from 'react';
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

function App() {
  const quiz = useRef(null);
  const vacancies = useRef(null);
  const tasks = useRef(null);
  const teachers = useRef(null);

  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false);

  const navButtonHandler = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const body = useRef();

  return (
    <div ref={body} className="inner">
      <Header
      onRedirectButton={navButtonHandler}
      vacancies={vacancies}
      tasks={tasks}
      teachers={teachers}/>
      <Intro onRedirectButton={navButtonHandler} quiz={quiz} />
      <Tasks
      onRedirectButton={navButtonHandler}
      vacancies={vacancies}
      componentRef={tasks}/>
      <Quiz onRedirectButton={navButtonHandler} componentRef={quiz} vacancies={vacancies}
      setIsPopupWithFormOpen={setIsPopupWithFormOpen} body={body} />
      <Expert />
      <Faculties />
      <Roles />
      <Schedule />
      <Vacancies componentRef={vacancies}/>
      <Teachers componentRef={teachers} body={body} />
      <Request isPopupWithFormOpen={isPopupWithFormOpen}
        setIsPopupWithFormOpen={setIsPopupWithFormOpen} />
      <Footer />
    </div>
  );
}

export default App;
