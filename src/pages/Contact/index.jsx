import React, { useState } from 'react';
import Error from '../../components/Error';
import axios from 'axios';
import { Hidden } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if ([email, name, message].includes('')) {
          setError({
            msg: 'Todos los campos son obligatorios',
            error: true,
          });
          return;
        }
        if (name.includes('@')) {
            setError({
                msg: 'Tu nombre ta malo',
                error: true,
            });
            return;
        }
        if (message.length < 10) {
            setError({
                msg: 'El largo del mensaje debe ser mayor a 10 caracteres',
                error: true,
            });
            return;
        }



        console.log("god")
        /*try {
          const { data } = await axios.post(
              `http://localhost:8081/users/contact`,
              { email, name, message }
          );
          setError({});
    
          localStorage.setItem('token', data.authToken);
          setAuth(data);
          navigate('/')
          window.location.reload()
        } catch (e) {
          setError({
            msg: 'El usuario no existe',
            error: true,
          });
        } */
      };
      const { msg } = error;
        setTimeout(() => {setError({})}, 3500);
      return (
        <>
        <div className="py-20 bg-sky-700" style={{ position: "relative" }}>
            <h1 className="text-3xl text-white font-medium text-left my-2 ml-20 uppercase ">
                Contacto
            </h1>
        </div>
        <Container>
        <div className="flex flex-row -mb-96 justify-between mt-28 h-screen">
            <div className="flex flex-col w-full mx-auto">
                <h1 className="text-2xl font-normal text-left my-2 ">
                No dude en contactarnos si tiene alguna consulta o propuesta respecto a los servicios o actividades del NLHPC.
                </h1>
                <div className="flex justify-around flex-row  ">
                    <div className="flex flex-col  ">
                        <p className=" font-bold text-left my-2 uppercase ">
                            Email</p>
                        <p>contacto.hpc@uoh.cl</p>
                    </div>
                    <div className="flex flex-col  ">
                        <p className=" font-bold text-left my-2 uppercase ">
                            Oficina</p>
                        <p>Universidad de O'Higgins </p>
                        <p>Av. Libertador Bernardo O'Higgins, </p>
                        <p>Rancagua </p>
                        
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center w-full">

                <h1 className="text-2xl font-normal px-6 text-left my-2 ">

                    A continuación, rellena los campos para ponerte en contacto con nosotros:

                </h1>

            <form

                className={' bg-white rounded-lg px-6 w-full md:w-10/12 '}
                onSubmit={handleSubmit}>
                <div className="flex justify-around flex-row ">
                    <div className="flex flex-col  ">

                        <input
                            type={'text'}
                            placeholder={'Nombre'}
                            className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        
                    </div>
                    <input
                        type={'email'}
                        placeholder={'Escribe tu correo'}
                        className={'w-full ml-3 mt-3 p-3 border rounded-lg bg-gray-100'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                        <textarea name="Text1" cols="40" rows="5"
                            type={'text'}
                            placeholder={'Mensaje'}
                            className={'w-full mt-3 p-3 border rounded-lg bg-gray-100'}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <input
                            type={'submit'}
                            value={'Enviar'}
                            className={'bg-sky-700 w-full py-3 mt-6 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'}
                        />
                        
            </form>
                {msg && <Error alerta={error} />}
        </div>
        </div>
    </Container>
    
    <iframe className="w-full h-screen justify-center"
          src="https://maps.google.com/maps?q=universidad%20de%20O'Higgins&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          
        />
        </>
        



      );










};

export default Contact;