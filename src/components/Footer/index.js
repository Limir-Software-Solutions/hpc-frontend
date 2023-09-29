import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
                    © 2023 HPC. Todos los derechos reservados.
                </Typography>
                <IconButton color="inherit" aria-label="Facebook">
                    <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="Twitter">
                    <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="LinkedIn">
                    <LinkedInIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Footer;