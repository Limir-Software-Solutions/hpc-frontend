import React from "react";

const ProfessorCard = ({ imagen, descripcion, nombre, rol, contacto }) => {
  return (
    <>
      <div className="flex flex-col my-4 md:flex-row ">
        <img className="flex md:flex-col md:justify rounded-full" style={{ maxWidth: "250px", maxHeight:"250px" }} src={imagen} alt="prueba" />

        <h1 className="mx-5 flex md:flex-row text-justify">{descripcion}</h1>
      </div>
      <div className="flex flex-col text-left my-2 mx-11">
        <h1 className=" text-xl font-bold">{nombre}</h1>

        <h1>{rol}</h1>

        <h1 className="text-sky-700 ">{contacto}</h1>
      </div>
    </>
  );
};
export default ProfessorCard;