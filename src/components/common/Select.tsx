import { Select, SelectItem } from "@nextui-org/react";
interface Props {
  label: string;
}

const SelectComponent: React.FC<Props> = ({ label }) => {
  const animals = ["Leon", "Caballo", "Paloma", "Perro", "Gato"];

  return (
    <div className="flex w-full flex-wrap items-end md:flex-nowrap mb-6 md:mb-0 gap-4">
      <Select
        labelPlacement={"outside"}
        label={label}
        placeholder="Elegir"
        className="max-w-xs "
      >
        {animals.map((animal) => (
          <SelectItem key={animal}>{animal}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectComponent;
