import { useState, useEffect } from "react";
import axios from "axios";

interface AutoparteProps {
  id: number;
  precio: number;
  nombre: string;
  imagen: string;
  sku: string;
}

interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: AutoparteProps[];
}

const getAutopartesLink =
  "https://prueba.sandboxmb.com/api/searchAutoparteV3/?search=jetta%202023&limit=20&page=1&categoriaSeleccionada=undefined&marcasSeleccionadas=&vehiculo=";

const useAutopartes = () => {
  const [autopartes, setAutopartes] = useState<AutoparteProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAutopartes = async () => {
      try {
        const response = await axios.get<ApiResponse>(getAutopartesLink);
        setAutopartes(response.data.results);
      } catch (err) {
        setError("Error al hacer la solicitud");
      } finally {
        setLoading(false);
      }
    };
    fetchAutopartes();
  }, []);

  return { autopartes, loading, error };
};

export default useAutopartes;
