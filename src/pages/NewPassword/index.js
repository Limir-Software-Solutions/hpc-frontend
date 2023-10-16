import React, { useState } from 'react';
import axios from 'axios';
import Error from '../../components/Error';
import { Hidden } from '@mui/material';
import {useNavigate, useParams} from "react-router-dom";

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [alerta, setAlerta] = useState({});

    const params = useParams();
    const { token } = params

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                `https://services-hpc.onrender.com/users/newPassword/${token}`,
                { password }
            );

            console.log("data", data)

            setAlerta({
                msg: "Contraseña actualizada, inicia sesion",
                error: false,
            });
            navigate('/')
            window.location.reload()
        } catch (error) {
            setAlerta({
                msg: 'Token Expiro',
                error: true,
            });
        }
    };

    const { msg } = alerta;

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen">
                <Hidden smDown>
                    {/* La imagen solo se mostrará en pantallas mayores o iguales a `md` */}
                    <img
                        src="static/images/login.jpg"
                        alt="hola"
                        className="h-screen w-full md:w-1/2 object-cover"
                    />
                </Hidden>
                <div className="flex flex-col justify-center items-center w-full md:w-1/2">
                    <form
                        className={'my-10 bg-white rounded-lg px-6 py-8 w-full md:w-10/12 mx-auto'}
                        onSubmit={handleSubmit}
                    >
                        <h1 className={'text-3xl font-bold text-center mb-2 uppercase'}>
                            Ingresa tu nueva contraseña
                        </h1>

                        {msg && <Error alerta={alerta} />}

                        <div className={'my-4'}>
                            <label
                                className={'uppercase text-gray-600 block text-xl font-bold'}
                                htmlFor={'password'}
                            >
                                Contrasena
                            </label>
                            <input
                                type={'password'}
                                placeholder={'Escribe tu contrasena'}
                                className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={'my-4'}>
                            <label
                                className={'uppercase text-gray-600 block text-xl font-bold'}
                                htmlFor={'newPassword'}
                            >
                                repite Contrasena
                            </label>
                            <input
                                type={'password'}
                                placeholder={'Escribe tu contrasena'}
                                className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <a
                            href={'/login'}
                            className="text-sky-600 hover:text-sky-500 transition-colors"
                        >
                            Tienes cuenta? Inicia sesion
                        </a>

                        <input
                            type={'submit'}
                            value={'Recuperar Contraseña'}
                            className={
                                'bg-sky-700 w-full py-3 mt-6 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
                            }
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default NewPassword;
