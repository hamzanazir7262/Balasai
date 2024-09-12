import React from 'react';
import { Drawer, IconButton, Toolbar, Typography, Button, Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
    backgroundColor: '#B40808',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '5px',
    width: 200,
    zIndex: 3,
  };
  const DsubMenuStyles = {
   paddingLeft:5,
    // backgroundColor: '#B40808',
    // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    width: 200,
  
  };
  const submenuListStyles = {
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '90%',
    width: 200,
    backgroundColor: '#B40808',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '5px',
    zIndex: 2,
  };

  return (
    <Box sx={{ flexGrow: 1 , backgroundColor:"#B40808"  }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
          Balasai
        </Typography>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon  sx={{color:"white"}} />
        </IconButton>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center', position: 'relative' }}>
          <Button component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
          <Button component={Link} to="/placement" sx={{ color: 'white' }}>Placement</Button>
          <Button component={Link} to="/admission" sx={{ color: 'white' }}>Admission</Button>
          {/* Courses Button */}
          <Box
            onMouseEnter={() => handleSubmenuOpen('courses')}
            onMouseLeave={handleSubmenuClose}
            sx={{ position: 'relative' }}
          >
            <Button sx={{ color: 'white' }}>Courses <ExpandMoreIcon /></Button>
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
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        <ListItemText style={{ color: 'black' }}>Science and Computer</ListItemText>
        {activeItem === 'science' && (
          <Box sx={{ ...submenuListStyles }}>
            <List>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/science-computer/data-science"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  BSc. Data Science
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/science-computer/software-engineering"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  BSc. Software Engineering
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/science-computer/data-analytics"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  BSc. Data Analytics
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
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

      {/* Life Science */}
      <ListItem
        onMouseEnter={() => handleItemHover('life-science')}
        onMouseLeave={handleItemLeave}
        sx={{
          position: 'relative',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        <ListItemText style={{ color: 'black' }}>Life Science Course</ListItemText>
        {activeItem === 'life-science' && (
          <Box sx={{ ...submenuListStyles }}>
            <List>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/life-science/biology"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Biology
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/life-science/botany"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Botany
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/life-science/zoology"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Zoology
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
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

      {/* Professional */}
      <ListItem
        onMouseEnter={() => handleItemHover('professional')}
        onMouseLeave={handleItemLeave}
        sx={{
          position: 'relative',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        <ListItemText style={{ color: 'black' }}>Professional Course</ListItemText>
        {activeItem === 'professional' && (
          <Box sx={{ ...submenuListStyles }}>
            <List>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/professional/business-management"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Business Management
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/professional/accounting"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Accounting
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/professional/marketing"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Marketing
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
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

      {/* PG Courses */}
      <ListItem
        onMouseEnter={() => handleItemHover('pg')}
        onMouseLeave={handleItemLeave}
        sx={{
          position: 'relative',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        <ListItemText style={{ color: 'black' }}>PG Course</ListItemText>
        {activeItem === 'pg' && (
          <Box sx={{ ...submenuListStyles }}>
            <List>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/pg/mba"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  MBA
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/pg/mtech"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  MTech
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
                <Link
                  to="/courses/pg/msc"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  MSc
                </Link>
              </ListItem>
              <ListItem sx={{ '&:hover': { backgroundColor: 'white', color: 'black' } }}>
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
          <Button component={Link} to="/contact-us" sx={{ color: 'white' }}>Contact Us</Button>
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
  <Box sx={{ ...DsubMenuStyles }}>
    <List>
      {/* Science and Computer */}
      <ListItem button component={Link} to="/courses/science-computer/data-science" onClick={handleDrawerClose}>
        <ListItemText primary="-BSc. Data Science"  sx={{ color: 'black' }}/>
      </ListItem>
      <ListItem button component={Link} to="/courses/science-computer/software-engineering" onClick={handleDrawerClose}>
        <ListItemText primary="-BSc. Software Engineering" sx={{ color: 'black' }} />
      </ListItem>
      <ListItem button component={Link} to="/courses/science-computer/data-analytics" onClick={handleDrawerClose}>
        <ListItemText primary="-BSc. Data Analytics" sx={{ color: 'black' }} />
      </ListItem>
      <ListItem button component={Link} to="/courses/science-computer/ai" onClick={handleDrawerClose}>
        <ListItemText primary="-BSc. Artificial Intelligence"  sx={{ color: 'black' }}/>
      </ListItem>

      {/* Life Science */}
      <ListItem button component={Link} to="/courses/life-science/biology" onClick={handleDrawerClose}>
        <ListItemText primary="-Biology" sx={{ color: 'black' }} />
      </ListItem>
      <ListItem button component={Link} to="/courses/life-science/botany" onClick={handleDrawerClose}>
        <ListItemText primary="-Botany" sx={{ color: 'black' }}/>
      </ListItem>
      <ListItem button component={Link} to="/courses/life-science/zoology" onClick={handleDrawerClose}>
        <ListItemText primary="-Zoology" sx={{ color: 'black' }}/>
      </ListItem>
      <ListItem button component={Link} to="/courses/life-science/genetics" onClick={handleDrawerClose}>
        <ListItemText primary="-Genetics" sx={{ color: 'black' }} />
      </ListItem>

      {/* Professional Course */}
      <ListItem button component={Link} to="/courses/professional/business-management" onClick={handleDrawerClose}>
        <ListItemText primary="-Business Management" sx={{ color: 'black' }} />
      </ListItem>
      <ListItem button component={Link} to="/courses/professional/accounting" onClick={handleDrawerClose}>
        <ListItemText primary="-Accounting" sx={{ color: 'black' }}/>
      </ListItem>
      <ListItem button component={Link} to="/courses/professional/marketing" onClick={handleDrawerClose}>
        <ListItemText primary="-Marketing" sx={{ color: 'black' }}/>
      </ListItem>
      <ListItem button component={Link} to="/courses/professional/hr" onClick={handleDrawerClose}>
        <ListItemText primary="-Human Resources" sx={{ color: 'black' }} />
      </ListItem>

      {/* PG Course */}
      <ListItem button component={Link} to="/courses/pg/mba" onClick={handleDrawerClose}>
        <ListItemText primary="-MBA" sx={{ color: 'black' }}/>
      </ListItem>
      <ListItem button component={Link} to="/courses/pg/mtech" onClick={handleDrawerClose}>
        <ListItemText primary="-MTech" sx={{ color: 'black' }}/>
      </ListItem>
      <ListItem button component={Link} to="/courses/pg/msc" onClick={handleDrawerClose}>
        <ListItemText primary="-MSc" sx={{ color: 'black' }}/>
      </ListItem>
      <ListItem button component={Link} to="/courses/pg/ma" onClick={handleDrawerClose}>
        <ListItemText primary="-MA" sx={{ color: 'black' }}/>
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
