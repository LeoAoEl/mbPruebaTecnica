import { Select, SelectItem } from "@nextui-org/react";
import useYears from "src/hooks/useYears";

const YearSelect = () => {
  const { years, error, loading } = useYears();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex w-full flex-wrap md:flex-nowrap  mb-6 md:mb-0 gap-4">
        <Select
          size="sm"
          label="Años"
          className="max-w-xs"
          classNames={{
            base: " bg-white",
            trigger: "bg-white text-black",
          }}
        >
          {years.map((ano, Index) => (
            <SelectItem key={Index} value={ano !== null ? ano : ""}>
              {ano !== null ? ano : ano}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default YearSelect;
