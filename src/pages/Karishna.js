import React, { useState } from 'react';
import { Box, Typography, Avatar, Button, Pagination } from '@mui/material';

// Sample user data
const userProfiles = [
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  { id: 1, name: 'Hari Krishna', group: 'BCA', lpa: '6 lakh', hallTicket: '13202525' },
  // Add more user profiles here
];

const itemsPerPage = 10;

export default function Karishna() {
  const [page, setPage] = useState(1);

  // Calculate the start and end index of the users to display
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProfiles = userProfiles.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < Math.ceil(userProfiles.length / itemsPerPage)) {
      setPage(page + 1);
    }
  };
  return (
    <Box sx={{ padding: 4, margin: 'auto', maxWidth: '1200px' }}>
      {/* Paragraph Section */}
      <Typography variant="body1" align="left" paragraph>
        That’s great to hear about the placement opportunities! If 20 members from Balasai Degree College have been placed at Google, it sounds like a significant achievement. Here are a few things you might want to consider or discuss related to this accomplishment:
      </Typography>

      {/* Profiles Section */}
      <Box sx={{ marginTop: 4,display:"flex",alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
        {currentProfiles.map((user) => (
          <Box key={user.id} sx={{ padding: 2, marginBottom: 2, display: 'flex', alignItems: 'center' }}>
            {/* User Picture */}
            <Avatar sx={{ width: 200, height: 200, marginRight: 2 }}>
            <img
                  src="/th.jpeg" // Update with the path to your image
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </Avatar>

            {/* User Details */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography  sx={{fontSize:30}}>{user.name}</Typography>
              <Typography sx={{fontSize:30}}><span style={{color:"#901B29"}}>Group:</span> {user.group}</Typography>
              <Typography sx={{fontSize:30}}>LPA: {user.lpa}</Typography>
              <Typography sx={{fontSize:30}}>Hall Ticket Number: {user.hallTicket}</Typography>
            </Box>
          </Box>
        ))}

       
      </Box>
    {/* Pagination */}
<Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right', marginTop: 2 }}>          <Button
            onClick={handlePrevious}
            disabled={page === 1}
            sx={{ 
              marginRight: 1,
              border: 'none',
              textTransform: 'none',
              backgroundColor: 'transparent',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            Previous
          </Button>
          <Pagination
            count={Math.ceil(userProfiles.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            siblingCount={1}
            boundaryCount={1}
            hideNextButton
            hidePrevButton
          />
          <Button
            onClick={handleNext}
            disabled={page === Math.ceil(userProfiles.length / itemsPerPage)}
            sx={{
              marginLeft: 1,
              border: 'none',
              textTransform: 'none',
              backgroundColor: 'transparent',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
              },
            }}
          >
            Next
          </Button>
        </Box>
    </Box>
  );
}
