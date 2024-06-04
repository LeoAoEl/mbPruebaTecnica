import axios from "axios";

interface OfertaProps {
  id: number;
  name: string;
  image?: string;
  sku: string;
}
interface ApiResponse {
  success: number;
  content: OfertaProps[];
  mensaje: string;
}
const getOfertasLink = "https://prueba.sandboxmb.com/api/getProductosOferta/";

export const getOfertas = async (): Promise<OfertaProps[]> => {
  try {
    const response = await axios.get<ApiResponse>(getOfertasLink);
    if ((response.data.success = 1)) {
      return response.data.content;
    } else {
      throw new Error(response.data.mensaje || "Error desconocido");
    }
  } catch (error) {
    console.error("Error al hacer la solicitud", error);
    throw error;
  }
};
