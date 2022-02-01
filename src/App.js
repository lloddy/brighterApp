import NavBar from "./components/navbar/NavBar";
import Home from './pages/home/Home'
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Settings />
    </div>
  );
}

export default App;
