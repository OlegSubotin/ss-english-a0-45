import React from 'react';
import { NavLink } from 'react-router-dom';

const LessonBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="lesson/vocabulary"> Vocabulary </NavLink>
        <NavLink to="/grammar"> grammar </NavLink>
        <NavLink to="/reading"> reading </NavLink>
        <NavLink to="/speaking"> Vocabulary </NavLink>
        <NavLink to="/hometask"> hometask </NavLink>
      </nav>
    </header>
  );
};

export default LessonBar