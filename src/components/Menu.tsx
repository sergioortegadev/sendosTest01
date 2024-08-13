import { Link } from "react-router-dom";

const Menu = ({ closeMenu }: { closeMenu: () => void }) => {
  const handleClick = () => {
    closeMenu();
  };

  return (
    <div className="menuBack" onClick={handleClick}>
      <aside className="menu" onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <img className="w-12 self-center" src="/assets/images/userIn.png" alt="usuario" />
        <ol>
          <Link to="/profile">
            <li>Perfil</li>
          </Link>
          <Link to="/security">
            <li>Seguridad</li>
          </Link>
          <Link to="/">
            <li>Salir</li>
          </Link>
        </ol>
      </aside>
    </div>
  );
};

export default Menu;
