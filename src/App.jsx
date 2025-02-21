import './reset.css';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage';
import ShopPage from './pages/ShopPage';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './context/CartContext';
import CartPage from './pages/CartPage';
import ServicesPage from './pages/ServicesPage';
import QualityPage from './pages/QualityPage';
import PortfolioPage from './pages/PortfolioPage';
import CardDetails from './pages/CardDetails';
import TeamPage from './pages/TeamPage';
import BlogPage from './pages/BlogPage';
import BlogDetails from './pages/BlogDetails';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import CheckoutPage from './pages/CheckoutPage';
import { SearchProvider } from './context/SearchContext';
function App() {

  return (
    <CartProvider>
      <BrowserRouter>
         <SearchProvider>
      <Header onSearch={(query) => console.log("Шукаємо:", query)} />
           <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/cards/:title" element={<CardDetails />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes> 
        <Footer />
        </SearchProvider>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
