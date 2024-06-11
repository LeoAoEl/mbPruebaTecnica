import SelectComponent from "@components/common/Select";
import Botton from "@components/common/Botton";
const ConfirmForm = () => {
  return (
    <section className=" bg-CardBg p-4 rounded-md ">
      <div className=" flex flex-col space-y-4">
        <span className=" text-black text-left text-lg">Contancto</span>
        <Botton type="text" placeholder="Correo electrónico" />
        <Botton type="phone" placeholder="Teléfono" />
      </div>
      <div className=" flex flex-col  mt-8">
        <span className=" text-black text-left text-lg mb-4">
          Datos para entrega
        </span>
        <section className=" flex flex-col space-y-4">
          <div className="flex flex-row gap-4">
            <Botton type="text" placeholder="Nombre" />
            <Botton type="text" placeholder="Apellido" />
          </div>
          <div className="flex flex-row gap-4">
            <Botton type="text" placeholder="Calle" />
            <Botton type="text" placeholder="Número exterior" />
            <Botton type="text" placeholder="Número interior" />
          </div>
          <div className="flex flex-row gap-4">
            <Botton type="text" placeholder="Colonia" />
            <Botton type="text" placeholder="Código postal" />
            <Botton type="text" placeholder="Ciudad" />
          </div>
          <div>
            <SelectComponent placeHolder="Seleciona estado" />
          </div>
        </section>
      </div>
    </section>
  );
};

export default ConfirmForm;
