import React from 'react';
import axios from "axios";
import { useState, useEffect, createContext } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    console.log("auth", auth)

    useEffect(() => {
        const autenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if (!token) {
                setCargando(false)
                return
            }

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const data = await axios.get(`http://localhost:8081/users/me`, config);
                console.log("data", data)
                setAuth(data.data)
            } catch (e) {
                setAuth({})
            } finally {
                setCargando(false)
            }
        }
        autenticarUsuario();
    }, [])

    const cerrarSesionAuth = () => {
        setAuth({})
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesionAuth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthProvider
};

export default AuthContext;