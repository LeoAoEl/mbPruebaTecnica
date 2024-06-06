import { useState, useEffect } from "react";
import axios from "axios";
interface CategoriasProps {
  id: number;
  nombre: string;
}

interface ApiResponse {
  success: number;
  content: CategoriasProps[];
  mensaje: string;
}

const getCategoriasLink =
  "https://prueba.sandboxmb.com/api/getSubsubcategorias/";

const useCategorias = () => {
  const [categorias, setCategorias] = useState<CategoriasProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get<ApiResponse>(getCategoriasLink);
        if (response.data.success === 1) {
          setCategorias(response.data.content);
        } else {
          setError(response.data.mensaje || "Error Desconocido");
        }
      } catch (err) {
        setError("Error al hacer la solicitud");
      } finally {
        setLoading(false);
      }
    };
    fetchCategorias();
  }, []);
  return { categorias, loading, error };
};

export default useCategorias;
