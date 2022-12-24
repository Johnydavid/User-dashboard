import "./App.css";

import React from "react";
import data from "./Data.json";

import ShoppingCart from "./ShoppingCart";

export default function App() {
  return (
    <div>
      <ShoppingCart data={data} />
    </div>
  );
}
