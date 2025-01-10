import React from "react";
import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
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
            <Route path="/" element={<h1>SLRG</h1>} />
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
