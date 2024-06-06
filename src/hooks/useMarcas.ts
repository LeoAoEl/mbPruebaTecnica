import { useState, useEffect } from "react";
import axios from "axios";

interface MarcasProps {
  id: number;
  nombre: string;
}

interface ApiResponse {
  success: number;
  content: MarcasProps[];
  mensaje: string;
}

const getMarcasLink = "https://prueba.sandboxmb.com/api/getMarcasVehiculos/";

const useMarcas = () => {
  const [marcas, setMarcas] = useState<MarcasProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await axios.get<ApiResponse>(getMarcasLink);
        if (response.data.success === 1) {
          setMarcas(response.data.content);
        } else {
          setError(response.data.mensaje || "Error desconocido");
        }
      } catch (err) {
        setError("Error al hacer la solicitud");
      } finally {
        setLoading(false);
      }
    };
    fetchMarcas();
  }, []);
  return { marcas, loading, error };
};

export default useMarcas;
