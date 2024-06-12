import { useState } from "react";
import axios from "axios";

const useAddVendedor = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addVendedor = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://prueba.sandboxmb.com/api/crearVendedor",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
      return null;
    }
  };

  return { addVendedor, loading, error };
};

export default useAddVendedor;
