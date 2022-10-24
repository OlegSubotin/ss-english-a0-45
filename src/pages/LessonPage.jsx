import React from 'react';
import { Routes, Route } from "react-router-dom";
import LessonBar from "../components/LessonBar/";
import VocabularyPage from './VocabularyPage';

const LessonPage = () => {
  return (
    <div>
      <LessonBar />
      <Routes>
        <Route path='lesson/vocabulary' element={<VocabularyPage />} />
      </Routes>
    </div>
  )
}

export default LessonPage