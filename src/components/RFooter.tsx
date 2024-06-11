import React from "react";
import tiktok from "@assets/icons/footer/tiktok.svg";
import insta from "@assets/icons/footer/insta.svg";
import link from "@assets/icons/footer/in.svg";
import face from "@assets/icons/footer/bxl-facebook.svg";
import x from "@assets/icons/footer/x.svg";

const media = [
  "https://res-console.cloudinary.com/dk6h3pmlf/media_explorer_thumbnails/fdf49bc60955064ed29baec897e46d96/detailed",
  "https://res-console.cloudinary.com/dk6h3pmlf/media_explorer_thumbnails/93d17b316fbe5d0b960bb7bc50e05781/detailed",
  "https://res-console.cloudinary.com/dk6h3pmlf/media_explorer_thumbnails/9c44d454051a5d6dd714243f59f0dd2b/detailed",
  "https://res-console.cloudinary.com/dk6h3pmlf/media_explorer_thumbnails/b391e5f796f31349f8071bde4273309f/detailed",
  "https://res-console.cloudinary.com/dk6h3pmlf/media_explorer_thumbnails/ecbd6da059e177343d44ada9d902fe19/detailed",
];

const RFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20 hidden md:block">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <main className="flex justify-evenly items-center md:flex-row flex-col">
          <div className="flex items-center justify-center">
            <span className="font-bold text-2xl hidden sm:inline">LOGO</span>
          </div>
          <div className="hidden md:flex space-x-20">
            <div>
              <p className="leading-5 cursor-pointer tracking-normal text-xl text-FooterTitle hover:text-gray-900 font-normal">
                Conoce más
              </p>
              <ul className="py-4 space-y-2">
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Nuestra Visión
                </li>
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Cómo vender
                </li>
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Cómo comprar
                </li>
              </ul>
            </div>
            <div>
              <p className="leading-5 cursor-pointer tracking-normal text-xl text-FooterTitle hover:text-gray-900 font-normal">
                Seguridad en
              </p>
              <ul className="py-4 space-y-2">
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Envíos
                </li>
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Formas de pago
                </li>
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Garantías y Devoluciones
                </li>
              </ul>
            </div>
            <div>
              <p className="leading-5 cursor-pointer tracking-normal text-xl text-FooterTitle hover:text-gray-900 font-normal">
                Contactanos
              </p>
              <ul className="py-4 space-y-2">
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Teléfono: 123-456-7890
                </li>
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Correo: mail@mail.com
                </li>
              </ul>
            </div>
            <div>
              <p className="leading-5 cursor-pointer tracking-normal text-xl text-FooterTitle hover:text-gray-900 font-normal">
                Privacidad
              </p>
              <ul className="py-4 space-y-2">
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Aviso de privacidad
                </li>
                <li className="text-xs font-normal leading-4 text-left text-FooterTitle">
                  Términos y Condiciones
                </li>
              </ul>
            </div>
            <div>
              <p className="leading-5 tracking-normal text-xl text-FooterTitle hover:text-gray-900 font-normal">
                Social
              </p>
              <div className="flex flex-row gap-8 py-6 items-center justify-center">
                {media.map((me, index) => (
                  <img
                    key={index}
                    alt="social Media"
                    src={me}
                    className="cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        <div className="mt-4 text-center border-t-4 border-primary">
          <p className="text-base leading-5 cursor-pointer tracking-normal text-FooterTexto pt-4">
            Copyright 2023, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default RFooter;
