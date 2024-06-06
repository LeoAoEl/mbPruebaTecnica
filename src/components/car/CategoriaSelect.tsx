import { Select, SelectItem } from "@nextui-org/react";
import useMarcas from "src/hooks/useMarcas";
import useCategorias from "src/hooks/useCategorias";

const CategoriaSelect = () => {
  const { categorias, error, loading } = useCategorias();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap  mb-6 md:mb-0 gap-4">
        <Select
          size="sm"
          label="Categorias"
          className="max-w-xs"
          classNames={{
            base: " bg-white",
            trigger: "bg-white text-black",
          }}
        >
          {categorias.map((cat) => (
            <SelectItem key={cat.id} value={cat.id.toString()}>
              {cat.nombre}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default CategoriaSelect;
