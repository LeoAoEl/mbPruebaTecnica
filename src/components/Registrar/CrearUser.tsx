import Botton from "@components/common/Botton";

function CrearUser() {
  return (
    <div className=" py-4">
      <h6 className="text-black text-center md:text-left text-xl">
        Crear usuario y contraseña
      </h6>
      <div className="flex flex-col md:flex-row gap-4 py-4 justify-between items-center">
        <div className="w-full md:w-2/3">
          <Botton
            placeholder="Correo electrónico"
            type="email"
            label="Correo electrónico"
          />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3">
          <Botton placeholder="Teléfono" type="phone" label="Teléfono" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="w-full md:w-1/3">
          <Botton
            placeholder="Nombre de usuario"
            type="text"
            label="Nombre de usuario"
          />
        </div>
        <div className=" w-full md:w-1/3">
          <Botton placeholder="Contraseña" type="password" label="Contraseña" />
        </div>
        <div className=" w-full md:w-1/3">
          <Botton
            placeholder="Confirmar contraseña"
            type="text"
            label="Confirmar contraseña"
          />
        </div>
      </div>
    </div>
  );
}

export default CrearUser;
