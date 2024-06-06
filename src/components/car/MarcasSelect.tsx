import { Select, SelectItem } from "@nextui-org/react";
import useMarcas from "src/hooks/useMarcas";

const MarcasSelect = () => {
  const { marcas, error, loading } = useMarcas();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap  mb-6 md:mb-0 gap-4">
        <Select
          size="sm"
          label="Marcas"
          className="max-w-xs"
          classNames={{
            base: " bg-white",
            trigger: "bg-white text-black",
          }}
        >
          {marcas.map((mar) => (
            <SelectItem key={mar.id} value={mar.id.toString()}>
              {mar.nombre}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default MarcasSelect;
