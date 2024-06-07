import useAutopartes from "src/hooks/useAutopartes";
import React from "react";
import ImgCard from "@components/common/ImgCard";

const MainCard: React.FC = () => {
  const { autopartes, loading, error } = useAutopartes();
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      {autopartes.map((au) => {
        return (
          <a href="/buyAuto">
            <ImgCard
              key={au.id}
              id={au.id}
              imagen={au.imagen}
              nombre={au.nombre}
              precio={au.precio}
              sku={au.sku}
            />
          </a>
        );
      })}
    </>
  );
};

export default MainCard;
