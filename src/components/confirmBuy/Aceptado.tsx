function Aceptado() {
  return (
    <main className=" flex flex-col p-8">
      <div className=" flex flex-col py-8 border-b-1 border-black ">
        <p className=" text-3xl text-center md:text-left">
          ¡Gracias tu compra!
        </p>
        <span className=" text-xs mt-2 ">Tu pago fue procesado con éxito</span>
        <picture className="justify-center flex">
          <img
            src="https://res.cloudinary.com/dk6h3pmlf/image/upload/v1718063208/mbI/dqiw9ty5z5jvhorfqhqx.png"
            alt="Gracias"
            className=" w-1/4 "
          />
        </picture>
      </div>
      <section className=" flex flex-col">
        <span className=" text-center text-medium text-black mt-8">
          Resumen de compra
        </span>
        <div className="mt-8  w-3/4  mx-auto flex flex-col gap-2  pb-4 border-b-2  border-slate-200">
          <div className=" flex flex-row justify-between">
            <span> (4)</span>
            <span>$ 1000.00 MXN</span>
          </div>
          <div className=" flex flex-row justify-between">
            <span> (1)</span>
            <span>$ 200.00 MXN</span>
          </div>
          <div className=" flex flex-row justify-between">
            <span> (1)</span>
            <span>$ 365.00 MXN </span>
          </div>
        </div>
        <div className="flex w-3/4  mx-auto flex-row  mt-4 gap-2 justify-between  pb-4 border-b-2  border-slate-200">
          <span> Subtotal</span>
          <span>$ 1767.00 MXN</span>
        </div>
        <div className="flex flex-row w-3/4  mx-auto mt-4 gap-2 justify-between  pb-4 border-b-2  border-slate-200">
          <span>Envío</span>
          <span>$ 250.00 MXN</span>
        </div>
        <div className="flex flex-row  w-3/4  mx-auto mt-4 gap-2 justify-between  pb-4 ">
          <span className=" font-serif text-lg">TOTAL</span>
          <span className=" font-semibold text-lg">$ 2017.00 MXN</span>
        </div>
      </section>
      <aside className=" flex flex-col gap-8 py-8">
        <picture className="justify-center flex">
          <img
            src="https://res.cloudinary.com/dk6h3pmlf/image/upload/v1718063208/mbI/qeb2rdpmz9o9hjdexo1s.png"
            alt="Gracias"
            className=" w-3/4 cursor-pointer "
          />
        </picture>
        <picture className="justify-center flex">
          <img
            src="https://res.cloudinary.com/dk6h3pmlf/image/upload/v1718063208/mbI/dtzhvfqnc9y5c7mn69ks.png"
            alt="Gracias"
            className=" w-3/4 cursor-pointer "
          />
        </picture>
      </aside>
    </main>
  );
}

export default Aceptado;
