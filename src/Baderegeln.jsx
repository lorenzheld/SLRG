import React from "react";
import BildBaderegeln from "./images/baderegeln-dfi.jpg"

export default function Baderegeln() {
    return(
        <>
            <h1 className="title">Baderegeln</h1>
            <img src={BildBaderegeln} height="100%" width="100%" />
        </>
        );
}
