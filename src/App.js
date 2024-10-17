import './App.css';
import {Route, Routes} from "react-router-dom"
import ProductDetails from "./Pages/ProductDetails"
import CustomerDetails from "./Pages/CustomerDetails"
import AddProducts from './Pages/AddProducts';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
       <Navbar />
       <Routes>
         {/* <Route exact path='/' element={<ProductDetails />} /> */}
         <Route exact path='/' element={<CustomerDetails />} />
         <Route path='add-products' element={<AddProducts />} />
       </Routes>
    </div>
  );
}

export default App;
