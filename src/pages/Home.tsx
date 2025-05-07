import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';

const Home: React.FC = () => {
    const featuredCourses = [
        {
            id: 1,
            title: 'Introduction to Programming',
            description: 'Learn the basics of programming using Python.',
        },
        {
            id: 2,
            title: 'Web Development Bootcamp',
            description: 'Become a full-stack web developer in 12 weeks.',
        },
        {
            id: 3,
            title: 'Data Science Essentials',
            description: 'Understand the fundamentals of data science and analytics.',
        },
    ];

    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Our E-Learning Platform</h1>
                <h2>Featured Courses</h2>
                <div className="course-list">
                    {featuredCourses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;