import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import ProductDisplay from "./components/ProductDisplay";
import GetStarted from "./pages/GetStarted";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<ProductDisplay />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
