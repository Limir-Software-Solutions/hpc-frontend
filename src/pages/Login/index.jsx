import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({})
  const handleSubmit = async e => {
    e.preventDefault();

    if([email, password].includes('')) {
      setError({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/login`,
        {email, password} );
      setError({})
      localStorage.setItem('token', data.token);
      // setAuth(data);
      // navigate('/proyectos')
    } catch (e) {
      setError({
        msg: e.response.data.msg,
        error: true
      })
    }

  }

    return (
        <>
          <div
            className="flex flex-row justify-around items-center h-screen"
          >
            <img
              src="https://www.mundodeportivo.com/alfabeta/hero/2023/05/hollow-knight.1683709273.8012.jpg?width=768&aspect_ratio=16:9&format=nowebp"
              alt="hola"
              className="h-screen w-1/2 object-cover"
            />
            <div
              className="flex flex-col items-center w-1/2"
            >
              <form
                className={'my-10 bg-white rounded-lg px-36 py-8 w-full'}
                onSubmit={handleSubmit}
              >
                <h1
                  className={'text-3xl font-bold text-center mb-6 uppercase'}
                >
                  Iniciar Sesion
                </h1>
                <div className={'my-12'}>
                  <label className={'uppercase text-gray-600 block text-xl font-bold'} htmlFor={'email'}>Email</label>
                  <input
                    type={'email'}
                    placeholder={'Escribe tu email'}
                    className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className={'mt-12 mb-6'}>
                  <label className={'uppercase text-gray-600 block text-xl font-bold'} htmlFor={'password'}>Password</label>
                  <input
                    type={'password'}
                    placeholder={'Escribe la contrasena'}
                    className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <a
                  href={'/forgot-password'}
                  className="text-sky-600 hover:text-sky-500 transition-colors"
                >Haz olvidado tu <span>Contrasena?</span></a>

                <input
                  type={'submit'}
                  value={'Iniciar Sesion'}
                  className={'bg-sky-700 w-full py-3 mb-5 mt-4 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'}
                />
              </form>
            </div>
          </div>
        </>
    );
}

export default Login;
