import React, { useState } from 'react';
import Error from '../../components/Error';
import axios from 'axios';
import { Hidden } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes('')) {
      setError({
        msg: 'Todos los campos son obligatorios',
        error: true,
      });
      return;
    }

    try {
      const { data } = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/login`,
          { email, password }
      );
      setError({});
      localStorage.setItem('token', data.token);
      // setAuth(data);
      // navigate('/proyectos')
    } catch (e) {
      setError({
        msg: 'El usuario no existe',
        error: true,
      });
    }
  };

  const { msg } = error;

    return (
<<<<<<<<< Temporary merge branch 1
        <Grid container component="main" style={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                style={{
                    backgroundImage: 'url(https://images.adsttc.com/media/images/61f3/16c3/c675/1930/e90d/9058/slideshow/1-aerea-ok.jpg?1643321063)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                        t.palette.mode === 'light'
                            ? t.palette.grey[50]
                            : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
=========
        <>
          <div
            className="flex flex-row justify-around items-center h-screen"
          >
            <img
                src="https://www.mundodeportivo.com/alfabeta/hero/2023/05/hollow-knight.1683709273.8012.jpg?width=768&aspect_ratio=16:9&format=nowebp"
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
                Iniciar Sesion
              </h1>

              {msg && <Error alerta={error} />}

              <div className={'my-12'}>
                <label
                    className={'uppercase text-gray-600 block text-xl font-bold'}
                    htmlFor={'email'}
                >
                  Email
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
                  Password
                </label>
                <input
                    type={'password'}
                    placeholder={'Escribe la contrasena'}
                    className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <a
                  href={'/forgot-password'}
                  className="text-sky-600 hover:text-sky-500 transition-colors"
              >
                Haz olvidado tu <span>Contrasena?</span>
              </a>

              <input
                  type={'submit'}
                  value={'Iniciar Sesion'}
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

export default Login;
