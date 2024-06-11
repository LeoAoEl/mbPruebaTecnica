import { createContext, useState, useContext, type ReactNode } from "react";

interface FavoritosContextProps {
  favoritos: number[];
  toggleFavorito: (id: number) => void;
}

const FavoritosContext = createContext<FavoritosContextProps | undefined>(
  undefined
);

export const FavoritosProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favoritos, setFavoritos] = useState<number[]>([]);

  const toggleFavorito = (id: number) => {
    setFavoritos((prevFavoritos) =>
      prevFavoritos.includes(id)
        ? prevFavoritos.filter((favId) => favId !== id)
        : [...prevFavoritos, id]
    );
  };

  return (
    <FavoritosContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritos = () => {
  const context = useContext(FavoritosContext);
  if (!context) {
    throw new Error("useFavoritos debe usarse dentro de un FavoritosProvider");
  }
  return context;
};
