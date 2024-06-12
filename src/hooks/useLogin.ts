import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://prueba.sandboxmb.com/api/auth/",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        window.location.href = "/home";
      } else {
        setError("Credenciales incorrectas");
      }
    } catch (err) {
      setError("Error al intentar iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
