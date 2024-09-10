import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Link  } from 'react-router-dom';
import { Star as StarIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '400px', // Adjust height as needed
          backgroundImage: 'url(/indian-university-students-DDGBAJ.jpg)', // Update with the path to your image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white', // Text color for contrast
          textAlign: 'center',
          mb: 4 // Margin bottom for spacing
        }}
      >
        {/* <Typography variant="h3" component="h1">
          Welcome to Our Platform
        </Typography> */}
      </Box>
      
      <Box
        sx={{
          padding: '20px',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: 'left', mb: 4 }}
        >
          WHY CHOOSE US
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '20px',
                textAlign: 'left',
                height: '100%'
              }}
            >
              <Typography variant="body1" component="p">
                Since its inception in 1998, aditya degree college, Kakinada has risen to the top position, stood at the forefront in the field of degree and P.G. education, set new landmarks in terms of university ranks, pratibha awards, campus selections and ranks in the P.G entrance examinations, created a new history in the realm of degree and P.G education, become an idol to all other colleges, achieved the most prestigious NAAC B++ accreditation and achieved the most enviable position in the society.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '20px',
                textAlign: 'center',
                height: '100%',
                backgroundImage: 'url(/Why-Choose-us.jpeg)', // Update with the path to your image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'grey.300', // Fallback color
                color: 'white',
                minHeight: '300px' // Define a minimum height
              }}
            >
              {/* Optionally add some overlay content here if needed */}
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          padding: '20px',
          marginBottom: '40px',
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ textAlign: 'left', mb: 4 }}
        >
          OUR MISSION
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '20px',
                textAlign: 'center',
                height: '100%',
                backgroundImage: 'url(/download.jpg)', // Update with the path to your image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'grey.300', // Fallback color
                color: 'white',
                minHeight: '300px' // Define a minimum height
              }}
            >
              {/* Optionally add some overlay content here if needed */}
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '20px',
                textAlign: 'left',
                height: '100%'
              }}
            >
              <Typography variant="body1" component="p">
                Since its inception in 1998, aditya degree college, Kakinada has risen to the top position, stood at the forefront in the field of degree and P.G. education, set new landmarks in terms of university ranks, pratibha awards, campus selections and ranks in the P.G entrance examinations, created a new history in the realm of degree and P.G education, become an idol to all other colleges, achieved the most prestigious NAAC B++ accreditation and achieved the most enviable position in the society.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
  sx={{
    width: '100%',
    height: 'auto', // Adjust height as needed
    backgroundImage: 'url(/Aspire-Aug1-1400x1050.jpg)', // Update with the path to your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Text color for contrast
    textAlign: 'center',
    mb: 4, // Margin bottom for spacing
    position: 'relative',
    overflow: 'hidden',
  }}
>
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay for better text readability
      zIndex: 1,
    }}
  />
  <Typography
    variant="h4"
    component="h2"
    sx={{
      mb: 2,
      zIndex: 2,
      paddingTop:3,
      position: 'relative',
    }}
  >
   Your Future Starts <span style={{color:"#DFAD3E"}}>Here!</span>
  </Typography>
  <Typography
    variant="body1"
    component="p"
    sx={{
      zIndex: 2,
      position: 'relative',
      padding:3
    }}
  >
   Your future begins at Aspire Group of Colleges, where we empower you to reach new heights. Join us in shaping a brighter tomorrow through education that inspires, transforms, and leads to success.
  </Typography>
  <Box
    sx={{
      padding: '20px',
      width: '100%',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      zIndex: 2,
      position: 'relative',
    }}
  >
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            padding: '20px',
            color: 'white',
           
          }}
        >
          <Typography variant="h2" component="h3">
            250,000
          </Typography>
          <Typography variant="body1">
            Happy Students
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            padding: '20px',
            color: 'white',
       
          }}
        >
          <Typography variant="h2" component="h3">
            3000<span style={{color:"#DFAD3E"}}>+</span>
          </Typography>
          <Typography variant="body1">
            Alumni
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            padding: '20px',
            color: 'white',
            
          }}
        >
          <Typography variant="h2" component="h3">
            30<span style={{color:"#DFAD3E"}}>+</span>
          </Typography>
          <Typography variant="body1">
            Staff
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box
          sx={{
            padding: '20px',
            color: 'white',
          
          }}
        >
          <Typography variant="h2" component="h3">
            15<span style={{color:"#DFAD3E"}}>+</span>
          </Typography>
          <Typography variant="body1">
          years
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Box>
</Box>

<Box
        sx={{
          padding: '40px 20px',
          mb: 4
        }}
      >
        <Grid container spacing={4}>
          {/* Text Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '15px',
              
                
              }}
            >
              <Typography variant="h6" component="h2" sx={{ mb: 3 }}>
                Testonomals
              </Typography>
              <Typography variant="h3" component="h2" sx={{ mb: 3 ,  textAlign: 'center',}}>
                What People Say About the College
              </Typography>
            </Box>
          </Grid>

          {/* Image and Stars Column */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '20px',
                textAlign: 'center',
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
              }}
            >
              <Box
                sx={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  margin: '0 auto',
                  mb: 2,
                }}
              >
                <img
                  src="/th.jpeg" // Update with the path to your image
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
              <Typography variant="h6" textAlign="left" width="70%">“Strong curriculum, well-structured programs,
              and up-to-date study materials” </Typography>
              <Box sx={{ mb: 2 }}>
                {[...Array(5)].map((_, index) => (
                  <StarIcon key={index} sx={{ color: 'gold', fontSize: '1.5rem' }} />
                ))}
              </Box>
              <Link to="/karishna" style={{ textDecoration: 'none' }}>
             <Box sx={{display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center"}}>
             <IconButton>
                <ArrowForwardIcon />
              </IconButton>
              <Typography variant="body1" component="p" sx={{ textAlign:"center" }}>
                Harikrishna
              </Typography>
             </Box>
            </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
     
      {/* Placement Partners Section */}
      <Box
        sx={{
          width: '100%',
          textAlign: 'center',
          my: 9, // Margin top and bottom
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
            mb: 4, // Margin bottom for spacing
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '2px',
              backgroundColor: 'grey',
              position: 'absolute',
              top: '50%',
              left: 0,
              zIndex: 1,
            }}
          />
          <Typography
            variant="h4"
            component="h2"
            sx={{
              backgroundColor: 'white',
              padding: '0 20px',
              zIndex: 2, // Ensure the text stays above the line
              color: '#333',
            }}
          >
            Placement Partners
          </Typography>
        </Box>

        {/* Images in one row */}
        <Grid container spacing={2} justifyContent="center">
          {['/t_500x300.jpeg', '/th (1).jpeg', '/t_500x300 (1).jpeg', '/t_500x300 (2).jpeg'].map((image, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                }}
              >
                <img
                  src={image}
                  alt={`Placement Partner ${index + 1}`}
                  style={{
                    maxWidth: '150px', // Adjust max width to fit your design
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Home;
