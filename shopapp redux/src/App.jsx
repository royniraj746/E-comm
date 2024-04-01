import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ProductUpload from "./pages/ProductUpload";
import UpdateItem from "./pages/UpdateItem";

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product-Upload"  element={<ProductUpload/>}  />
          <Route path="/update-Product/:id"  element={<UpdateItem/>} />
        </Routes> 
  </div>) 
};

export default App;
