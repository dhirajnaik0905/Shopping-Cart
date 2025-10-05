import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Hardcoded product data
const products = [

  {
    id: 1,
    name: "iPhone 12",
    price: 58000,
    imageUrl: "https://m.media-amazon.com/images/I/61cwywLZR-L._SL1500_.jpg"
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    price: 1299,
    imageUrl: "https://images.unsplash.com/photo-1590658268037-6fdcfb0b8c51"
  },
  {
    id: 3,
    name: "Canon DSLR Camera",
    price: 45000,
    imageUrl: "https://m.media-amazon.com/images/I/61LWTuZObNL._SL1500_.jpg"
  },
  {
    id: 4,
    name: "Mobile Phone",
    price: 14999,
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 5,
    name: "LG Washing Machine",
    price: 32000,
    imageUrl: "https://m.media-amazon.com/images/I/61TfA1t6w-L._SL1500_.jpg"
  },
  {
    id: 6,
    name: "Samsung Refrigerator",
    price: 49000,
    imageUrl: "https://m.media-amazon.com/images/I/71FEs8gJ7tL._SL1500_.jpg"
  },
  {
    id: 7,
    name: "Mi Smart LED TV",
    price: 34000,
    imageUrl: "https://m.media-amazon.com/images/I/71vZypjNkPS._SL1500_.jpg"
  },
  {
    id: 8,
    name: "Sony Home Theatre",
    price: 27000,
    imageUrl: "https://m.media-amazon.com/images/I/71d5fMDvqIL._SL1500_.jpg"
  },
  {
    id: 9,
    name: "Samsung Galaxy Tablet",
    price: 18000,
    imageUrl: "https://m.media-amazon.com/images/I/61vGQNUEsGL._SL1500_.jpg"
  },
  {
    id: 10,
    name: "Apple Mac Mini (M2)",
    price: 69900,
    imageUrl: "https://m.media-amazon.com/images/I/71pcTYT+ICL._SL1500_.jpg"
  }
]


// GET /products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST /checkout
app.post("/checkout", (req, res) => {
  const { items } = req.body;
  console.log("Order received:", items);
  res.json({ message: "Order placed successfully!" });
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
