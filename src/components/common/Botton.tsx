import React from "react";
import { Input } from "@nextui-org/react";

interface BottonProps {
  placeholder: string;
  type: string;
  label: string;
}

const Botton: React.FC<BottonProps> = ({ placeholder, type, label }) => {
  return (
    <Input
      classNames={{ inputWrapper: " border-slate-200 border" }}
      isClearable
      type={type}
      label={label}
      variant="flat"
      placeholder={placeholder}
      labelPlacement="outside"
      className="w-full"
    />
  );
};

export default Botton;
