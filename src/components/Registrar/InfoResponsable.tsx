import Botton from "@components/common/Botton";

function InfoResponsable() {
  return (
    <div className=" py-4 mb-8">
      <h6 className="text-black text-center md:text-left text-xl">
        Responsable de marca
      </h6>
      <div className="flex flex-col md:flex-row gap-4 py-4 justify-between items-center">
        <div className="w-full md:w-1/2">
          <Botton
            placeholder="Nombre completo"
            type="text"
            label="Nombre completo"
          />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <Botton placeholder="Correo" type="email" label="Correo" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:w-1/2">
          <Botton placeholder="Teléfono" type="phone" label="55 555 555" />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <Botton
            placeholder="Cargo en la empresa"
            type="text"
            label="Cargo en la empresa"
          />
        </div>
      </div>
    </div>
  );
}

export default InfoResponsable;
