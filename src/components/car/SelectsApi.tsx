import MarcasSelect from "./MarcasSelect";
import YearSelect from "./YearSelect";
import CategoriaSelect from "./CategoriaSelect";
import CheckBoxL from "./CheckBoxL";
function SelectsApi() {
  return (
    <div className="bg-CardBg gap-4 hidden md:flex flex-col mt-8 px-2 py-4 rounded-md flex-wrap">
      <span>Vehículos</span>
      <MarcasSelect />
      <YearSelect />
      <CategoriaSelect />
      <CheckBoxL />
    </div>
  );
}

export default SelectsApi;
