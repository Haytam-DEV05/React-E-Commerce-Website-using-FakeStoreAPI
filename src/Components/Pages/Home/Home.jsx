import { useEffect, useState } from "react";
import ProductCard from "../../Products/ProductCard";

export default function Home() {
  const productsInPerPage = 8;
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageProducts, setPageProducts] = useState(
    products.slice(0, productsInPerPage),
  );

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setPageProducts(data.slice(0, productsInPerPage));
      });
  }, []);

  const handleCurrentPage = (id) => {
    setCurrentPage(id);
    const start = (id - 1) * productsInPerPage;
    const end = start + productsInPerPage;
    setPageProducts(products.slice(start, end));
  };

  const makeButtons = () => {
    const lengthButtons = Array.from(
      {
        length: Math.ceil(products.length / productsInPerPage),
      },
      (_, index) => index + 1,
    );
    const buttons = lengthButtons.map((btn) => {
      return (
        <button
          key={btn}
          className={
            currentPage === btn
              ? "bg-[gray] mx-2 py-1 px-3 rounded-full cursor-pointer"
              : "bg-(--buttons) mx-2 py-1 px-3 rounded-full cursor-pointer shadow-xl hover:bg-(--hover) hover:text-(--bg) hover:-translate-y-2 transition-all duration-200"
          }
          onClick={() => handleCurrentPage(btn)}
        >
          {btn}
        </button>
      );
    });
    return buttons;
  };

  return (
    <section id="home" className="fade-in">
      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {pageProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="min-h-25 min-w-75 mt-5">{makeButtons()}</div>
    </section>
  );
}
