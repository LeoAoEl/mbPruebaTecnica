import SelectComponent from "@components/common/Select";

const InfoCategoria = () => {
  return (
    <div className=" mb-8">
      <h6 className="text-black text-center md:text-left text-xl">
        Categoría de producto
      </h6>
      <div className="flex flex-col md:flex-row gap-4 py-4 justify-between items-center">
        <div className="w-full md:w-1/2">
          <SelectComponent label="Motor" />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <SelectComponent label="Subcategoria" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 py-4 justify-between items-center">
        <div className="w-full md:w-1/2">
          <SelectComponent label="Eléctrico" />
        </div>
        <div className="flex flex-col items-center w-full md:w-1/2">
          <SelectComponent label="Guardas" />
        </div>
      </div>

      <aside className="flex flex-row items-center">
        <span className="flex justify-center items-center w-8 h-8  cursor-pointer rounded-full text-white bg-black">
          +
        </span>
        <span className="pl-4">Añadir categoría</span>
      </aside>
    </div>
  );
};

export default InfoCategoria;
