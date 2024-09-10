// src/pages/Course.js
import React from 'react';
import { useParams,Link  } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';

// Sample course data
const courseData = {
  'data-science': {
    title: 'BSc. Data Science',
    description: 'The Intermediate of Science (F.Sc Pre-Medical) programme aims to provide students a multifaceted exposure and education related to medical field. After successfully completing the programme students can further pursue their career in fields of Medicine, Physiotherapy Surgery, Pharmacy, Agriculture, Microbiology, Molecular Genetics, Cloning, Food Technology, Biochemistry, Environmental, Biology, DVM, Biochemistry, Biotechnology, Bioinformatics, Bacteriology, Embryology, and Petrifaction.',
  },
  'software-engineering': {
    title: 'BSc. Software Engineering',
    description: 'Explore software development, design patterns, and engineering practices.',
  },
  'ai': {
    title: 'BSc. Artificial Intelligence',
    description: 'Dive into artificial intelligence, including neural networks, deep learning, and AI applications.',
  },
  'data-analytics': {
    title: 'BSc. Data Analytics',
    description: 'Master data analytics techniques and tools to interpret complex data sets.',
  },
  'biology': {
    title: 'BSc. Biology',
    description: 'Study the science of life and living organisms, including their structure, function, growth, and evolution.',
  },
  'botany': {
    title: 'BSc. Botany',
    description: 'Explore the study of plants, their processes, and their ecological significance.',
  },
  'zoology': {
    title: 'BSc. Zoology',
    description: 'Learn about animal biology, including physiology, evolution, and ecology.',
  },
  'genetics': {
    title: 'BSc. Genetics',
    description: 'Understand the principles of heredity and the role of genes in living organisms.',
  },
  'business-management': {
    title: 'Business Management',
    description: 'Gain insights into business strategies, management practices, and organizational behavior.',
  },
  'accounting': {
    title: 'Accounting',
    description: 'Learn about financial reporting, auditing, and the principles of accounting.',
  },
  'marketing': {
    title: 'Marketing',
    description: 'Explore market analysis, consumer behavior, and marketing strategies.',
  },
  'hr': {
    title: 'Human Resources',
    description: 'Study the principles of managing people in organizations, including recruitment and employee relations.',
  },
  'mba': {
    title: 'MBA',
    description: 'Pursue a Master of Business Administration with a focus on advanced business management and leadership skills.',
  },
  'mtech': {
    title: 'MTech',
    description: 'Advance your technical expertise with a Master of Technology in a specialized field.',
  },
  'msc': {
    title: 'MSc',
    description: 'Obtain a Master of Science degree in a variety of scientific disciplines.',
  },
  'ma': {
    title: 'MA',
    description: 'Pursue a Master of Arts in fields such as humanities, social sciences, or fine arts.',
  }
  // Add more courses here if needed...
};

const Course = () => {
  const { courseType } = useParams(); // Extract course type from URL
  const course = courseData[courseType];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <>
      {/* Full-width Image Section */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          backgroundImage: `url("/th (2).jpeg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        {/* Optional overlay for readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: -2
          }}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{ zIndex: 2, color: 'white', fontWeight: 'bold' }}
        >
          {course.title}
        </Typography>
      </Box>

      {/* Introduction Section */}
      <Box
        sx={{
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            Introduction
          </Typography>
          <Typography variant="h2" component="h2" sx={{ marginBottom: '40px',fontWeight: 'bold' , lineHeight: '1.6', color:"#FFB001" }}>
            {course.title}
          </Typography>

          <Typography variant="body1" component="p" sx={{ marginBottom: '20px', fontSize: '1.1rem', lineHeight: '1.6', textAlign:"left" }}>
            {course.description}
          </Typography>
           {/* Apply Now Button */}
           <Link to="/admission" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" size="large">
              Apply Now
            </Button>
          </Link>
        </Container>
      </Box>

    
    </>
  );
};

export default Course;
