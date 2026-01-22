import { useState } from "react";
import Theme from "../Theme/Theme";
import { useContext } from "react";
import { ContextCart } from "../../../Context/ContextCart";

// REACT-ICONS =>
import { CiShoppingCart } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const { cartItems, totalPrice, removeFromCart, ClearCart } =
    useContext(ContextCart);
  return (
    <>
      <nav className="fixed w-full right-0 left-0 backdrop-blur-md z-90 shadow-md text-(--text)">
        <div className="flex flex-row justify-around items-center min-h-17.5">
          <div className="logo">
            <h3 className="text-[25px] font-semibold cursor-pointer">
              Ecommerce
            </h3>
          </div>
          <div className="flex items-center">
            <div className="mr-5 cursor-pointer cart">
              <div
                className="icon-cart-shop"
                onClick={() => setOpenCart(!openCart)}
              >
                <CiShoppingCart size={30} />
                <div className="length-cart">{cartItems.length}</div>
              </div>
              {/* CART-ITEMS */}
              <div className={`cart-items ${openCart ? "block" : "hidden"}`}>
                {/* TOP CART */}
                <div className="top-cart border-b-2 border-(--bg) pb-2">
                  <div className="mt-3 ml-3" onClick={() => setOpenCart(false)}>
                    <FaXmark size={25} />
                  </div>
                  <p className="text-[20px] font-semibold text-center my-2">
                    Cart-Item
                  </p>
                  <button
                    className="bg-blue-300 px-5 py-1 cursor-pointer block mx-auto rounded-md"
                    onClick={() => {
                      if (confirm("Are You Sure?")) {
                        ClearCart();
                      }
                    }}
                  >
                    Clear Cart
                  </button>
                </div>
                {/* ITEMS-CART */}
                {/* ======= */}
                <div className="p-3 overflow-y-auto max-h-[70vh]">
                  {cartItems.length === 0 ? (
                    <p className="text-center mt-10">Cart is empty</p>
                  ) : (
                    cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 mb-4 border-b pb-2"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12.5 h-12.5 object-contain"
                        />

                        <div className="flex-1">
                          <h4 className="text-sm line-clamp-1">{item.title}</h4>
                          <p className="text-sm">
                            {item.price} DH × {item.qty}
                          </p>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-sm cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* ======= */}
                {/* ITEMS-CART */}
                {/* BOOTOM CART */}
                <div className="bottom-cart border-t-2 border-(--bg)">
                  <p className="text-[20px] text-center mb-2">
                    <span className="primary">Price :</span>
                    {totalPrice.toFixed(2)} DH
                  </p>
                  <button className="bg-(--buttons) py-1 text-white cursor-pointer rounded-2xl shadow-md hover:-translate-y-2 px-5 mx-auto block transition-all duration-200">
                    checkout
                  </button>
                </div>
              </div>
              {/* CART-ITEMS */}
            </div>
            <Theme />
          </div>
        </div>
      </nav>
    </>
  );
}
