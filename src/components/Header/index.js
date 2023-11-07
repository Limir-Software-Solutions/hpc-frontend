import React, {useState} from "react";
import {
    Container,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Hidden,
    Menu,
    MenuItem,
    MenuList
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useAuth from "../../hooks/useAuth";
import AuthAvatar from "../AuthAvatar";


const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null); // Estado para el anclaje del menú
    const auth = useAuth();

    console.log(auth.auth)
    const pathname = window.location.pathname;

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    //setTimeout(() => {handleClick({})}, 5000);

    return (
        <div className="bg-white">
            <Container>
                <div className="mx-auto">
                    <div className="flex items-center justify-between p-4">
                        <a href="/"> 
                                <img style={{maxWidth:"60px"}} src="static/images/Logouoh.png" alt="prueba"/>
                                </a>
                        <Hidden mdDown>
                            <nav className="hidden md:flex items-center text-black">
                                    <button
                                        onMouseOver={handleClick}
                                        aria-controls="simple-menu"
                                        aria-haspopup="true"
                                        style={{ background: "none", border: "none" }}
                                    >
                                        Acerca del HPC
                                    </button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose = {handleClose}

                                    >
                                        <a href="/AcercaDe">
                                            <MenuItem
                                                onClick={handleClose}>Acerca del HPC
                                            </MenuItem></a>
                                        <a href="/Infraestructura">
                                        <MenuItem

                                            onClick={handleClose}>Infraestructura

                                        </MenuItem></a>
                                        <a href="/Equipo">
                                        <MenuItem
                                            onClick={handleClose}>Equipo
                                        </MenuItem></a>

                                    </Menu>


                                 <img className="mx-0.5 my-0.5 "src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNgGFDAysDAEIlHPhKqBgwKGRgYKrEoKsImjq4Yl2YUSbyKYKAYimkMAAtZByDUNaADAAAAAElFTkSuQmCC"/>

                                <a href="/Noticias" className="hover:text-gray-500 mx-5"
                                style={{
                                    color: pathname === '/noticias' ? '#2563EB' : 'black'
                                }}>Noticias</a>
                                <a href="/" className="hover:text-gray-500 mx-5 "
                                style={{
                                    color: pathname === '/publicaciones' ? '#2563EB' : 'black'
                                }}>Publicaciones</a>
                                <a href="/Contact" className="hover:text-gray-500 mx-5"
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
                        <ListItem>
                            <a href="/AcercaDe">
                                <ListItemText primary="A cerca del HPC"></ListItemText>
                            </a>
                        </ListItem>
                        <ListItem>
                            <a href="/Noticias"><ListItemText primary="Noticias"></ListItemText> </a>
                        </ListItem>
                        <ListItem>
                            <a href="/"><ListItemText primary="Publicaciones"></ListItemText> </a>
                        </ListItem>
                        <ListItem>
                            <a href="/Contact"><ListItemText primary="Contacto"></ListItemText> </a>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default Header;
