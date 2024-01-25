import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import * as S from "./stylesBio"


const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre) => (
      <S.BotonBio
        key={nombre}
        onClick={() => onClick(nombre as NombresSimpsons)}
        isActive={bioActiva.id === nombre}
      >
        {nombre}
      </S.BotonBio>
    ));
  };

  return (
    <S.ContenedorBio>
      <S.ContenedorBotones>{crearBotones()}</ContenedorBotones>      
          <S.Imagen src={bioActiva.image} alt={bioActiva.nombre}/>        
      <S.Titulo>{bioActiva.nombre}</S.Titulo>
      <S.Descripcion>{bioActiva.descripcion}</S.Descripcion>           
    </S.ContenedorBio>      
  );
};

export default Bio;
