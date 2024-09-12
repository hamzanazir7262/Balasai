import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';

export default function Placement() {
  const navigate = useNavigate();
  const user2024 = [
    { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
    { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
    { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
    { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
    { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
    // Add more user profiles here
  ];
  
  // Initial data
  const data = {
    2022: [
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
    ],
    2023: [
      { imgSrc: '/t_500x300 (3).jpeg', number: 12, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 25, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 54 , user2024},
      { imgSrc: '/t_500x300 (3).jpeg', number: 54, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 54, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 15, user2024 },
    ],
    2024: [
      { imgSrc: '/t_500x300 (3).jpeg', number: 67, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 45, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 23, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
      { imgSrc: '/t_500x300 (3).jpeg', number: 5, user2024 },
    ],
  };


  // State to manage the selected year
  const [selectedYear, setSelectedYear] = useState('2024');

  // Handle year click
  const handleYearClick = (year) => {
    setSelectedYear(year);
  };

 
  const handleImageClick = (userProfiles) => {
    // Navigate to /list and pass props (imgSrc, number, userProfiles)
    navigate('/user-list', { state: {userProfiles} });
  };

  return (
    <div>
      {/* Four blocks in a row for year selection */}
      <Grid container spacing={2} sx={{ padding: '20px' }}>
        {['2022', '2023', '2024'].map((year) => (
          <Grid item xs={12} sm={6} md={4} key={year}>
            <Box
              onClick={() => handleYearClick(year)}
              sx={{
                textAlign: 'center',
                padding: { xs: '20px', sm: '40px' },
                border: '3px solid blue',
                color: selectedYear === year ? 'white' : 'blue', // Highlight selected year
                backgroundColor: selectedYear === year ? 'blue' : 'transparent',
                fontSize: '20px',
                margin: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {year}
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Image banner */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          backgroundImage: 'url(/Blog-banner-image_001.jpg)', // Update with the path to your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          mb: 4,
        }}
      >
        {/* Placeholder for any text or heading */}
      </Box>

      {/* Section with rows (each row contains an image and number) */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {data[selectedYear].map((row, index) => (
          <Grid container spacing={2} sx={{ width: '60%' }} key={index}>
            {/* Image column */}
            <Grid
              item
              xs={6}
              sx={{
                borderRight: '1px solid black',
                borderBottom: '1px solid black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={row.imgSrc}
                alt="Description"
                style={{ width: '100px', height: '100px', padding: 20, cursor: 'pointer' }} // Adjust the image size as needed
                onClick={() => handleImageClick(row.user2024)}
              />
            </Grid>
            {/* Number column */}
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottom: '1px solid black',
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 'bold', color:"blue" }}>
                {row.number}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
}
