import { useState } from "react";
import Dropdown from "./Dropdown";
import Header from "./Header";

const UserData = ({ user, brecha }: { user: { name: string; puesto: string }; brecha: string | null }) => {
  return (
    <div className="flex justify-between w-full mb-2">
      <div className="self-start flex flex-col">
        <h2 className="text-xl font-bold">Hola, {user.name}</h2>
        <h3 className="text-sm font-bold text-gray-500">
          {brecha ? "¿A dónde quieres llegar?" : "Vas a llegar lejos"}
        </h3>
      </div>
      {!brecha && (
        <div className="flex flex-col">
          <h2 className="text-lg font-bold text-buttonColor">{user.puesto}</h2>
          <h3 className="text-sm font-bold text-gray-500 text-right">Puesto</h3>
        </div>
      )}
    </div>
  );
};

const ProfileImage = ({ brecha, setBrecha }: { brecha: string | null; setBrecha: (text: string) => void }) => {
  const changeBrecha = (text: string) => {
    setBrecha(text);
  };

  return (
    <>
      {brecha === null ? (
        <div className="fixed w-72 flex justify-center items-center top-[40vh] -z-10">
          <img className="absolute" src="/assets/images/circle.png" alt="el fondo" />
          <img className="relative w-32" src="/assets/images/senderismo.png" alt="el camino" />
        </div>
      ) : (
        <div className="grid grid-cols-[minmax(0,_22rem)_1rem] grid-rows-[repeat(5,88px)] w-[23rem] text-right bg-hero-path bg-blend-overlay bg-no-repeat -z-10 fixed top-[10rem]">
          <p
            onClick={() => changeBrecha("Lider de tienda")}
            className={`pr-20 pt-5 font-semibold ${
              brecha === "Lider de tienda" ? "text-buttonColor font-bold" : "text-gray-400"
            }`}
          >
            Lider de tienda
          </p>

          <div
            className={`w-full h-full ${brecha === "Lider de tienda" ? "bg-[rgb(248,204,100)]" : "bg-transparent"}`}
          ></div>
          <p
            onClick={() => changeBrecha("Administrador de Personal")}
            className={`pr-6 pt-2 font-semibold ${
              brecha === "Administrador de Personal" ? "text-buttonColor font-bold" : "text-gray-400"
            }`}
          >
            Administrador personal
          </p>
          <div
            className={`w-full h-full ${
              brecha === "Administrador de Personal" ? "bg-[rgb(248,204,100)]" : "bg-transparent"
            }`}
          ></div>
          <p
            onClick={() => changeBrecha("Encargado de Turno")}
            className={`pt-4 font-semibold ${
              brecha === "Encargado de Turno" ? "text-buttonColor font-bold" : "text-gray-400"
            }`}
          >
            Encargado de turno
          </p>
          <div
            className={`w-full h-full ${brecha === "Encargado de Turno" ? "bg-[rgb(248,204,100)]" : "bg-transparent"}`}
          ></div>
          <p
            onClick={() => changeBrecha("Ayudante / Cajero")}
            className={`pr-24 pt-6 font-semibold ${
              brecha === "Ayudante / Cajero" ? "text-buttonColor font-bold" : "text-gray-400"
            }`}
          >
            Ayudante / Cajero
          </p>
          <div
            className={`w-full h-full ${brecha === "Ayudante / Cajero" ? "bg-[rgb(248,204,100)]" : "bg-transparent"}`}
          ></div>

          <div className="col-span-2 justify-self-center flex w-80 self-center items-center">
            <img className="w-24 " src="/assets/images/userIn.png" alt="usuario" />

            <div className="bg-gray-100 rounded-xl shadow-md border-2 border-gray-200 px-4 py-2 ml-4 h-20 text-left w-full">
              <img className="w-4 inline " src="/assets/images/check.png" alt="check" />
              <p className="inline font-bold text-buttonColor pl-2">Ayudante / Cajero</p>
              <p className="text-xs text-gray-500">
                Experiencia: <strong>6 meses</strong>
              </p>
              <p className="text-xs text-gray-500">
                Skills: <strong>9 validadas</strong>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const BottomButton = ({ btnContent }: { btnContent: { text: string; action: () => void } }) => {
  const { text, action } = btnContent;
  return (
    <button onClick={action} className="bottomButton">
      {text}
    </button>
  );
};

const Profile = () => {
  const [currentBtn, setCurrentBtn] = useState({ text: "Crear Brecha", action: () => {} });
  const [brecha, setBrecha] = useState<string | null>(null);
  const user = { name: "Carlos", puesto: "Asistente de tienda" };

  const handleSelect = (option: string) => {
    setBrecha(option);
    setCurrentBtn({
      ...currentBtn,
      text: "Ver brecha",
    });
  };

  return (
    <div className="backTemplateProfile">
      <div className="mainTemplate">
        <div className="flex flex-col ">
          <Header />
          <UserData user={user} brecha={brecha} />
          <Dropdown
            options={[
              "Ayudante / Cajero",
              "Encargado de Turno",
              "Administrador de Personal",
              "Lider de tienda",
              "Asesor de Tienda",
            ]}
            onSelect={handleSelect}
            brecha={brecha}
          />
        </div>
        <ProfileImage brecha={brecha} setBrecha={setBrecha} />
        <BottomButton btnContent={currentBtn} />
      </div>
    </div>
  );
};

export default Profile;
