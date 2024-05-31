import Botton from "@components/common/Botton";
import PrimaryButton from "@components/common/PrimaryButton";

const InfoMarca = () => {
  return (
    <div className=" mb-8">
      <h6 className="text-black text-center md:text-left text-xl">
        Información de marca
      </h6>
      <div className="flex flex-col md:flex-row gap-4 py-4 justify-between items-center">
        <div className="w-full md:w-1/2">
          <Botton placeholder="Nombre" type="text" label="Nombre de la marca" />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <span className=" w-full text-sm pb-1 ">Logotipo de marca</span>
          <PrimaryButton label="Upload" ruta="#" ariaL="Upload File" />
        </div>
      </div>
    </div>
  );
};

export default InfoMarca;
