import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Courses />} />
    <Route path="/courses/:id" element={<CourseDetail />} />
  </Routes>
);

export default App;