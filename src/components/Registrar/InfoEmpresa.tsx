import Botton from "@components/common/Botton";
import PrimaryButton from "@components/common/PrimaryButton";

function InfoEmpresa() {
  return (
    <div className="py-4 mb-8">
      <h6 className="text-black text-center md:text-left text-xl">
        Información de la empresa
      </h6>
      <div className="flex flex-col md:flex-row gap-4 py-4 justify-between items-center">
        <div className="w-full md:w-1/3">
          <Botton placeholder="Razón social" type="text" label="Razón social" />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3">
          <Botton placeholder="RFC" type="text" label="RFC" />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3">
          <span className=" w-full text-sm pb-1 ">Logotipo de empresa</span>
          <PrimaryButton label="Upload" ruta="#" ariaL="Upload File" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:w-1/2">
          <Botton
            placeholder="Nombre de corporativo"
            type="text"
            label="Nombre de corporativo"
          />
        </div>
        <div className=" w-full md:w-1/2">
          <Botton
            placeholder="Elegir país"
            type="text"
            label="País de Origen"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoEmpresa;
