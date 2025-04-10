import React from "react";
import { AppBar, Toolbar, IconButton, Typography, InputBase } from "@mui/material";
import { IoMenu, IoNotificationsOutline, IoSearch, IoPersonCircle } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";

import { Box } from "@mui/material";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <AppBar 
      position="fixed"
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', height: '64px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton 
            color="inherit" 
            edge="start" 
            onClick={toggleSidebar} 
            sx={{ mr: 2 }}
          >
            <IoMenu size={24} />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ fontWeight: 'bold', }}>
            MedEx
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: '#f5f5f5', 
            borderRadius: '8px',
            padding: '6px 12px',
            width: '250px'
          }}>
            <InputBase
              placeholder="Search..."
              sx={{ width: '100%' }}
            />
              <IoSearch style={{ marginRight: '8px', color: '#757575' }} size={25} />
          </Box>

          <IconButton>
            
              <FaRegMessage size={20} />
            
          </IconButton>
          
          <IconButton>
            
              <IoNotificationsOutline size={24} />
            
          </IconButton>
        
          <IconButton>
            <IoPersonCircle size={28} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}