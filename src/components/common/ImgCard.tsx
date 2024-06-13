import React from "react";
import HeartIcon from "@assets/icons/home/HeartIcon";
import StarIcon from "@assets/icons/home/StarIcon";

interface ImgCardProps {
  ruta?: string;
  nombre: string;
  imagen?: string;
  sku: string;
  id: number;
  showContent?: boolean;
  precio?: number;
}

const ImgCard: React.FC<ImgCardProps> = ({
  ruta,
  id,
  nombre,
  imagen,
  sku,
  showContent = true,
  precio,
}) => {
  const defaultPrice = 1842;
  const finalPrice = precio !== undefined ? precio : defaultPrice;
  const defaultImage =
    "https://res.cloudinary.com/dk6h3pmlf/image/upload/v1718033576/mbI/kxf7zlri6rxwjhypfwui.webp";
  const imageUrl = imagen || defaultImage;

  const autoparte = { id, nombre, imagen: imageUrl, precio: finalPrice };

  return (
    <div className="bg-CardBg text-black rounded-lg overflow-hidden">
      <div className="flex flex-col justify-between items-center p-4">
        <div className="flex flex-row justify-between w-full mb-4">
          <span className="text-sm text-black">SKU: {sku}</span>
          <HeartIcon autoparte={autoparte} />
        </div>
        <a href="/buyPart" aria-label="Favoritos">
          <img
            src={imageUrl}
            alt={nombre}
            className="w-full h-1/3 lg:h-48 object-contain hover:scale-105 transition-all ease-in"
          />

          <aside className="flex justify-end items-end w-full">
            <div className="flex flex-row justify-end items-center w-fit mt-1 bg-primary text-black rounded-full px-2 py-1 ml-auto">
              <StarIcon />
              <span>4.9</span>
            </div>
          </aside>

          <div className="pt-4 ">
            <p className="lg:text-md text-left text-xs ">{nombre}</p>
            {showContent && (
              <span className="text-rose-600 text-xs line-through">
                $ 1,842
              </span>
            )}
            <p className="text-xl text-black mt-2">$ {finalPrice}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ImgCard;
