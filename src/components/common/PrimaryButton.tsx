import React from "react";

interface PrimaryButtonProps {
  label: string;
  ruta: string;
  ariaL: string;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  ruta,
  ariaL,
  className,
}) => {
  return (
    <a
      href={ruta}
      aria-label={ariaL}
      className={` bg-lime-400 text-black text-center py-2 px-4 rounded-md w-full ${className}`}
    >
      {label}
    </a>
  );
};

export default PrimaryButton;
