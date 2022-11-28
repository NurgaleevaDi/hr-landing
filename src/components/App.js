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
import Vacancies from './Vacancies/Vacancies';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Tasks />
      <Quiz />
      <Expert />
      <Faculties />
      <Roles />
      <Schedule />
      <Vacancies />
      <Request />
      <Footer />
    </>
  );
}

export default App;
