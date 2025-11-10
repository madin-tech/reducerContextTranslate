import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Context } from "./context";
import { useState } from "react";
import Cartpage from "./pages/Cartpage";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <Context.Provider value={{ cart, setCart }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<Cartpage />} />
        </Route>

      </Routes>
    </Context.Provider>
  );
};

export default App;
