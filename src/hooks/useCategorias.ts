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
  const TTL = 12 * 60 * 60 * 1000; // 12 persiste en localStorage

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get<ApiResponse>(getCategoriasLink);
        if (response.data.success === 1) {
          setCategorias(response.data.content);
          const now = new Date();
          localStorage.setItem(
            "categorias",
            JSON.stringify(response.data.content)
          );
          localStorage.setItem("categoriasTimestamp", now.getTime().toString());
        } else {
          setError(response.data.mensaje || "Error Desconocido");
        }
      } catch (err) {
        setError("Error al hacer la solicitud");
      } finally {
        setLoading(false);
      }
    };

    const savedCategorias = localStorage.getItem("categorias");
    const savedTimestamp = localStorage.getItem("categoriasTimestamp");
    const now = new Date().getTime();

    if (
      savedCategorias &&
      savedTimestamp &&
      now - parseInt(savedTimestamp) < TTL
    ) {
      setCategorias(JSON.parse(savedCategorias));
      setLoading(false);
    } else {
      fetchCategorias();
    }
  }, []);

  return { categorias, loading, error };
};

export default useCategorias;
