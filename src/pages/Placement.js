import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

export default function Placement() {
  // Data for rows (you can modify image paths and numbers as needed)
  const rows = [
    { imgSrc: '/t_500x300 (3).jpeg', number: 25 },
    { imgSrc: '/t_500x300 (3).jpeg', number: 25 },
    { imgSrc: '/t_500x300 (3).jpeg', number: 25 },
    { imgSrc: '/t_500x300 (3).jpeg', number: 25 },
    { imgSrc: '/t_500x300 (3).jpeg', number: 25 },
    { imgSrc: '/t_500x300 (3).jpeg', number: 25 },
    { imgSrc: '/t_500x300 (3).jpeg', number: 25 },
  ];

  return (
    <div>
      {/* Four blocks in a row */}
      <Grid container spacing={2} sx={{ padding: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: 'center',
              padding: { xs: '20px', sm: '40px' },
              border: '3px solid blue',
              color: 'blue',
              fontSize: '20px',
              margin: '5px',
              fontWeight: 'bold',
            }}
          >
            2022
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: 'center',
              padding: { xs: '20px', sm: '40px' },
              border: '3px solid blue',
              color: 'blue',
              fontSize: '20px',
              margin: '5px',
              fontWeight: 'bold',
            }}
          >
            2023
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: 'center',
              padding: { xs: '20px', sm: '40px' },
              border: '3px solid blue',
              color: 'blue',
              fontSize: '20px',
              margin: '5px',
              fontWeight: 'bold',
            }}
          >
            2024
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              textAlign: 'center',
              padding: { xs: '20px', sm: '40px' },
              border: '3px solid blue',
              color: 'blue',
              fontSize: '20px',
              margin: '5px',
              fontWeight: 'bold',
            }}
          >
            2025
          </Box>
        </Grid>
      </Grid>

      {/* Image banner */}
      <Box
        sx={{
          width: '100%',
          height: '400px',
          backgroundImage: 'url(/indian-university-students-DDGBAJ.jpg)', // Update with the path to your image
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

      {/* Section with 7 rows (each row contains an image and number 25) */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        {rows.map((row, index) => (
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
                style={{ width: '100px', height: '100px', padding: 20 }} // Adjust the image size as needed
              />
            </Grid>
            {/* Number 25 column */}
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
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                {row.number}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </div>
  );
}
