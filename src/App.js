import NavBar from "./components/navbar/NavBar";
import Home from './pages/home/Home'
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <NavBar/>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </div>
  );
}

export default App;
