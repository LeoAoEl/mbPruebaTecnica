import { Select, SelectItem } from "@nextui-org/react";
import useMarcas from "src/hooks/useMarcas";
import { useEffect, useState, type ChangeEventHandler } from "react";

const MarcasSelect = () => {
  const { marcas, error, loading } = useMarcas();
  const [selectedMarca, setSelectedMarca] = useState<string | undefined>(
    undefined
  );
  const TTL = 12 * 60 * 60 * 1000; // 12 horas en milisegundos

  useEffect(() => {
    const savedMarca = localStorage.getItem("selectedMarca");
    const savedTimestamp = localStorage.getItem("marcaTimestamp");
    const now = new Date().getTime();

    if (savedMarca && savedTimestamp && now - parseInt(savedTimestamp) < TTL) {
      setSelectedMarca(savedMarca);
    }
  }, []);

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const value = event.target.value;
    setSelectedMarca(value);
    const now = new Date();
    localStorage.setItem("selectedMarca", value);
    localStorage.setItem("marcaTimestamp", now.getTime().toString());
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
        <Select
          size="sm"
          label="Marcas"
          className="max-w-xs"
          classNames={{
            base: "bg-white",
            trigger: "bg-white text-black",
          }}
          value={selectedMarca}
          onChange={(event) =>
            handleSelectChange(event as React.ChangeEvent<HTMLSelectElement>)
          }
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
