import React, {useState} from "react";
import {
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../hooks/useAuth";
import AuthAvatar from "../AuthAvatar";

const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const auth = useAuth();

    console.log(auth.auth)
    const pathname = window.location.pathname;

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className="bg-white">
            <Container>
                <div className="mx-auto">
                    <div className="flex items-center justify-between p-4">
                        <a href="/"> 
                                <img style={{maxWidth:"60px"}} src="static/images/Logouoh.png" alt="prueba"/>
                                </a>
                        <Hidden mdDown>
                            <nav className="hidden md:flex space-x-10 items-center text-black">
                                <a href="/" className="hover:text-gray-500"
                                style={{
                                    color: pathname === '/acerca' ? '#2563EB' : 'black'
                                }}>Acerca de</a>
                                <a href="/" className="hover:text-gray-500"
                                style={{
                                    color: pathname === '/servicios' ? '#2563EB' : 'black'
                                }}>Servicios</a>
                                <a href="/" className="hover:text-gray-500"
                                style={{
                                    color: pathname === '/noticias' ? '#2563EB' : 'black'
                                }}>Noticias</a>
                                <a href="/" className="hover:text-gray-500"
                                style={{
                                    color: pathname === '/publicaciones' ? '#2563EB' : 'black'
                                }}>Publicaciones</a>
                                <a href="/Contact" className="hover:text-gray-500"
                                style={{
                                    color: pathname === '/contacto' ? '#2563EB' : 'black'
                                }}>Contacto</a>

                            </nav>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                    </div>
                </div>
            </Container>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerClose}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div
                    role="presentation"
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}
                >
                    <List>
                        <ListItem
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Acerca de" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Servicios" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Noticias" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Contacto" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Publicaciones" />
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Header;
