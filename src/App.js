import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from './screens/Layout';
import Home from './screens/Home';
import About from "./screens/About";
import Contact from "./screens/Contact";
import Shop from "./screens/Shop";
import ProductOverview from "./screens/ProductOverview";
import ShoppingCart from "./components/Product/ShoppingCart";

import AdminPanel from "./components/Admin/AdminPanel";
import SalesTable from "./components/Sales/SalesTable";
import RegistrationForm from "./components/Product/RegistrationForm";
import CustomerReviews from "./components/Product/CustomerReviews";
import ProductDetail from "./components/Product/ProductDetail";
import ProfileIcon from "./components/ProfileIcon";
import UserProfile from "./screens/UserProfile";
import Login from "./screens/Login";
 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/product/:id" element={<ProductOverview />} />
            <Route path="/shopping-cart" element={<ShoppingCart/>}/>
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/sales" element={<SalesTable />} />
            <Route path="/registrationform" element={<RegistrationForm />} />
            <Route path="/CustomerReviews" element={<CustomerReviews />} />
            <Route path="/ProductDetail" element={<ProductDetail />} />
            <Route path="/ProfileIcon" element={<ProfileIcon />} />
            <Route path="/user" element={<UserProfile/>}/>
            <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
