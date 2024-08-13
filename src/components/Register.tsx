import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Verificar email, buscá en tu casilla, incluso en spam");
    navigate("/");
  };
  return (
    <div className="backTemplate">
      <div className="mainTemplate">
        <form onSubmit={handleSubmit} className="h-full flex flex-col justify-center">
          <h1 className="text-2xl my-4 pl-4 font-bold text-gray-600 text-left w-full">Registrate</h1>
          <label className="inputsLabel" htmlFor="name">
            <input
              className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
              id="name"
              type="text"
              placeholder="Nombre"
            />
          </label>
          <label className="inputsLabel" htmlFor="email">
            <input
              className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
              id="email"
              type="email"
              placeholder="Correo electrónico"
            />
          </label>
          <label className="inputsLabel" htmlFor="password">
            <input
              className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
              id="password"
              type="password"
              placeholder="· · · · · · · ·"
            />
          </label>
          <input className="bottomButton" type="submit" value="Registrar" />
        </form>
        <button className="bottomButton" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default Register;
