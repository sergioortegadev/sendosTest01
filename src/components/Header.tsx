import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";

const Header = () => {
  const [actived, setActived] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => {
    setShowMenu(!showMenu);
    setActived(true);

    setTimeout(() => {
      setActived(false);
    }, 1000);
  };
  return (
    <>
      <header className="flex justify-between items-center  bg-white">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-6 " src="/assets/images/left.svg" alt="left arrow" />
          </Link>
          <h2 className="text-xl font-bold ml-2">Elige tu sendero</h2>
        </div>
        <button
          onClick={displayMenu}
          className={`menubtn transition-all ease duration-500 ${actived ? "bg-gray-300" : "bg-transparent"}`}
        >
          <img className="h-10" src="/assets/images/dots.svg" alt="menu dots" />
        </button>
      </header>
      {showMenu && <Menu closeMenu={displayMenu} />}
    </>
  );
};

export default Header;
