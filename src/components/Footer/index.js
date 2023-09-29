import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Footer = () => {
    
    return (
        <>
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Typography variant="body1" color="inherit" sx={{ flexGrow: 1 }}>
                    HPC UOH High Performance Computer
                </Typography>
                <List dense sx={{ display: 'flex', flexDirection: 'column',marginRight:"1400px" }}>
                        <ListItem>
                            <ListItemText primary="Nosotros"
                                        primaryTypographyProps={{ color: '#61dafb' }} />
                            
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Acerca de" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Equipo" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Publicaciones" />
                        </ListItem>
                    </List>
                    <List dense sx={{ display: 'flex', flexDirection: 'column',marginRight:"1300px" }}>
                        <ListItem>
                            <ListItemText primary="Más"
                                        primaryTypographyProps={{ color: '#61dafb' }} />
                            
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Infraestructura" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Noticias" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Visitas" />
                        </ListItem>
                    </List>    
                
            </Toolbar>
        </AppBar>
        
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
        </>
    );
}

export default Footer;