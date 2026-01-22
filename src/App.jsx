import Footer from "./Components/Templates/Footer/Footer";
import Header from "./Components/Templates/Header/Header";
import { CartProvider } from "./Context/ContextCart";

export default function App() {
  return (
    <>
      <CartProvider>
        <Header />
      </CartProvider>
      <Footer />
    </>
  );
}
