import { useState, useEffect } from "react";
import CartContext from "./CartContext";

function CartProvider({ children }) {
  // Load cart from localStorage (or start empty)
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  //Add or increase product in Cart
  function addToCart(product, qty = 1){
    setCart((prev) => {

      //if product already exist in cart
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }

      //if product do not exist
      return [...prev, { ...product, qty }];
    });
  }

  //Update quantity directly
  function updateQty(id, qty) {
    if(qty <= 0) {
      return removeFromCart(id);
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  }

  //Remove from cart
  function removeFromCart(id) {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  //Clear cart
  function clearCart() {
    setCart([]);
    localStorage.removeItem("cart");
  }

  return(
    <CartContext.Provider value={{ cart, addToCart, updateQty, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;