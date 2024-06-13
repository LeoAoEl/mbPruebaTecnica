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
  const TTL = 12 * 60 * 60 * 1000; // 12 persistiendo en el localStorage

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await axios.get<ApiResponse>(getYearsLink);
        if (response.data.success === 1) {
          setYears(response.data.content);
          const now = new Date();
          localStorage.setItem("years", JSON.stringify(response.data.content));
          localStorage.setItem("yearsTimestamp", now.getTime().toString());
        } else {
          setError(response.data.mensaje || "Error desconocido");
        }
      } catch (err) {
        setError("Error al hacer la solicitud");
      } finally {
        setLoading(false);
      }
    };

    const savedYears = localStorage.getItem("years");
    const savedTimestamp = localStorage.getItem("yearsTimestamp");
    const now = new Date().getTime();

    if (savedYears && savedTimestamp && now - parseInt(savedTimestamp) < TTL) {
      setYears(JSON.parse(savedYears));
      setLoading(false);
    } else {
      fetchYears();
    }
  }, []);

  return { years, loading, error };
};

export default useYears;
