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
  const TTL = 12 * 60 * 60 * 1000; // 12 horas en milisegundos

  useEffect(() => {
    const fetchMarcas = async () => {
      try {
        const response = await axios.get<ApiResponse>(getMarcasLink);
        if (response.data.success === 1) {
          setMarcas(response.data.content);
          const now = new Date();
          localStorage.setItem("marcas", JSON.stringify(response.data.content));
          localStorage.setItem("marcasTimestamp", now.getTime().toString());
        } else {
          setError(response.data.mensaje || "Error desconocido");
        }
      } catch (err) {
        setError("Error al hacer la solicitud");
      } finally {
        setLoading(false);
      }
    };

    const savedMarcas = localStorage.getItem("marcas");
    const savedTimestamp = localStorage.getItem("marcasTimestamp");
    const now = new Date().getTime();

    if (savedMarcas && savedTimestamp && now - parseInt(savedTimestamp) < TTL) {
      setMarcas(JSON.parse(savedMarcas));
      setLoading(false);
    } else {
      fetchMarcas();
    }
  }, []);

  return { marcas, loading, error };
};

export default useMarcas;
