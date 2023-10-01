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
      <div className="bg-gray-800">
          <Container>
              <div className="mx-auto">
                  <div className="flex items-center justify-between p-4">
                      <h6 className="text-white text-lg font-bold items-center">HPC</h6>
                      <nav className="flex space-x-10 items-center">
                          <a href="/" className="text-white">Inicio</a>
                          <a href="/" className="text-white">Acerca de</a>
                          <a href="/" className="text-white">Servicios</a>
                          <a href="/" className="text-white">Noticias</a>
                          <a href="/" className="text-white">Contacto</a>
                          <LoginButton />
                      </nav>
                  </div>
              </div>
          </Container>
      </div>

    );
}

export default Header;