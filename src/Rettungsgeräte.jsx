import React, { useState } from "react";
import Rescuebrett from "./images/RtgrT/rescue-brett.png";
import RescuebrettAnleitung from "./images/RtgrT/rescuebrett-anleitung.png";
import Rettungsboje from "./images/RtgrT/Rettungsboje.jpg";
import RettungsbojeAnleitung from "./images/RtgrT/Rettungsboje-Anleitung.jpg";
import Gurtretter from "./images/RtgrT/Gurtretter.jpg";
import GurtretterAnleitung from "./images/RtgrT/Gurtretter-Anleitung.jpg";
import GurtretterInAction from "./images/RtgrT/Gurtretter-in-Action.jpg";
import Rettungsfwuerfel from "./images/RtgrT/Rettungswürfel.png";
import RettungswuerfelBild from "./images/RtgrT/Rettungswürfel-Bild.jpg";
import Wurfsack from "./images/RtgrT/Wurfsack.png";
import WurfsackAnleitung from "./images/RtgrT/Wurfsack-Verwendung.jpg";
import Rettungsring from "./images/RtgrT/Rettungsring.png";
import RettungsringAnleitung from "./images/RtgrT/Rettungsring-verwendung.jpg";


export default function RettungsGerTe() {
    function Navbar() {
        const [activeTab, setActiveTab] = useState("Rettungsboje");

        const handleTabClick = (tab) => {
            setActiveTab(tab);
        };

        return (
            <>
                <div className="navbar">
                    <div
                        className={activeTab === "Rettungsboje" ? "active-tab" : "tab"}
                        onClick={() => handleTabClick("Rettungsboje")}
                    >
                        Rettungsboje
                    </div>
                    <div
                        className={activeTab === "Gurtretter" ? "active-tab" : "tab"}
                        onClick={() => handleTabClick("Gurtretter")}
                    >
                        Gurtretter
                    </div>
                    <div
                        className={activeTab === "Rettungswürfel" ? "active-tab" : "tab"}
                        onClick={() => handleTabClick("Rettungswürfel")}
                    >
                        Rettungswürfel
                    </div>
                    <div
                        className={activeTab === "Rescue-Brett" ? "active-tab" : "tab"}
                        onClick={() => handleTabClick("Rescue-Brett")}
                    >
                        Rescue-Brett
                    </div>
                    <div
                        className={activeTab === "Wurfsack" ? "active-tab" : "tab"}
                        onClick={() => handleTabClick("Wurfsack")}
                    >
                        Wurfsack
                    </div>
                    <div
                        className={activeTab === "Rettungsring" ? "active-tab" : "tab"}
                        onClick={() => handleTabClick("Rettungsring")}
                    >
                        Rettungsring
                    </div>
                </div>

                <div className="tab-content">
                    {activeTab === "Rettungsboje" && (
                        <div className="tab-item">
                            <div className="content">
                                <h2>Rettungsboje</h2>
                                <p>
                                    Die Rettungsboje wird vor allem im See eingesetzt. Im Gegensatz zum
                                    Gurtretter besteht diese aus einer starren Boje mit seitlichen
                                    Haltegriffen und einem Seil und einer Schlaufe. Mit diesem Gerät
                                    kann man Personen abschleppen, die noch bei Bewusstsein sind, aber
                                    auch Bewusstlose.
                                </p>
                                <h3>Verwendung</h3>
                                <p>
                                    Die Rettungsboje wird beim Hinschwimmen zu der verunfallten Person
                                    immer nachgezogen. Bei der verunfallten angekommen, hat die rettende
                                    Person grundsätzlich zwei Möglichkeiten...
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={Rettungsboje} alt="Bild einer Rettungsboje" />
                                <img
                                    src={RettungsbojeAnleitung}
                                    alt="Anleitung Rettungsboje"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === "Gurtretter" && (
                        <div className="tab-item">
                            <div className="content">
                                <h2>Gurtretter</h2>
                                <p>
                                    Der Gurtretter wird vor allem in Seen eingesetzt. Er ist ein
                                    einfaches und vielseitig einsetzbares Rettungsgerät. Er besteht aus
                                    einem länglichen, flexiblen Auftriebskörper. An einem der Enden
                                    befindet sich ein Karabinerhaken, am anderen Ende Ringe und ein Band
                                    mit Schlaufe.
                                </p>
                                <h3>Verwendung</h3>
                                <p>
                                    Der Auftriebskörper wird dem Rettling vom Ufer aus hingestreckt oder
                                    hingeworfen. Bei größeren Distanzen kann der Gurtretter zur
                                    Unterstützung der rettenden Person mitgenommen werden...
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={Gurtretter} alt="Bild eines Gurtretters" />
                                <img
                                    src={GurtretterAnleitung}
                                    alt="Anleitung Gurtretter"
                                />
                                <img
                                    src={GurtretterInAction}
                                    alt="Gurtretter in Aktion"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === "Rettungswürfel" && (
                        <div className="tab-item">
                            <div className="content">
                                <h2>Rettungswürfel</h2>
                                <p>
                                    Der Rettungswürfel besteht aus einem Würfel aus Schaumstoff, welcher
                                    von einem Netz aus rotem Seil umgeben ist. Der Vorteil des
                                    Rettungswürfels ist, dass er relativ leicht zu werfen ist...
                                </p>
                                <h3>Verwendung</h3>
                                <p>
                                    Man nimmt das Netz in die Hand und schwingt den Sack 1-2 Mal hin und
                                    her. Dabei hebt man seine Hand und zielt auf den Rettling...
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={Rettungsfwuerfel} alt="Verwendung Rettungswürfel" />
                                <img
                                    src={RettungswuerfelBild}
                                    alt="Bild Rettungswürfel"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === "Rescue-Brett" && (
                        <div className="tab-item">
                            <div className="content">
                                <h2>Rescue-Brett</h2>
                                <p>
                                    Das Rescue-Brett ist ähnlich wie ein Surfbrett. Es hat eine Fläche,
                                    auf der der Retter liegt und mit den Händen paddelt. Vorne hat es
                                    reichlich Platz für eine weitere Person...
                                </p>
                                <h3>Verwendung</h3>
                                <p>
                                    Die rettende Person legt sich bäuchlings aufs Brett. Sie verlagert
                                    ihr Gewicht so, dass der Bug des Bretts leicht aus dem Wasser ragt...
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={Rescuebrett} alt="Bild des Rescue-Bretts" />
                                <img
                                    src={RescuebrettAnleitung}
                                    alt="Anleitung Rescue-Brett"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === "Wurfsack" && (
                        <div className="tab-item">
                            <div className="content">
                                <h2>Wurfsack</h2>
                                <p>
                                    Der Wurfsack besteht aus einem Sack gefertigt aus reißfestem Stoff,
                                    einem Auftriebskörper und einem Schwimmseil. Der Vorteil des
                                    Wurfsacks ist, dass er kompakt verstaut ist und sich präzise werfen
                                    lässt...
                                </p>
                                <h3>Verwendung</h3>
                                <p>
                                    Unmittelbar vor dem Einsatz wird der Wurfsack geöffnet, so dass das
                                    Seil ungehindert aus dem Beutel gleiten kann. Der Retter hält den
                                    Wurfsack in der Wurfhand...
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={Wurfsack} alt="Bild eines Wurfsacks" />
                                <img
                                    src={WurfsackAnleitung}
                                    alt="Anleitung Wurfsack"
                                />
                            </div>
                        </div>
                    )}
                    {activeTab === "Rettungsring" && (
                        <div className="tab-item">
                            <div className="content">
                                <h2>Rettungsring</h2>
                                <p>
                                    Der Rettungsring besteht aus hartem Schaumstoff in Form eines Rings.
                                    Dieser ist meistens rot-weiß gefärbt. Um den Ring herum ist noch ein
                                    Seil, welches dem Rettling hilft, sich festzuhalten...
                                </p>
                                <h3>Verwendung</h3>
                                <p>
                                    Man wirft den Rettungsring ähnlich wie den Rettungswürfel. Man greift
                                    den Ring, schwingt ihn und zielt auf den Rettling...
                                </p>
                            </div>
                            <div className="image-container">
                                <img src={Rettungsring} alt="Bild zweier Rettungsringe" />
                                <img
                                    src={RettungsringAnleitung}
                                    alt="Anleitung Rettungsring"
                                />
                            </div>
                        </div>
                    )}
                </div>
            </>
        );
    }

    return (
        <>
            <h1>Rettungsgeräte</h1>
            <Navbar />
        </>
    );
}
