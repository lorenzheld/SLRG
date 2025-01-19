import React from "react";
import { Link } from "react-router-dom";
import BaderegelnImg from "./images/Baderegeln.png";
import RettungsgeräteImg from "./images/rettungsgeräte.jpg";
import RettungsgriffeImg from "./images/rettungsgriffe.png";

export default function Home() {
    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>Willkommen auf der SLRG Webseite</h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "30px", textAlign: "center" }}>
                Auf dieser Webseite erfahren Sie alles Wissenswerte über Baderegeln, Rettungsgeräte und Rettungsgriffe.</p>
            <div>
                <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", textAlign: "center" }}>Erkunden Sie unsere Inhalte:</h2>
                <nav style={{ display: "flex", justifyContent: "space-around", backgroundColor: "#f0f0f0", padding: "10px", borderRadius: "15px", border: "2px solid #ccc" }}>
                    <Link to="/baderegeln" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ textAlign: "center" }}>
                            <img src={BaderegelnImg} alt="Baderegeln" style={{ maxWidth: "100px", marginBottom: "10px" }} />
                            <div style={{ padding: "10px 20px", fontSize: "1rem", fontWeight: "bold", backgroundColor: "#bbb", borderRadius: "15px", cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", color: "#000" }}>
                                Baderegeln
                            </div>
                        </div>
                    </Link>
                    <Link to="/rettungsgeräte" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ textAlign: "center" }}>
                            <img src={RettungsgeräteImg} alt="Rettungsgeräte" style={{ maxWidth: "100px", marginBottom: "10px" }} />
                            <div style={{ padding: "10px 20px", fontSize: "1rem", fontWeight: "bold", backgroundColor: "#bbb", borderRadius: "15px", cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", color: "#000" }}>
                                Rettungsgeräte
                            </div>
                        </div>
                    </Link>
                    <Link to="/rettungsgriffe" style={{ textDecoration: "none", color: "black" }}>
                        <div style={{ textAlign: "center" }}>
                            <img src={RettungsgriffeImg} alt="Rettungsgriffe" style={{ maxWidth: "100px", marginBottom: "10px" }} />
                            <div style={{ padding: "10px 20px", fontSize: "1rem", fontWeight: "bold", backgroundColor: "#bbb", borderRadius: "15px", cursor: "pointer", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)", color: "#000" }}>
                                Rettungsgriffe
                            </div>
                        </div>
                    </Link>
                </nav>
            </div>
        </div>
    );
}
