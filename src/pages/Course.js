// src/pages/Course.js
import React from 'react';
import { useParams,Link  } from 'react-router-dom';
import { Box, Typography, Container, Button } from '@mui/material';

// Sample course data
const courseData = {
  'data-science': {
    title: 'BSc. Data Science',
    description: 'The BSc. Data Science program is designed to equip students with a strong foundation in statistical analysis, programming, and machine learning techniques. Students will learn how to extract, analyze, and interpret complex data sets to solve real-world problems. The course covers topics like data mining, predictive modeling, data visualization, big data technologies, and artificial intelligence applications. Graduates can pursue careers in industries like finance, healthcare, retail, and technology, where data-driven decision-making is crucial.',
  },
  'software-engineering': {
    title: 'BSc. Software Engineering',
    description: 'The BSc. Software Engineering program focuses on the principles of software design, development, and maintenance. Students will be trained in various programming languages, system design methodologies, and testing practices. Key subjects include object-oriented programming, software architecture, database management, cloud computing, and agile project management. Graduates will be well-prepared to enter the fast-paced tech industry, working in roles such as software developer, system analyst, or IT project manager, helping to build reliable, scalable, and efficient software solutions.',
  },
  'ai': {
    title: 'BSc. Artificial Intelligence',
    description: 'The BSc. Artificial Intelligence program delves into the theories and practices of creating intelligent machines and systems. Students will explore topics such as machine learning, neural networks, natural language processing, robotics, and AI ethics. This program prepares students to develop AI-driven solutions for various industries including healthcare, finance, automotive, and education. Graduates can pursue careers as AI engineers, data scientists, machine learning engineers, or AI researchers.',
  },
  'data-analytics': {
    title: 'BSc. Data Analytics',
    description: 'The BSc. Data Analytics program provides in-depth knowledge of data collection, processing, and analysis techniques. Students will learn to work with large datasets using tools like Python, R, SQL, and data visualization platforms. Topics include statistical analysis, predictive analytics, business intelligence, and data warehousing. Graduates will have the skills needed to turn data into actionable insights, making them valuable in roles such as business analyst, data analyst, or data scientist in industries like retail, finance, and healthcare.',
  },
  'biology': {
    title: 'BSc. Biology',
    description: 'The BSc. Biology program offers a comprehensive understanding of the biological sciences, including molecular biology, genetics, physiology, and ecology. Students will gain practical skills in laboratory research and fieldwork, studying the processes that govern life. Topics include evolution, environmental biology, and biotechnology applications. Graduates can pursue careers in research, healthcare, biotechnology, environmental management, and education, or continue their studies in medicine or advanced biological sciences.',
  },
  'botany': {
    title: 'BSc. Botany',
    description: 'The BSc. Botany program focuses on the study of plants, their biology, physiology, and ecological importance. Students will learn about plant anatomy, genetics, plant pathology, and the role of plants in ecosystems. The program also explores agricultural advancements, plant biotechnology, and sustainable environmental practices. Graduates can work in sectors such as agriculture, environmental consultancy, botanic gardens, or pursue careers in research and teaching.',
  },
  'zoology': {
    title: 'BSc. Zoology',
    description: 'The BSc. Zoology program studies animal biology, including their physiology, behavior, and ecological roles. Students will explore areas such as evolution, marine biology, entomology, and wildlife conservation. Practical experience through fieldwork and laboratory studies is emphasized. Graduates can pursue careers in wildlife conservation, veterinary science, research, or environmental consultancy, or continue their studies in animal behavior or marine biology.',
  },
  'genetics': {
    title: 'BSc. Genetics',
    description: 'The BSc. Genetics program explores the study of genes, heredity, and the variation of organisms. Students will learn about genetic engineering, molecular genetics, genomics, and biotechnology. The program equips graduates with skills to work in fields such as medical genetics, biotechnology, forensics, or agricultural genetics. Advanced studies in genetic counseling, genomics, or bioinformatics are also possible career paths.',
  },
  'business-management': {
    title: 'Business Management',
    description: 'The Business Management program teaches students about the principles of managing and leading organizations. Key areas include business strategy, marketing, operations management, human resource management, and financial planning. Students will develop leadership, analytical, and problem-solving skills necessary to manage businesses effectively. Graduates can pursue careers as business analysts, managers, consultants, or entrepreneurs across a wide range of industries.',
  },
  'accounting': {
    title: 'Accounting',
    description: 'The Accounting program provides comprehensive training in financial and management accounting, auditing, taxation, and financial reporting. Students will learn to interpret and analyze financial data, ensuring accurate financial reporting and compliance with regulations. This program prepares graduates for careers as accountants, auditors, financial analysts, or tax advisors, with opportunities to work in corporations, government, or consultancy firms.',
  },
  'marketing': {
    title: 'Marketing',
    description: 'The Marketing program teaches students how to analyze market trends, consumer behavior, and the strategies companies use to promote their products and services. Students will study advertising, digital marketing, brand management, market research, and product development. Graduates can work in roles such as marketing managers, brand strategists, market researchers, or digital marketing specialists in industries ranging from retail to technology.',
  },
  'hr': {
    title: 'Human Resources',
    description: 'The Human Resources program focuses on the management of people within organizations. Students will learn about recruitment, employee relations, training and development, labor laws, and performance management. This program prepares graduates to work as HR managers, recruiters, or employee relations specialists, ensuring that organizations maintain a motivated and skilled workforce.',
  },
  'mba': {
    title: 'MBA',
    description: 'The Master of Business Administration (MBA) program is designed for professionals seeking to advance their business knowledge and leadership skills. The curriculum covers strategic management, financial analysis, marketing, operations, and organizational behavior. An MBA opens doors to senior management roles, consulting, or entrepreneurship in various industries, and provides a strong foundation for leadership positions.',
  },
  'mtech': {
    title: 'MTech',
    description: 'The Master of Technology (MTech) program is aimed at developing advanced technical skills in a specialized field such as civil, mechanical, or electrical engineering. Students will engage in deep research, project work, and the practical application of engineering principles. Graduates are equipped for senior roles in technology-driven industries, research and development, or academia.',
  },
  'msc': {
    title: 'MSc',
    description: 'The Master of Science (MSc) program offers students advanced knowledge and research skills in a specific scientific field, such as physics, chemistry, or biology. The program includes theoretical coursework and practical lab experience. Graduates often pursue careers in research, academia, industry, or continue their education through a PhD program.',
  },
  'ma': {
    title: 'MA',
    description: 'The Master of Arts (MA) program provides in-depth study in fields such as humanities, social sciences, or fine arts. Students engage in critical analysis, research, and creative expression. This degree prepares graduates for careers in education, research, communications, and cultural industries, as well as further academic study.',
  }
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
