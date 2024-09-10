import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

export default function Admission() {
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
          ONLINE ADMISSION
        </Typography>
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          marginTop: 12,
          width: '80%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
         
          margin: '0 auto' // Center the Box horizontally
          
        }}
      >
        <Box sx={{backgroundColor:"#8BCEF0",marginTop:10, marginBottom:10, padding:5, borderRadius:2 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">
          Online Admission Form
        </Typography>

        <form style={{ width: '100%' }}>
          {/* Grid Layout for Form Fields */}
          <Grid container spacing={2}>
            {/* First Row: 4 Fields */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Full Name <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Father Name <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Relationship <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Parent/Guardian CNIC <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>

            {/* Second Row: 3 Fields */}
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Gender <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Select Course <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Student CNIC/B-Form <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>

            {/* Third Row: 3 Fields */}
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Date of Birth <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Parent/Guardian Contact No <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Student Contact No <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>

            {/* Fourth Row: 4 Fields */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Email <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  type="email"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Address <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Degree <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Passing Year <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>

            {/* Fifth Row: 4 Fields */}
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Group <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Total Marks <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Obtained Marks <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <Typography variant="body1" component="label" sx={{ display: 'block', marginBottom: 1 }}>
                  Board Roll Number <span style={{ color: 'red' }}>*</span>
                </Typography>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  size="small"
                  sx={{backgroundColor:"white", borderRadius:1}}
                />
              </Box>
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} >
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2}}>
                <Button
                  variant="contained"
                  sx={{background:"#000DFF"}}
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      </Box>
    </>
  );
}
