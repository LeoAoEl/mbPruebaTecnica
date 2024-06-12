import ImgCard from "@components/common/ImgCard";
import React from "react";

const habitualItems = [
  {
    id: 1,
    nombre: "Carter aceite Mazda 6 2.5, 20009 a 2010 aluminio",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_794981-MLM70484335001_072023-F.webp",
    sku: "DCAT019939",
    precio: 1842,
  },
  {
    id: 2,
    nombre: "Filtro Mazda 6 2.5, 20009 a 2010 aluminio",
    imagen:
      "https://res.cloudinary.com/dk6h3pmlf/image/upload/v1718033775/mbI/ktyugzoofbhzdhhhlbgo.webp",
    sku: "DCAT019939",
    precio: 1842,
  },
  {
    id: 3,
    nombre: "Escape Mazda 6 2.5, 20009 a 2010 aluminio",
    imagen:
      "https://vauli.com/wp-content/uploads/2022/04/TV3015GD_1-1024x1024.png",
    sku: "DCAT019939",
    precio: 1842,
  },
];

const HabitualCard: React.FC = () => {
  return (
    <div className=" bg-CardBg rounded-lg">
      <div className=" w-full p-8 rounded-lg overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 ">
          {habitualItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <ImgCard
                id={item.id}
                nombre={item.nombre}
                imagen={item.imagen}
                sku={item.sku}
                precio={item.precio}
              />
              {index < habitualItems.length - 1 && (
                <div className="flex items-center justify-center p-4">
                  <span className="text-5xl font-normal ">+</span>
                </div>
              )}
            </React.Fragment>
          ))}
          <div className="flex flex-col items-center justify-center p-4  text-center">
            <p className="text-xl font-semibold">Precio total:</p>
            <p className="text-2xl font-bold">$ 850.00 MXN</p>
            <button
              aria-label="simple button"
              className="mt-4  border-black border text-black px-4 py-2 rounded"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitualCard;
