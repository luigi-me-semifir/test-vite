// import de structure react
// import des composants
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/productDetail/index.jsx";
import ProductList from "./components/productList/index.jsx";
import ProductForm from "./components/productForm/index.jsx";
import Header from "./components/header";
import Footer from "./components/footer";
import Playground from "./pages/playground/Playground.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/404/NotFound.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/products/new" element={<ProductForm />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/:id/edit" element={<ProductForm />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
