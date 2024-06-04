import useUltimaVista from "src/hooks/useUltimaVista";
import React from "react";
import ImgCard from "./ImgCard";

const UltimasVistasCard: React.FC = () => {
  const { ofertas, loading, error } = useUltimaVista();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar Ultimas vistas: {error}</p>;

  return (
    <>
      {ofertas.map((oferta) => {
        return (
          <ImgCard
            key={oferta.id}
            id={oferta.id}
            nombre={oferta.nombre}
            imagen={oferta.imagen}
            sku={oferta.sku}
            showContent={false}
          />
        );
      })}
    </>
  );
};

export default UltimasVistasCard;
