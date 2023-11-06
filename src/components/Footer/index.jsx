import React from 'react';
import {Container} from '@mui/material';

const Footer = () => {
    return (
      <footer className="py-8 bg-black" style={{ position: "relative" }}>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div
            className="flex flex-col justify-center"
          >
            <img style={{maxWidth:"190px"}} src="static/images/logo3.png" alt="prueba"/>
          </div>

          <div
            className="flex flex-row justify-around w-1/2"
          >
            <ul className="list-unstyled text-white">
              <li>
                <a className="text-blue-500 font-semibold block pb-2 text-sm">Nosotros</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/AcercaDe">Acerca del HPC</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/Equipo">Equipo</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/">Publicaciones</a>
              </li>
            </ul>
            <ul className="list-unstyled text-white">
              <li>
                <a className="text-blue-500 font-semibold block pb-2 text-sm" href="/">Más</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/Infraestructura">Infraestructura</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/Noticias">Noticias</a>
              </li>
              <li>
                <a className="font-semibold block pb-2 text-sm" href="/Contact">Contacto</a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    );
};

export default Footer;