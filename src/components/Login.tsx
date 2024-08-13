import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/profile");
  };
  return (
    <>
      <div className="backTemplate">
        <div className="mainTemplate">
          <div className="login">
            <img className="w-48 mt-4" src="/assets/images/logo.png" alt="logo" />
            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl my-4 pl-4 font-bold text-gray-600 text-left w-full">Ingresa</h1>
              <label className="inputsLabel" htmlFor="email">
                <input
                  className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
                  id="email"
                  type="email"
                  placeholder="Correo electrónico"
                />
                <img className="w-8 h-8" src="/assets/images/user.svg" alt="user icon" />
              </label>
              <label className="inputsLabel" htmlFor="password">
                <input
                  className="w-full outline-none pl-2 h-8 text-lg text-gray-500"
                  id="password"
                  type="password"
                  placeholder="· · · · · · · ·"
                />
                <img className="w-8 h-8" src="/assets/images/pass.svg" alt="password icon" />
              </label>
              <Link to="/password">
                <h4 className="text-gray-500 text-base font-medium text-right pr-2">Olvidé mi contraseña</h4>
              </Link>
              <input className="bottomButton" type="submit" value="Iniciar sesión" />
            </form>
          </div>
          <div className="loginRegister">
            <h4 className="text-gray-400 text-base font-medium">O continúa con</h4>
            <a href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
              <img className="w-12 h-12" src="/assets/images/linkedin.png" alt="linkedin logo" />
            </a>
            <div className="text-center">
              <h4 className="text-gray-400 text-base font-medium">
                ¿No tienes una cuenta?
                <br />
              </h4>
              <Link to="/register">
                <h4 className="text-gray-600 text-base font-medium">
                  <strong>Regístrate</strong> con tu cuenta empresarial
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
