import { useState } from "react";
import useAddVendedor from "src/hooks/useAddVendedor";

const AddVendedor: React.FC = () => {
  const [formData, setFormData] = useState({
    calle: "",
    numero_exterior: "",
    numero_interior: "",
    colonia: "",
    cp: "",
    telefono_empresa: "",
    nombre_comercial: "",
    csf: "",
    identificacion_oficial: "",
    usuario: "",
  });

  const { addVendedor, loading, error } = useAddVendedor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await addVendedor(formData);
    if (response) {
      console.log("Vendedor creado:", response);
    }
  };

  return (
    <div className="flex flex-col mt-8">
      <span className="text-black text-left text-lg mb-4">
        Datos para entrega
      </span>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="flex flex-row gap-4">
          <input
            type="text"
            name="usuario"
            placeholder="Usuario"
            onChange={handleChange}
            value={formData.usuario}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
          <input
            type="text"
            name="identificacion_oficial"
            placeholder="Identificación oficial"
            onChange={handleChange}
            value={formData.identificacion_oficial}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
        </div>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            name="nombre_comercial"
            placeholder="Nombre comercial"
            onChange={handleChange}
            value={formData.nombre_comercial}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
          <input
            type="text"
            name="csf"
            placeholder="CSF"
            onChange={handleChange}
            value={formData.csf}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
        </div>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            name="calle"
            placeholder="Calle"
            onChange={handleChange}
            value={formData.calle}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
          <input
            type="text"
            name="numero_exterior"
            placeholder="Número exterior"
            onChange={handleChange}
            value={formData.numero_exterior}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
          <input
            type="text"
            name="numero_interior"
            placeholder="Número interior"
            onChange={handleChange}
            value={formData.numero_interior}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
        </div>
        <div className="flex flex-row gap-4">
          <input
            type="text"
            name="colonia"
            placeholder="Colonia"
            onChange={handleChange}
            value={formData.colonia}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
          <input
            type="text"
            name="cp"
            placeholder="Código postal"
            onChange={handleChange}
            value={formData.cp}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
          <input
            type="text"
            name="telefono_empresa"
            placeholder="Teléfono de la Empresa"
            onChange={handleChange}
            value={formData.telefono_empresa}
            className="rounded-lg p-2 border-gray-300 border w-full"
          />
        </div>
        <div className="flex items-center justify-center py-4">
          <button
            type="submit"
            className="rounded-lg p-2 bg-black text-white hover:bg-slate-600"
          >
            {loading ? "Enviando..." : "Agregar cliente"}
          </button>
        </div>
        {error && <div className="text-red-500">{error}</div>}
      </form>
    </div>
  );
};

export default AddVendedor;
