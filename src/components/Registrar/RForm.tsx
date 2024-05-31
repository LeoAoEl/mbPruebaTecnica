import InfoMarca from "./InfoMarca";
import InfoCategoria from "./InfoCategoria";
import InfoEmpresa from "./InfoEmpresa";
import InfoResponsable from "./InfoResponsable";
import CrearUser from "./CrearUser";
import CheckBox from "./CheckBox";

function RForm() {
  return (
    <main>
      <section className="border border-slate-400 mt-10  rounded-md p-4">
        <InfoMarca />
        <InfoCategoria />
        <InfoEmpresa />
        <InfoResponsable />
        <CrearUser />
        <CheckBox />
      </section>
      <aside className=" mt-6 items-center text-center">
        <a
          className=" text-white bg-black py-4 px-10 rounded-3xl"
          href="/"
          aria-label="Go back"
        >
          Crear
        </a>
      </aside>
    </main>
  );
}

export default RForm;
