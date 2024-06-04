import { useState, useEffect } from "react";
import axios from "axios";

interface VistasProps {
  id: number;
  nombre: string;
  imagen?: string;
  sku: string;
}

interface ApiResponse {
  success: number;
  content: VistasProps[];
  mensaje: string;
}

const getVistasLink =
  "https://prueba.sandboxmb.com/api/getProductosUltimaVisita/";

const useUltimaVista = () => {
  const [ofertas, setOfertas] = useState<VistasProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUltimasVistas = async () => {
      try {
        const response = await axios.get<ApiResponse>(getVistasLink);
        if (response.data.success === 1) {
          setOfertas(response.data.content);
        } else {
          setError(response.data.mensaje || "Error desconocido");
        }
      } catch (err) {
        setError("Error al hacer la solicitud");
      } finally {
        setLoading(false);
      }
    };

    fetchUltimasVistas();
  }, []);

  return { ofertas, loading, error };
};

export default useUltimaVista;
