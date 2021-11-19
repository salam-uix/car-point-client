import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logout } = useAuth();
    const theme = useTheme();
    const useStyle = makeStyles({
        naveItem: {
            color: '#fff',
            textDecoration: 'none',
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
        },
        navContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right',
            },
        }
    })

    const { naveItem, navIcon, navContainer, navLogo } = useStyle();

    //Drawer
    const [state, setState] = React.useState(false);



    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText >
                        <Link to="/">Home</Link>
                    </ListItemText>
                    <ListItemText >
                        <Link to="/products">Products</Link>
                    </ListItemText>
                    <ListItemText >
                        <Link to="/services">Services</Link>
                    </ListItemText>
                </ListItem>
            </List>
            <Divider />
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
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Car Point
                        </Typography>

                        <Box className={navContainer}>
                            <Link className={naveItem} to="/"><Button color="inherit">Home</Button></Link>
                            <NavLink className={naveItem} to="/products"><Button color="inherit">Products</Button></NavLink>
                            <Button color="inherit">Sign in as: {user?.displayName}</Button>
                            {user?.email ?
                                <Box>
                                    <NavLink className={naveItem} to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink className={naveItem} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                            }

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