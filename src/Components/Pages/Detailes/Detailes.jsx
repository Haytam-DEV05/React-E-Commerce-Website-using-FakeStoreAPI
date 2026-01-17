import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import { useContext } from "react";
import { ContextCart } from "../../../Context/ContextCart";

export default function Detailes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(ContextCart);

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);

        fetch(`https://fakestoreapi.com/products/category/${data.category}`)
          .then((res) => res.json())
          .then((products) => {
            const filtered = products.filter((p) => p.id !== data.id);
            setRelatedProducts(filtered);
          });
      });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <section id="productDetaile">
      {/* PRODUCT DETAILS */}
      <button className="btn btn-primary mb-10" onClick={() => navigate("/")}>
        return Home
      </button>
      <div className="mb-12 bg-[var(--card)] p-6 rounded shadow">
        <div className="md:grid grid-cols-2 gap-10">
          <img
            src={product.image}
            alt={product.title}
            className="h-[300px] object-contain mx-auto"
          />

          <div>
            <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
            <p className="text-sm opacity-80 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-6">{product.price} DH</p>

            <button
              className="bg-[var(--buttons)] text-white px-6 py-2 rounded hover:bg-[var(--hover)] cursor-pointer transition-all duration-200"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <h3 className="text-xl font-semibold mb-6">Related Products</h3>

      <div className="md:grid grid-cols-4 gap-7">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="my-6 bg-[var(--card)] p-3 shadow hover:shadow-lg cursor-pointer transition"
            onClick={() => navigate(`/Detailes/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-[160px] object-contain mx-auto mb-2"
            />
            <h4 className="text-sm font-semibold line-clamp-2">
              {product.title}
            </h4>
            <p className="font-bold mt-2">{product.price} DH</p>
          </div>
        ))}
      </div>
    </section>
  );
}
