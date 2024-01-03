import { Link, NavLink, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function App() {
  const response = useQuery({
    queryKey: ["Test"],
    queryFn: () => axios.get("https://fakestoreapi.com/products/1"),
  });

  return (
    <div className="font-mono">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
