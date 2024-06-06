import { useState, useEffect } from "react";
import axios from "axios";

interface ApiResponse {
  success: number;
  content: (number | null)[];
  mensaje: string;
}

const getYearsLink = "https://prueba.sandboxmb.com/api/getAniosVehiculos/";

const useYears = () => {
  const [years, setYears] = useState<(number | null)[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await axios.get<ApiResponse>(getYearsLink);
        if (response.data.success === 1) {
          setYears(response.data.content);
        } else {
          setError(response.data.mensaje || "Error desconocido");
        }
      } catch (err) {
        setError("Error al hacer la solicitud");
      } finally {
        setLoading(false);
      }
    };
    fetchYears();
  }, []);

  return { years, loading, error };
};

export default useYears;
