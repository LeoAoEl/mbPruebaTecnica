import Error from "@assets/icons/buy/Error";

function Rechazo() {
  return (
    <div className=" flex flex-col p-4">
      <span className=" text-xl text-black text-center md:text-left">
        Lo sentimos no pudimos procesar tu pago
      </span>
      <span className=" text-xs text-black text-center md:text-left mt-4">
        Intenta nuevamente o consulta con tu banco
      </span>
      <div className=" flex justify-center mt-4">
        <Error />
      </div>
    </div>
  );
}

export default Rechazo;
