import { useState, useEffect } from "react";

interface HeartIconProps {
  autoparte: {
    id: number;
    precio: number;
    nombre: string;
    imagen: string;
  };
}

const HeartIcon: React.FC<HeartIconProps> = ({ autoparte }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const existingFavorites = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );
    const isFavorited = existingFavorites.some(
      (item: any) => item.id === autoparte.id
    );
    setIsFavorite(isFavorited);
  }, [autoparte.id]);

  const handleFavorite = () => {
    const existingFavorites = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );
    let updatedFavorites;

    if (isFavorite) {
      updatedFavorites = existingFavorites.filter(
        (item: any) => item.id !== autoparte.id
      );
    } else {
      updatedFavorites = [
        ...existingFavorites,
        { ...autoparte, timestamp: new Date().getTime() },
      ];
    }

    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <svg
      onClick={handleFavorite}
      xmlns="http://www.w3.org/2000/svg"
      fill={isFavorite ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`h-6 w-6 transition-all ease-in-out cursor-pointer ${
        isFavorite
          ? "text-rose-600 fill-rose-600"
          : "hover:fill-rose-600 hover:text-rose-600"
      }`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  );
};

export default HeartIcon;
