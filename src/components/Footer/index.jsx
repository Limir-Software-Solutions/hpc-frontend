import React from 'react';
import {Container} from '@mui/material';

const Footer = () => {
    return (
      <footer className="py-8 bg-black">
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            className="flex flex-col"
          >
            <h1
              className="text-4xl font-bold text-white"
            >
              HPC
            </h1>
            <h2
              className="text-2xl font-bold text-white"
            >
              <img style={{maxWidth:"190px"}} src="static/images/logo3.png" alt="prueba"/>
            </h2>
          </div>

          <div
            className="flex flex-row justify-around w-1/2"
          >
            <ul className="list-unstyled text-white">
              <li>
                <a className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Nosotros</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Acerca del HPC</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Equipo</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Publicaciones</a>
              </li>
            </ul>
            <ul className="list-unstyled text-white">
              <li>
                <a className="text-blue-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Más</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Infraestructura</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Noticias</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/">Contacto</a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    );
};

export default Footer;