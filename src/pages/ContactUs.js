import React, {  } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';



const ContactUs = () => {
 

  return (
    
        <>
          <Box
            sx={{
              position: 'relative',
              height: 300,
              overflow: 'hidden',
              mb: 3,
              backgroundImage: `url('/th (2).jpeg')`, // Replace with your cover image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'inherit',
                backgroundSize: 'inherit',
                backgroundPosition: 'inherit',
                filter: 'blur(15px)',
                zIndex: 0,
                opacity: 0.6
              }
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                zIndex: 1
              }}
            >
              Contact Us for More Details
            </Typography>
          </Box>
          
          <Box sx={{ p: 4 }}>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {/* Text Section */}
              <Grid item xs={12} md={6}>
                <Typography variant="h4" gutterBottom>
                  Get in Touch with Us
                </Typography>
                <Typography variant="body1" paragraph>
                At Basalai, we believe in making the admission process as smooth and straightforward as possible. Our dedicated team is here to guide you through every step, ensuring you have all the information you need to make an informed decision. Whether you are interested in our programs, need assistance with the application process, or have specific questions about enrollment, we're here to help.

To get started, feel free to reach out to us via the contact methods provided below. Our team will provide you with detailed information about our admission criteria, deadlines, and required documentation. We are committed to providing personalized support to ensure that your admission experience is seamless and efficient. Don’t hesitate to get in touch; we look forward to assisting you on your journey with Basalai!

                </Typography>
                <Typography variant="body1" paragraph>
                  Our team is committed to providing prompt and helpful responses to all inquiries. Don’t hesitate to get in touch, and we'll do our best to assist you as quickly as possible.
                </Typography>
                {/* Contact Buttons */}
              
              </Grid>

              {/* Image Section */}
              <Grid item xs={12} md={6}>
                <Card sx={{ maxWidth: 500 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/annoyed-young-businessman-speaking-phone-office-background_176420-5244.avif" // Replace with your image URL in the public folder
                    alt="Contact Us"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      We're just a call or message away. Reach out to us for any inquiries or support.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

          
          </Box>
        </>
     
  );
};

export default ContactUs;
