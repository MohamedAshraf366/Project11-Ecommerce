import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Contact from './pages/contact';
import About from './pages/about';
import Header from './pages/header';
import LatestProduct from "./pages/latestProducts";
import SpecificProduct from './pages/specificProduct';
import ProductsPage from './pages/productsPage';
import PageNotFound from './pages/pageNotFound';
import Login from './pages/login';
import Register from './pages/register';
import Footer from './pages/footer';
import Cart from './pages/cart';
import { Checkout } from './pages/Checkout';

function App() {
  return (
    <Router basename="/Project11-Ecommerce">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<LatestProduct />} />
        <Route path='/product/:id' element={<SpecificProduct />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<SpecificProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
