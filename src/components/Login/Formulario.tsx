import React from "react";
import { Input, Switch } from "@nextui-org/react";
import { EyeFilledIcon } from "@assets/icons/form/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@assets/icons/form/EyeSlashFilledIcon";
import useLogin from "src/hooks/useLogin";

function Formulario() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login, loading, error } = useLogin();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="md:w-1/2 w-full py-4">
      <h1 className="text-black font-semibold text-2xl mb-8 text-center md:text-left">
        Inicia sesión
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Input
          classNames={{ inputWrapper: "bg-LightBg border-black/20 border" }}
          isClearable
          type="email"
          label="Email o nombre del usuario"
          variant="flat"
          placeholder="Email o nombre del usuario"
          labelPlacement="outside"
          className="max-w-xs"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          classNames={{ inputWrapper: "bg-LightBg border-black/20 border" }}
          labelPlacement="outside"
          label="Contraseña"
          variant="flat"
          placeholder="Contraseña"
          endContent={
            <button
              aria-label="Show Form"
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Switch size="sm">Recuérdame</Switch>

        <button
          aria-label="Submit"
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent shadow-sm text-black bg-primary font-semibold uppercase rounded-xl text-xl text-center hover:bg-primary/45 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/15"
        >
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>
    </div>
  );
}

export default Formulario;
