import React, { type ChangeEventHandler } from "react";
import { Input } from "@nextui-org/react";

interface BottonProps {
  placeholder: string;
  type: string;
  label?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Botton: React.FC<BottonProps> = ({
  placeholder,
  type,
  label,
  onChange,
  value,
}) => {
  return (
    <Input
      classNames={{ inputWrapper: " border-slate-200 border" }}
      type={type}
      value={value}
      onChange={onChange}
      label={label}
      variant="flat"
      placeholder={placeholder}
      labelPlacement="outside"
      className="w-full"
    />
  );
};

export default Botton;
