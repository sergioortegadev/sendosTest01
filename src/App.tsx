import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Password from "./components/Password";
import Register from "./components/Register";
import Security from "./components/Security";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/password" element={<Password />} />
          <Route path="/register" element={<Register />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
