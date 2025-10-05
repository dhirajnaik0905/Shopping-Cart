# Simple Shopping Cart

A minimal full-stack shopping cart application built using **React (TypeScript)** for the frontend and **Node.js + Express** for the backend.

---

## Features

### Frontend
- Displays product list with image, name, and price.
- Add products to cart.
- View and manage cart with:
  - Quantity increase/decrease buttons (+ / -)
  - Delete item button (X)
- Checkout button sends cart data to backend.
- Cart data persists in **localStorage**.

### Backend
- `/products` → Returns a hardcoded JSON list of 10 products.
- `/checkout` → Accepts cart data, logs order to console, and returns success response.

---

## Tech Stack

- **Frontend:** React, TypeScript, Axios, CSS
- **Backend:** Node.js, Express, CORS

---

## Setup Instructions

### Clone the repository

git clone https://github.com/dhirajnaik0905/Shopping-Cart.git
cd simple-shopping-cart

Setup and run backend 

cd backend
npm install
npm start


Server will run at - http://localhost:4000

Setup and run frontend

cd ../frontend
npm install
npm run dev


Frontend runs at - http://localhost:5173

## Design Choices / Assumptions

No database used — products are hardcoded for simplicity.

Cart is managed entirely on the client side using React state and localStorage.

Backend focuses only on demonstrating API endpoints (/products, /checkout).

Simple CSS styling (no external UI framework) to keep it lightweight and readable.