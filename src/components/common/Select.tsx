import { Select, SelectItem } from "@nextui-org/react";
interface Props {
  label?: string;
  placeHolder?: string;
}

const SelectComponent: React.FC<Props> = ({
  label,
  placeHolder = "Elegir",
}) => {
  const states = ["México", "Jalisco", "Colima", "Sonora", "Guerrero"];

  return (
    <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
      <Select
        labelPlacement={"outside"}
        label={label}
        placeholder={placeHolder}
        className="max-w-xs "
      >
        {states.map((edo) => (
          <SelectItem key={edo}>{edo}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectComponent;
