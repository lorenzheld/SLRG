import React, { useState } from "react";

export default function RettungsGerTe() {
    function Navbar() {
        const [activeTab, setActiveTab] = useState('Baywatch-Boje');

        const handleTabClick = (tab) => {
            setActiveTab(tab);
        };

        return (
            <>
                <div className="navbar">
                    <div
                        className={activeTab === 'Baywatch-Boje' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Baywatch-Boje')}
                    >
                        Baywatch-Boje
                    </div>
                    <div
                        className={activeTab === 'Rettungsgurt' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Rettungsgurt')}
                    >
                        Rettungsgurt
                    </div>
                    <div
                        className={activeTab === 'Rettungswürfel' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Rettungswürfel')}
                    >
                        Rettungswürfel
                    </div>
                    <div
                        className={activeTab === 'Rescue-Brett' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Rescue-Brett')}
                    >
                        Rescue-Brett
                    </div>
                    <div
                        className={activeTab === 'Wurfsack' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Wurfsack')}
                    >
                        Wurfsack
                    </div>
                    <div
                        className={activeTab === 'Rettungsring' ? 'active-tab' : 'tab'}
                        onClick={() => handleTabClick('Rettungsring')}
                    >
                        Rettungsring
                    </div>
                </div>

                {/* Hier wird der Inhalt des aktiven Tabs gerendert */}
                <div className="tab-content">
                    {activeTab === 'Baywatch-Boje' && (
                        <div>
                            <h2>Baywatch-Boje</h2>
                        </div>
                    )}
                    {activeTab === 'Rettungsgurt' && (
                        <div>
                            <h2>Rettungsgurt</h2>
                        </div>
                    )}
                    {activeTab === 'Rettungswürfel' && (
                        <div>
                            <h2>Rettungswürfel</h2>
                        </div>
                    )}
                    {activeTab === 'Rescue-Brett' && (
                        <div>
                            <h2>Rescue-Brett</h2>
                            <p>
                                Das Rescue-Brett ist ähnlich wie ein Surfbrett. Es hat eine Fläche, auf der der Retter liegt und
                                mit den Händen paddelt. Vorne hat es noch reichlich Platz für eine weitere Person. Mit dem Rescue-Brett
                                kann eine Bewusstlose, so wie eine bewusste Person abgeschleppt werden. Das Brett wird eigentlich nur
                                in Seen verwendet. Mit dem Brett ist man schnell unterwegs und kann jede Person einfach und schnell abschleppen.
                            </p>
                            <img src="/images/RtgrT/rescue-brett.png" alt="Bild des Rescue-Bretts" />

                            <h3>Verwendung</h3>
                            <p>
                                Die rettende Person legt sich bäuchlings aufs Brett. Sie verlagert ihr Gewicht so, dass der Bug (hintere Teil) des
                                Bretts leicht aus dem Wasser ragt. Zum Antreiben werden die Arme entlang der Seite des Bretts gezogen. Sobald man
                                bei der Person angekommen ist, lässt man sich ins Wasser fallen, so dass sich das Brett auch dreht. Dann nimmt man
                                die Person unter den Achseln und legt sie auf das Brett. Mit seinem Körpergewicht dreht man dann das Brett, so dass
                                die Person nun auf dem Brett liegt und schwimmt, zurück.
                            </p>
                            <img src="/images/RtgrT/rescuebrett-anleitung.png" alt="Anleitung zur Verwendung des Rescue-Bretts" />
                        </div>
                    )}
                    {activeTab === 'Wurfsack' && (
                        <div>
                            <h2>Wurfsack</h2>
                        </div>
                    )}
                    {activeTab === 'Rettungsring' && (
                        <div>
                            <h2>Rettungsring</h2>
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
