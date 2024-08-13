import { useNavigate } from "react-router-dom";

const Password = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Se envió mail para recuperar contraseña");
    navigate("/");
  };

  return (
    <div className="backTemplate">
      <div className="mainTemplate">
        <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
          <h1 className="text-2xl my-4 pl-4 font-bold text-gray-600 text-left w-full">Recuperar Contraseña</h1>
          <label className="inputsLabel" htmlFor="email">
            <input
              className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
              id="email"
              type="email"
              placeholder="Correo electrónico"
            />
            <img className="w-8 h-8" src="/assets/images/user.svg" alt="user icon" />
          </label>

          <input className="bottomButton" type="submit" value="Enviar" />
        </form>
        <button className="bottomButton" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Password;
