import React, { useState } from 'react';
import { Avatar, Dialog, DialogTitle } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const AuthAvatar = () => {
    const auth = useAuth();
    const { cerrarSesionAuth } = useAuth()
    const name = auth.auth.name;

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        localStorage.removeItem('token')
    }

    const firstLetter = name.charAt(0);

    // Estado para controlar la apertura y cierre del diálogo
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* Avatar con evento onClick */}
            <Avatar sx={{ bgcolor: "#0000FF", cursor: 'pointer' }} onClick={handleOpen}>
                {firstLetter}
            </Avatar>

            {/* Diálogo */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Deseas Cerrar sesion?</DialogTitle>
                <button
                    type={'button'}
                    className={'text-white text-sm bg-sky-600 p-3 uppercase font-bold hover:bg-sky-500'}
                    onClick={handleCerrarSesion}
                >
                    Cerrar Sesion
                </button>
            </Dialog>
        </>
    );
};

export default AuthAvatar;
