import SelectComponent from "@components/common/Select";
import Botton from "@components/common/Botton";
import AddVendedor from "./AddVendedor";
const ConfirmForm = () => {
  return (
    <section className=" bg-CardBg p-4 rounded-md w-full">
      <div className=" flex flex-col space-y-4">
        <span className=" text-black text-left text-lg">Contancto</span>
        <Botton type="text" placeholder="Correo electrónico" />
        <Botton type="phone" placeholder="Teléfono" />
        <div>
          <SelectComponent placeHolder="Seleciona estado" />
        </div>
      </div>
      <AddVendedor />
    </section>
  );
};

export default ConfirmForm;
