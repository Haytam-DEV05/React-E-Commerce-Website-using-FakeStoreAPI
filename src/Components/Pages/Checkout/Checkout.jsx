import { useContext } from "react";
import { ContextCart } from "../../../Context/ContextCart";

export default function Checkout() {
  const { cartItems, totalPrice } = useContext(ContextCart);

  return (
    <div className="p-6">
      <h1 className="text-[40px] font-semibold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">The Cart Is Empty...</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4 p-5 max-h-[70vh] overflow-y-auto">
            {cartItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-(--card) p-4 rounded shadow flex gap-4 items-center"
                >
                  <div className="w-24 h-24">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="font-bold mt-1">{item.price} DH</p>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <div className="font-bold">
                    {item.price * item.qty} DH
                  </div>
                </div>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="bg-(--card) p-6 rounded shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-2">
              <span>Total items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between font-bold text-lg mb-6">
              <span>Total Price</span>
              <span>{totalPrice} DH</span>
            </div>

            <button className="w-full bg-(--buttons) text-white py-3 rounded hover:opacity-90 transition">
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
