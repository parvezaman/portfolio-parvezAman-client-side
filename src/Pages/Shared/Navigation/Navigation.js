import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { BsFillCameraFill } from "react-icons/bs";
import { RiLoginBoxFill } from "react-icons/ri";
import { RiLogoutBoxFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { MdAddAPhoto } from "react-icons/md";
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navigation = () => {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: "white",
            textDecoration: "none"
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        ourNavLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        },
        mobileNavItem: {
            textAlign: 'center',
            textDecoration: 'none',
            color: 'black'
        }
    })
    const { navItem, navIcon, navItemContainer, ourNavLogo, mobileNavItem } = useStyle();

    const [state, setState] = React.useState(false);


    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"

        >
            <List>
                <ListItem button>
                    
                    <ListItemText>
                        <Link className={mobileNavItem} to='/'>Home</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    
                    <ListItemText>
                        <Link className={mobileNavItem} to='/resume'>Resume</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    
                    <ListItemText>
                        <Link className={mobileNavItem} to='/contact'>Contact Me</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    
                    <ListItemText>
                        <Link className={mobileNavItem} to='/about'>About Me</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem button>
                    
                    <ListItemText>
                        <Link className={mobileNavItem} to='/blogs'>My Blogs</Link>
                    </ListItemText>
                </ListItem>
                <Divider />

            </List>

        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={ourNavLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <img className="rounded-circle" style={{width:'35px'}} src="https://i.ibb.co/3dykCd4/121573997-2706873479572031-3140401387895271813-o-removebg-preview-1.jpg" alt="" /> PravezAman...
                        </Typography>

                        <Box className={navItemContainer}>
                            <NavLink className={navItem} to="/home" ><Button color="inherit" sx={{ fontSize: '13px' }}>Home</Button></NavLink>
                            <NavLink className={navItem} to="/resume"><Button sx={{ fontSize: '13px' }} color="inherit">Resume</Button></NavLink>
                            <NavLink className={navItem} to="/contact"><Button sx={{ fontSize: '13px' }} color="inherit">Contact Me</Button></NavLink>
                            <NavLink className={navItem} to="/about"><Button sx={{ fontSize: '13px' }} color="inherit">About Me</Button></NavLink>
                            <NavLink className={navItem} to="/blogs"><Button sx={{ fontSize: '13px' }} color="inherit">My Blogs</Button></NavLink>


                            {/* {
                                user?.email ?
                                    <>
                                        <NavLink className={navItem} to='/dashboard'>
                                            <Button sx={{ fontSize: '13px' }} color="inherit">Dashboard</Button>
                                        </NavLink>

                                        <Button onClick={logOut} sx={{ fontSize: '13px' }} color="inherit">Logout {user.displayName}</Button>
                                    </>
                                    :
                                    <NavLink className={navItem} to='/login'>
                                        <Button sx={{ fontSize: '13px' }} color="inherit">Login</Button>
                                    </NavLink>
                            } */}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;