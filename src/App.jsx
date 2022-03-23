import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import Agenda from "./pages/agenda";
import Keranjang from "./pages/keranjang";
import './App.css';

function App() {
  return (

    <div className="flex justify-center p-6 w-screen h-screen bg-gray-200 overflow-y-auto">
      <div className="max-w-full">
        <div className="flex items-center justify-center mb-4 text -xs text-gray-600-font-semibold uppercase tracking-wide ">
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/"
          >
            Home
          </Link>
          <Link
            className="mx-2 px-4 py-2 rounded-x1 hover:bg-gray-100 transition-all ease-in-out"
            to="/agenda"
          >
            Agenda
          </Link>
          <Link to="/keranjang" className="nav-link"

          >
            Keranjang
          </Link>
        </div>
        <div className="p-6 w-full bg-white rounded-x1 shadow-lg">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/agenda" element={<Agenda />}></Route>
            <Route path="/keranjang" element={<Keranjang />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;