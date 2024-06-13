import React, { useState, useEffect } from "react";

interface Favorito {
  id: number;
  precio: number;
  nombre: string;
  imagen: string;
  timestamp: number;
}

const BuyCard: React.FC = () => {
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);
  const [price, setPrice] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );
    const validFavorites = storedFavorites.filter((item: Favorito) => {
      const currentTime = new Date().getTime();
      return currentTime - item.timestamp < 12 * 60 * 60 * 1000; // 12 horas en el local Storage
    });

    setFavoritos(validFavorites);
    setPrice(
      validFavorites.reduce(
        (acc: { [key: number]: number }, item: Favorito) => {
          acc[item.id] = 1;
          return acc;
        },
        {}
      )
    );

    localStorage.setItem("favoritos", JSON.stringify(validFavorites));
  }, []);

  const handleDelete = (id: number) => {
    const updatedFavorites = favoritos.filter((item) => item.id !== id);
    setFavoritos(updatedFavorites);
    localStorage.setItem("favoritos", JSON.stringify(updatedFavorites));
  };

  const handleQuantityChange = (id: number, delta: number) => {
    setPrice((prevQuantities) => {
      const newQuantity = Math.min(
        10,
        Math.max(1, (prevQuantities[id] || 1) + delta)
      );
      return { ...prevQuantities, [id]: newQuantity };
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-6">
        {favoritos.length === 0 ? (
          <p className=" text-5xl  text-center p-4 bg-CardBg rounded-lg">
            No hay favoritos
          </p>
        ) : (
          favoritos.map((item) => (
            <div
              className="flex items-center p-4 gap-2 bg-CardBg rounded-lg flex-wrap"
              key={item.id}
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                className=" w-1/3 md:w-16 md:h-16 object-contain"
              />

              <div className="flex flex-col px-4 md:w-1/3">
                <h2 className="font-semibold text-black break-words">
                  {item.nombre}
                </h2>
                <button
                  onClick={() => handleDelete(item.id)}
                  aria-label="delete"
                  className="text-red-500 hover:underline justify-start text-left"
                >
                  ELIMINAR
                </button>
              </div>
              <div className="flex flex-grow justify-evenly items-center">
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      aria-label="menos"
                      className="text-black border-black border rounded-full p-2"
                    >
                      -
                    </button>
                    <span className="mx-2">{price[item.id]}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      aria-label="más"
                      className="text-black border-black border rounded-full p-2"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-slate-400 text-xs text-center mt-2">
                    10 disponibles
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-lg font-semibold">
                    ${(item.precio * (price[item.id] || 1)).toFixed(2)} MXN
                  </p>
                  <p className="text-sm text-gray-500">Sin cargo por envío</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BuyCard;
