import React from 'react';
import {  Toolbar, Typography, Button, Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [openSubmenu, setOpenSubmenu] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleSubmenuOpen = (menuItem) => setOpenSubmenu(menuItem);
  const handleSubmenuClose = () => setOpenSubmenu(null);

  const handleItemHover = (item) => setActiveItem(item);
  const handleItemLeave = () => setActiveItem(null);

  const subMenuStyles = {
    position: 'absolute',
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '5px',
    width:200,
    zIndex: 1,
  };

  const submenuListStyles = {
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '90%',
    width:200,
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '5px',
    zIndex: 2,
  };

  return (
    <Box position="static" sx={{ backgroundColor: 'white', color: 'black', position: 'relative' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
          Balasai
        </Typography>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <Button component={Link} to="/" sx={{ color: 'black' }}>Home</Button>
          <Button component={Link} to="/placement" sx={{ color: 'black' }}>Placement</Button>
          <Button component={Link} to="/admission" sx={{ color: 'black' }}>Admission</Button>

          {/* Courses Button */}
          <Box
            onMouseEnter={() => handleSubmenuOpen('courses')}
            onMouseLeave={handleSubmenuClose}
            sx={{ position: 'relative' }}
          >
            <Button sx={{ color: 'black' }}>Courses</Button>
            {openSubmenu === 'courses' && (
              <Box sx={{ ...subMenuStyles }}>

  <List>
    <ListItem
      onMouseEnter={() => handleItemHover('science')}
      onMouseLeave={handleItemLeave}
      sx={{
        position: 'relative',
        '&:hover': {
          backgroundColor: '#007BFF',
        },
      }}
    >
      <ListItemText    style={{ color: 'black', textDecoration: 'none' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = 'black')}>
       
          Science and Computer
        
      </ListItemText>
      {activeItem === 'science' && (
        <Box sx={{ ...submenuListStyles }}>
          <List>
            <ListItem
              sx={{
                '&:hover': {
                  backgroundColor: '#007BFF',
                },
              }}
            >
              <Link
                to="/courses/science-computer/data-science"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                BSc. Data Science
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/science-computer/software-engineering"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                BSc. Software Engineering
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/science-computer/ai"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                BSc. Artificial Intelligence
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/science-computer/data-analytics"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                BSc. Data Analytics
              </Link>
            </ListItem>
          </List>
        </Box>
      )}
    </ListItem>

    <ListItem
      onMouseEnter={() => handleItemHover('life-science')}
      onMouseLeave={handleItemLeave}
      sx={{
        position: 'relative',
        '&:hover': {
          backgroundColor: '#007BFF',
        },
      }}
    >
      <ListItemText    style={{ color: 'black', textDecoration: 'none' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = 'black')}>
      
          Life Science Course
      
      </ListItemText>
      {activeItem === 'life-science' && (
        <Box sx={{ ...submenuListStyles }}>
          <List>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/life-science/biology"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Biology
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/life-science/botany"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Botany
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/life-science/zoology"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Zoology
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/life-science/genetics"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Genetics
              </Link>
            </ListItem>
          </List>
        </Box>
      )}
    </ListItem>

    <ListItem
      onMouseEnter={() => handleItemHover('professional')}
      onMouseLeave={handleItemLeave}
      sx={{
        position: 'relative',
        '&:hover': {
          backgroundColor: '#007BFF',
        },
      }}
    >
      <ListItemText  style={{ color: 'black', textDecoration: 'none' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = 'black')}>
                 Professional Course
          </ListItemText>
      {activeItem === 'professional' && (
        <Box sx={{ ...submenuListStyles }}>
          <List>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/professional/business-management"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Business Management
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/professional/accounting"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Accounting
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/professional/marketing"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Marketing
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/professional/hr"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                Human Resources
              </Link>
            </ListItem>
          </List>
        </Box>
      )}
    </ListItem>

    <ListItem
      onMouseEnter={() => handleItemHover('pg')}
      onMouseLeave={handleItemLeave}
      sx={{
        position: 'relative',
        '&:hover': {
          backgroundColor: '#007BFF',
        },
      }}
    >
      <ListItemText style={{ color: 'black', textDecoration: 'none' }}
          onMouseEnter={(e) => (e.target.style.color = 'white')}
          onMouseLeave={(e) => (e.target.style.color = 'black')}>
      
          PG Course
     
      </ListItemText>
      {activeItem === 'pg' && (
        <Box sx={{ ...submenuListStyles }}>
          <List>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/pg/mba"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                MBA
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/pg/mtech"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                MTech
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/pg/msc"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                MSc
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/pg/ma"
                style={{ color: 'black', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.target.style.color = 'white')}
                onMouseLeave={(e) => (e.target.style.color = 'black')}
              >
                MA
              </Link>
            </ListItem>
          </List>
        </Box>
      )}
    </ListItem>
  </List>
</Box>

           
            )}
          </Box>

          <Button component={Link} to="/contact-us" sx={{ color: 'black' }}>Contact Us</Button>
        </Box>
      </Toolbar>
    </Box>
  );
};

export default Navbar;
