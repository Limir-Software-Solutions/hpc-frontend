import React, { useState } from 'react';
import Error from '../../components/Error';
import axios from 'axios';
import { Hidden } from '@mui/material';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ([name, email, password, repeatPassword].includes('')) {
            setError({
                msg: 'Todos los campos son obligatorios',
                error: true,
            });
            return;
        }

        try {
            const { data } = await axios.post(
                `http://localhost:8081/users`,
                { name, email, password, repeatPassword },
            );
            setError({});
            localStorage.setItem('token', data.token);
            // setAuth(data);
            // navigate('/proyectos')
        } catch (e) {
            setError({
                msg: e.response.data.message,
                error: true,
            });
        }
    };

    const { msg } = error;

    return (
        <>
            <div className="flex flex-col md:flex-row h-screen">
                <Hidden smDown>
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
                        <h1 className={'text-3xl font-bold text-center mb-6 uppercase'}>
                            Crear Cuenta
                        </h1>

                        {msg && <Error alerta={error} />}

                        <div className={'my-12'}>
                            <label
                                className={'uppercase text-gray-600 block text-xl font-bold'}
                                htmlFor={'name'}
                            >
                                Nombre
                            </label>
                            <input
                                type={'text'}
                                placeholder={'Escribe tu nombre'}
                                className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className={'my-12'}>
                            <label
                                className={'uppercase text-gray-600 block text-xl font-bold'}
                                htmlFor={'email'}
                            >
                                Correo
                            </label>
                            <input
                                type={'email'}
                                placeholder={'Escribe tu email'}
                                className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className={'my-4'}>
                            <label
                                className={'uppercase text-gray-600 block text-xl font-bold'}
                                htmlFor={'password'}
                            >
                                Contraseña
                            </label>
                            <input
                                type={'password'}
                                placeholder={'Escribe la contraseña'}
                                className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className={'my-4'}>
                            <label
                                className={'uppercase text-gray-600 block text-xl font-bold'}
                                htmlFor={'repeatPassword'}
                            >
                                Repite la Contraseña
                            </label>
                            <input
                                type={'password'}
                                placeholder={'Repite la contrasena'}
                                className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                            />
                        </div>
                        <a
                            href={'/forgot-password'}
                            className="text-sky-600 hover:text-sky-500 transition-colors"
                        >
                            Haz olvidado tu <span>Contraseña?</span>
                        </a>

                        <input
                            type={'submit'}
                            value={'Crear Cuenta'}
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

export default Signup;
