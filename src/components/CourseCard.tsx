import React from 'react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
    id: string;
    title: string;
    description: string;
    link: string;
    image: string;
    instructor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, link, image, instructor }) => {
    return (
        <div className="course-card">
            <img src={image} alt={title} className="course-image" />
            <div className="course-content">
                <h3 className="course-title">{title}</h3>
                <p className="course-instructor">By {instructor}</p>
                <p className="course-description">{description}</p>
                <Link to={link} className="course-link">View Curriculum</Link>
            </div>
        </div>
    );
};

export default CourseCard;