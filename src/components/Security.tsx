import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Security = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Contraseña guardada, vuelva a ingresar con la nueva contraseña");
    navigate("/");
  };

  return (
    <div className="backTemplateProfile">
      <div className="mainTemplate">
        <div className="flex flex-col w-80">
          <Header />
        </div>
        <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
          <h1 className="text-2xl my-4 pl-4 font-bold text-gray-600 text-left w-full">Ajustes de Seguridad</h1>
          <h2 className="text-xl my-4 pl-4 font-bold text-gray-600 text-left w-full">Cambiar Contraseña</h2>
          <label className="inputsLabel" htmlFor="currentpassword">
            <input
              className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
              id="currentpassword"
              type="password"
              placeholder="Contraseña actual"
            />
          </label>
          <label className="inputsLabel" htmlFor="newpassword">
            <input
              className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
              id="newpassword"
              type="password"
              placeholder="Escriba nueva contraseña"
            />
          </label>
          <label className="inputsLabel" htmlFor="repeatnewpassword">
            <input
              className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
              id="repeatnewpassword"
              type="password"
              placeholder="Repita nueva contraseña"
            />
          </label>
          <input className="bottomButton" type="submit" value="Guardar" />
        </form>
        <button className="bottomButton" onClick={() => navigate("/profile")}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Security;
