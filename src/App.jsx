import { Routes, Route } from "react-router-dom";
import LessonPage from "pages/LessonPage";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
        <Route path='lesson/*' element={<LessonPage />} />
      </Routes>

    </div>
  );
};
