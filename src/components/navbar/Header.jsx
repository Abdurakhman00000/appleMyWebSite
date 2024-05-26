import React, { useEffect, useState } from 'react';
import AdminPanel from '../admin/AdminPanel';
import AppleIcon from '@mui/icons-material/Apple';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, IconButton, Tooltip } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../context/AuthContext';
import { useProduct } from '../../context/ProductContext';




const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);


  const navigate = useNavigate();
  const {user} = useAuth();


  const { searcheProduct, readProduct } = useProduct();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if(!search) {
      readProduct();
    }
  }, [search])

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return (
        <>
               <div id="header">
      <div class="container">
        <div class="header">
            <AdminPanel />

          <Link to='/home'>
          <IconButton>
            <AppleIcon />
          </IconButton>
          </Link>

          <Link to='/list'>
          <p>Store</p>
          </Link>
          
         <Link to='/mac'> <p>Mac</p></Link>
         <Link to='/ipad'> <p>iPad</p></Link>
          <p>Watch</p>
          <p>Vision</p>
          <p>AirPods</p>
          <p>TV & Home</p>
          <p>Entertaiment</p>
          <p>Accessories</p>
          <p>Support</p>
          <input onChange={(e) => searcheProduct(e.target.value)} type="text" placeholder='Search'/>

        <Link to='/card'>
        <IconButton>
            <WorkOutlineIcon/>
          </IconButton>
        </Link>



            {
              user ? (
                <Tooltip title={user.displayName}>
                   <Avatar alt={user.displayName} src={user.photoURL} />
                </Tooltip>
              ) : (
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              )
            }

            {
              user ? (
                <Menu 
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem  onClick={() => {handleClose(); navigate('/LogIn')} }>Sign Up</MenuItem>
                <MenuItem  onClick={() => {handleClose(); navigate('/SignIn')}}>Sign In</MenuItem>
                <MenuItem>Log Out</MenuItem>
              </Menu>
              ) : (
                <Menu 
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem  onClick={() => {handleClose(); navigate('/LogIn')} }>Sign Up</MenuItem>
                <MenuItem  onClick={() => {handleClose(); navigate('/SignIn')}}>Sign In</MenuItem>
                <MenuItem>Log Out</MenuItem>
              </Menu>
              )
            }

        </div>
      </div>
    </div>
        </>
    );
};

export default Header;