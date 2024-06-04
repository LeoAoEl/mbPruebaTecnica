import useOfertas from "src/hooks/useOfertas";
import React from "react";
import ImgCard from "./ImgCard";

const OfertasCard: React.FC = () => {
  const { ofertas, loading, error } = useOfertas();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar ofertas: {error}</p>;

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
          />
        );
      })}
    </>
  );
};

export default OfertasCard;
