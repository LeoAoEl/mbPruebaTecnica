import CreditCard from "../../assets/icons/buy/CreditCard";
import { useState } from "react";
import { Checkbox } from "@nextui-org/react";
import ConfirmModal from "./ConfirmModal";

const LaunchModal: React.FC = () => {
  const [isChecked, setIsChecked] = useState<Boolean>(false);
  return (
    <section className=" mt-4">
      <div className=" flex flex-row justify-between w-full">
        <div className=" flex-row flex">
          <CreditCard /> <span className=" ml-1"> Número de tarjeta</span>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dk6h3pmlf/image/upload/v1718055498/mbI/yc9oly6k3a3c1ooqfxnr.png"
            alt="use Credit card"
          />
        </div>
      </div>
      <div className=" mt-2">
        <Checkbox onChange={(e) => setIsChecked(e.target.checked)}>
          Aceptar compra
        </Checkbox>
      </div>
      <aside className=" my-4 flex justify-center">
        <ConfirmModal isChecked={isChecked} />
      </aside>
    </section>
  );
};

export default LaunchModal;
