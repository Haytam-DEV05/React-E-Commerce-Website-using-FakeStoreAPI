import { useContext } from "react";
import { ContextCart } from "../../Context/ContextCart";
import { useNavigate } from "react-router";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(ContextCart);

  return (
    <div
      onClick={() => navigate(`/Detailes/${product.id}`)}
      className="bg-(--card) p-4 rounded shadow hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      <div className="h-45 mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>

      <h3 className="text-sm font-semibold line-clamp-2 mb-2">
        {product.title}
      </h3>

      <p className="font-bold mb-3">{product.price} DH</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="bg-(--buttons) text-white py-2 rounded"
      >
        Add to cart
      </button>
    </div>
  );
}
