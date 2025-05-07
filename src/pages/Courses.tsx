import React from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  {
    id: "uiux-bootcamp",
    title: "UI/UX Design Bootcamp",
    description: "Learn design from industry experts with hands-on projects.",
    link: "/courses/uiux-bootcamp",
    image: "https://source.unsplash.com/320x180/?design,ui",
    instructor: "Jane Doe"
  },
  {
    id: "fullstack-webdev",
    title: "Full Stack Web Development",
    description: "Master MERN stack and build real-world applications.",
    link: "/courses/fullstack-webdev",
    image: "https://source.unsplash.com/320x180/?code,web",
    instructor: "John Smith"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Mastery",
    description: "Grow your brand with proven digital marketing strategies.",
    link: "/courses/digital-marketing",
    image: "https://source.unsplash.com/320x180/?marketing,digital",
    instructor: "Priya Patel"
  }
];

const Courses: React.FC = () => (
  <div className="courses-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
    {courses.map((course) => (
      <CourseCard key={course.id} {...course} />
    ))}
  </div>
);

export default Courses;