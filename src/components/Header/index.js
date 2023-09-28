import React, { useEffect, useState } from "react";
import {
    AppBar,
    Toolbar,
    ButtonGroup,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Container,
    Typography,
    Box,
    Button,
    Link,
} from "@mui/material";
import LoginButton from "../LoginButton";

const Header = () => {
    return (
        <AppBar position="static" sx={{
            backgroundColor: '#FFFFFF',
        }}>
            <Toolbar>
                <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }} >
                    HPC
                </Typography>
                <Button
                    color="primary"
                    href={'/'}
                >
                    Inicio
                </Button>
                <Button color="primary">Acerca de</Button>
                <Button color="primary">Servicios</Button>
                <Button color="primary">Noticias</Button>
                <Button color="primary">Contacto</Button>
                <LoginButton />

            </Toolbar>
        </AppBar>
    );
}

export default Header;