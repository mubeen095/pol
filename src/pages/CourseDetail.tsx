import React from 'react';
import { useParams, Link } from 'react-router-dom';

const courseCurriculums: Record<string, { title: string; curriculum: string[]; instructor: string }> = {
  "uiux-bootcamp": {
    title: "UI/UX Design Bootcamp",
    instructor: "Jane Doe",
    curriculum: [
      "Introduction to UI/UX",
      "Design Thinking Process",
      "Wireframing & Prototyping",
      "User Research & Testing",
      "Portfolio Project"
    ]
  },
  "fullstack-webdev": {
    title: "Full Stack Web Development",
    instructor: "John Smith",
    curriculum: [
      "HTML, CSS, JavaScript Basics",
      "React & Redux",
      "Node.js & Express",
      "MongoDB & Database Design",
      "Deployment & DevOps"
    ]
  },
  "digital-marketing": {
    title: "Digital Marketing Mastery",
    instructor: "Priya Patel",
    curriculum: [
      "SEO Fundamentals",
      "Content Marketing",
      "Social Media Strategy",
      "Paid Advertising",
      "Analytics & Reporting"
    ]
  }
};

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const course = courseCurriculums[id || ""];

  if (!course) return <div>Course not found.</div>;

  return (
    <div className="course-detail" style={{ maxWidth: 700, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 12 }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#1a73e8' }}>← Back to Courses</Link>
      <h2>{course.title}</h2>
      <p><b>Instructor:</b> {course.instructor}</p>
      <h3>Curriculum</h3>
      <ul>
        {course.curriculum.map((item, idx) => (
          <li key={idx} style={{ marginBottom: 8 }}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;