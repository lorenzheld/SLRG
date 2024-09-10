import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Cart from "./Cart";
import Baderegeln from "./Baderegeln";
import RettungsgerTe from "./Rettungsgeräte";
import Rettungsgriffe from "./Rettungsgriffe";

export default function App() {
  return (
    <>
      <div className="content">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<h1>Just skate.</h1>} />
            <Route path="/g" element={<h1>Just guguseli.</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/baderegeln" element={<Baderegeln />} />
            <Route path="/rettungsgeräte" element={<RettungsgerTe />} />
            <Route path="/rettungsgriffe" element={<Rettungsgriffe />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
