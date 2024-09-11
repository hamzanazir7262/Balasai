import React from 'react';
import { Drawer, IconButton, Toolbar, Typography, Button, Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleDrawerOpen = () => setOpenDrawer(true);
  const handleDrawerClose = () => setOpenDrawer(false);

  const handleSubmenuOpen = (menuItem) => setOpenSubmenu(menuItem);
  const handleSubmenuClose = () => setOpenSubmenu(null);

  const handleItemHover = (item) => setActiveItem(item);
  const handleItemLeave = () => setActiveItem(null);

  const subMenuStyles = {
    position: 'absolute',
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '5px',
    width: 200,
    zIndex: 1,
  };

  const submenuListStyles = {
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '90%',
    width: 200,
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '5px',
    zIndex: 2,
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
          Balasai
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', position: 'relative' }}>
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
                  {/* Science and Computer */}
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
                    <ListItemText style={{ color: 'black' }}>Science and Computer</ListItemText>
                    {activeItem === 'science' && (
                      <Box sx={{ ...submenuListStyles }}>
                        <List>
                          <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
                            <Link to="/courses/science-computer/data-science" style={{ color: 'black', textDecoration: 'none' }}>
                              BSc. Data Science
                            </Link>
                          </ListItem>
                          <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/science-computer/software-engineering"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                BSc. Software Engineering
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/science-computer/data-analytics"
                style={{ color: 'black', textDecoration: 'none' }}
                
              >
                BSc. Data Analytics
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/science-computer/ai"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                BSc. Artificial Intelligence
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
          
          >
      
          Life Science Course
      
      </ListItemText>
      {activeItem === 'life-science' && (
        <Box sx={{ ...submenuListStyles }}>
          <List>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/life-science/biology"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                Biology
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/life-science/botany"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                Botany
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/life-science/zoology"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                Zoology
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/life-science/genetics"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
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
          
          >
                 Professional Course
          </ListItemText>
      {activeItem === 'professional' && (
        <Box sx={{ ...submenuListStyles }}>
          <List>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/professional/business-management"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                Business Management
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/professional/accounting"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                Accounting
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/professional/marketing"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                Marketing
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/professional/hr"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
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
          
          >
      
          PG Course
     
      </ListItemText>
      {activeItem === 'pg' && (
        <Box sx={{ ...submenuListStyles }}>
          <List>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/pg/mba"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                MBA
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/pg/mtech"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                MTech
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/pg/msc"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
              >
                MSc
              </Link>
            </ListItem>
            <ListItem sx={{ '&:hover': { backgroundColor: '#007BFF' } }}>
              <Link
                to="/courses/pg/ma"
                style={{ color: 'black', textDecoration: 'none' }}
                
                
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
      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
        <Box sx={{ width: 250, padding: 2 }}>
          <List>
            <ListItem button component={Link} to="/" onClick={handleDrawerClose}  sx={{ color: 'black' }}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/placement" onClick={handleDrawerClose}  sx={{ color: 'black' }}>
              <ListItemText primary="Placement" />
            </ListItem>
            <ListItem button component={Link} to="/admission" onClick={handleDrawerClose}  sx={{ color: 'black' }}>
              <ListItemText primary="Admission" />
            </ListItem>
            <ListItem button onClick={handleSubmenuOpen.bind(null, 'courses')}  sx={{ color: 'black' }}>
              <ListItemText primary="Courses" />
            </ListItem>
            {openSubmenu === 'courses' && (
  <Box sx={{ ...subMenuStyles }}>
    <List>
      {/* Science and Computer */}
      <ListItem button component={Link} to="/courses/science-computer/data-science" onClick={handleDrawerClose}>
        <ListItemText primary="BSc. Data Science" />
      </ListItem>
      <ListItem button component={Link} to="/courses/science-computer/software-engineering" onClick={handleDrawerClose}>
        <ListItemText primary="BSc. Software Engineering" />
      </ListItem>
      <ListItem button component={Link} to="/courses/science-computer/data-analytics" onClick={handleDrawerClose}>
        <ListItemText primary="BSc. Data Analytics" />
      </ListItem>
      <ListItem button component={Link} to="/courses/science-computer/ai" onClick={handleDrawerClose}>
        <ListItemText primary="BSc. Artificial Intelligence" />
      </ListItem>

      {/* Life Science */}
      <ListItem button component={Link} to="/courses/life-science/biology" onClick={handleDrawerClose}>
        <ListItemText primary="Biology" />
      </ListItem>
      <ListItem button component={Link} to="/courses/life-science/botany" onClick={handleDrawerClose}>
        <ListItemText primary="Botany" />
      </ListItem>
      <ListItem button component={Link} to="/courses/life-science/zoology" onClick={handleDrawerClose}>
        <ListItemText primary="Zoology" />
      </ListItem>
      <ListItem button component={Link} to="/courses/life-science/genetics" onClick={handleDrawerClose}>
        <ListItemText primary="Genetics" />
      </ListItem>

      {/* Professional Course */}
      <ListItem button component={Link} to="/courses/professional/business-management" onClick={handleDrawerClose}>
        <ListItemText primary="Business Management" />
      </ListItem>
      <ListItem button component={Link} to="/courses/professional/accounting" onClick={handleDrawerClose}>
        <ListItemText primary="Accounting" />
      </ListItem>
      <ListItem button component={Link} to="/courses/professional/marketing" onClick={handleDrawerClose}>
        <ListItemText primary="Marketing" />
      </ListItem>
      <ListItem button component={Link} to="/courses/professional/hr" onClick={handleDrawerClose}>
        <ListItemText primary="Human Resources" />
      </ListItem>

      {/* PG Course */}
      <ListItem button component={Link} to="/courses/pg/mba" onClick={handleDrawerClose}>
        <ListItemText primary="MBA" />
      </ListItem>
      <ListItem button component={Link} to="/courses/pg/mtech" onClick={handleDrawerClose}>
        <ListItemText primary="MTech" />
      </ListItem>
      <ListItem button component={Link} to="/courses/pg/msc" onClick={handleDrawerClose}>
        <ListItemText primary="MSc" />
      </ListItem>
      <ListItem button component={Link} to="/courses/pg/ma" onClick={handleDrawerClose}>
        <ListItemText primary="MA" />
      </ListItem>
    </List>
  </Box>
)}

            <ListItem button component={Link} to="/contact-us" onClick={handleDrawerClose}  sx={{ color: 'black' }}>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
