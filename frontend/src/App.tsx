import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartItem extends Product {
  quantity: number;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQty = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Delete item from cart
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Checkout
  const checkout = async () => {
    try {
      const response = await axios.post("http://localhost:4000/checkout", {
        items: cart,
      });
      alert(response.data.message);
      setCart([]);
      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2>Simple Shopping Cart</h2>

      {/* Product Grid */}
      <div className="products-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.imageUrl} alt={p.name} />
            <h2>{p.name}</h2>
            <p>₹{p.price}</p>
            <button className="add-btn" onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <div className="quantity-controls">
                  <button className="button-control" onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="button-control" onClick={() => increaseQty(item.id)}>+</button>
                </div>
                <span>₹{item.price * item.quantity}</span>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </button>
              </div>
            ))}
            <div className="total">Total: ₹{total}</div>
            <button className="checkout-btn" onClick={checkout}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
