import React from 'react';
import { Box, Typography, Link, Grid} from '@mui/material';
import { Facebook, Twitter, Instagram, Map as MapIcon, Email as EmailIcon, Phone as PhoneIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, backgroundColor: '#001C38', textAlign: 'center', color: 'white' }}>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Balasai</Typography>
          <Typography variant="body2">
            Aspire Group of Colleges is a renowned institution offering a wide range of technical courses, providing students with the necessary skills and knowledge to excel in their desired field.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
            <Link href="#" sx={{ color: 'white', marginRight: 2 }}>
              <Facebook />
            </Link>
            <Link href="#" sx={{ color: 'white', marginRight: 2 }}>
              <Twitter />
            </Link>
            <Link href="#" sx={{ color: 'white' }}>
              <Instagram />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ paddingBottom: 2 }}>Contact Us</Typography>
          <Box
            sx={{
              border: '1px solid white',
              borderRadius: '8px',
              padding: 1,
              marginBottom: 3,
              position: 'relative',
              '& svg': {
                position: 'absolute',
                top: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '4px',
                border: '2px solid #8B4513',
                color: '#8B4513',
              },
            }}
          >
            <Box sx={{ position: 'relative', paddingTop: '24px' }}>
              <EmailIcon />
              <Link href="mailto:info@college.edu.pk" sx={{ color: 'white', textDecoration: 'none', marginLeft: 1 }}>info@college.edu.pk</Link>
            </Box>
          </Box>
          <Box
            sx={{
              border: '1px solid white',
              borderRadius: '8px',
              padding: 1,
              marginBottom: 3,
              position: 'relative',
              '& svg': {
                position: 'absolute',
                top: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '4px',
                border: '2px solid #8B4513',
                color: '#8B4513',
              },
            }}
          >
            <Box sx={{ position: 'relative', paddingTop: '24px' }}>
              <PhoneIcon />
              <Link href="tel:+045839589358" sx={{ color: 'white', textDecoration: 'none', marginLeft: 1 }}>045839589358</Link>
            </Box>
          </Box>
          <Box
            sx={{
              border: '1px solid white',
              borderRadius: '8px',
              padding: 1,
              position: 'relative',
              '& svg': {
                position: 'absolute',
                top: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '4px',
                border: '2px solid #8B4513',
                color: '#8B4513',
              },
            }}
          >
            <Box sx={{ position: 'relative', paddingTop: '24px' }}>
              <MapIcon />
              aspire tower 4d pia colony vijayawada
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Our Location</Typography>
          <Box sx={{ marginTop: 2 }}>
            <iframe
              title="location"
              width="100%"
              height="200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0794342448637!2d-74.00021408465168!3d40.71406307933121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1b3a2c3ef1%3A0x407d0cc1a1d92e!2sStatue%20of%20Liberty!5e0!3m2!1sen!2sus!4v1623772184477!5m2!1sen!2sus"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              style={{ border: 0, borderRadius: '8px' }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            position: 'relative',
             // Margin bottom for spacing
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
             
            }}
          />
        </Box>
      <Typography variant="body2" sx={{ marginTop: 3 }}>
        © {new Date().getFullYear()} All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
