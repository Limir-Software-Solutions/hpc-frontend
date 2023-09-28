import React from 'react';
import Button from '@mui/material/Button';

const LoginButton = () => {
    return (
        <Button
            variant="contained"
            href={'/login'}
        >
            Iniciar sesión
        </Button>
    );
}

export default LoginButton;