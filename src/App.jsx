import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { Context } from "./context";
import {  useState } from "react";
import Detail from "./pages/Detail";
import Cartpage from "./pages/Cartpage";
import Card from "./components/Card";

const App = () => {

  const [cart, setCart] = useState( [] );

  return (
    <Context.Provider value={{ cart, setCart }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/carts" element={<Cartpage />} />
          <Route path="/details/:id" element={<Detail/>} />
        </Route>
     </Routes>
    </Context.Provider>
  );
};

export default App;
