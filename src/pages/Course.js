// src/pages/Course.js

// src/pages/Course.js
import React from 'react';
import { useParams } from 'react-router-dom';



const courseData = {
  'data-science': {
    title: 'BSc. Data Science',
    description: 'Learn data science with a comprehensive curriculum covering data analysis, machine learning, and more.'
  },
  'software-engineering': {
    title: 'BSc. Software Engineering',
    description: 'Explore software development, design patterns, and engineering practices.'
  },
  'ai': {
    title: 'BSc. Artificial Intelligence',
    description: 'Dive into artificial intelligence, including neural networks, deep learning, and AI applications.'
  },
  'data-analytics': {
    title: 'BSc. Data Analytics',
    description: 'Master data analytics techniques and tools to interpret complex data sets.'
  },
  // Add more course entries here...
};

const Course = () => {
  const { courseType } = useParams(); // Extract the course type from the URL

  const course = courseData[courseType];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default Course;
