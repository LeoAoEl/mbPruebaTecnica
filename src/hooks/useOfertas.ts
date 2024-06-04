import { useState, useEffect } from "react";
import axios from "axios";

interface OfertaProps {
  id: number;
  nombre: string;
  imagen?: string;
  sku: string;
}

interface ApiResponse {
  success: number;
  content: OfertaProps[];
  mensaje: string;
}

const getOfertasLink = "https://prueba.sandboxmb.com/api/getProductosOferta/";

const useOfertas = () => {
  const [ofertas, setOfertas] = useState<OfertaProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        const response = await axios.get<ApiResponse>(getOfertasLink);
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

    fetchOfertas();
  }, []);

  return { ofertas, loading, error };
};

export default useOfertas;
