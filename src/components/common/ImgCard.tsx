import type React from "react";
import HeartIcon from "@assets/icons/home/HeartIcon";
import StarIcon from "@assets/icons/home/StarIcon";

interface ImgCardProps {
  nombre: string;
  imagen?: string;
  sku: string;
  id: number;
  showContent?: boolean;
  precio?: number;
}

const ImgCard: React.FC<ImgCardProps> = ({
  id,
  nombre,
  imagen,
  sku,
  showContent = true,
  precio,
}) => {
  const defaultPrice = 1842;
  const finalPrice = precio !== undefined ? precio : defaultPrice;
  return (
    <div className=" bg-CardBg text-black rounded-lg  overflow-hidden ">
      <div className=" flex flex-col justify-between items-center p-4">
        <div className=" flex flex-row justify-between w-full mb-4">
          <span className=" text-sm text-black">SKU: {sku}</span>
          <HeartIcon />
        </div>

        {imagen && (
          <img
            src={imagen}
            alt={nombre}
            className=" w-full h-48 object-contain "
          />
        )}

        <aside className="flex justify-end items-end w-full">
          <div className="flex flex-row justify-end items-center w-fit mt-1 bg-primary text-black rounded-full px-2 py-1 ml-auto">
            <StarIcon />
            <span>4.9</span>
          </div>
        </aside>

        <div className="pt-4">
          <p className=" text-md text-left">{nombre}</p>
          {showContent && (
            <span className=" text-rose-600 text-xs line-through ">
              $ 1,842
            </span>
          )}
          <p className=" text-xl text-black mt-2">{finalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
