import React from "react";

const ProfessorCard = ({ imagen, descripcion, nombre, rol, contacto }) => {
  return (
    <>
      <div className="flex flex-col mt-2 md:flex-row ">
        <img className="flex md:flex-col" style={{ maxWidth: "300px" }} src={imagen} alt="prueba" />

        <h1 className="mx-2 flex md:flex-row">{descripcion}</h1>
      </div>
      <div className="flex flex-col text-left my-2">
        <h1 className=" text-xl font-bold">{nombre}</h1>

        <h1>{rol}</h1>

        <h1 className="text-sky-700 flex">{contacto}</h1>
      </div>
    </>
  );
};
export default ProfessorCard;