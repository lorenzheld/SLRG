import React, { useState } from "react";

export default function RettungsgerTe() {

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
                    {activeTab === 'Baywatch-Boje' && <p>Inhalt der Baywatch-Boje.</p>}
                    {activeTab === 'Rettungsgurt' && <p>Inhalt des Rettungsgurtes.</p>}
                    {activeTab === 'Rettungswürfel' && <p>Inhalt des Rettungswürfels.</p>}
                    {activeTab === 'Rescue-Brett' && <p>Inhalt des Rescue-Brettes.</p>}
                    {activeTab === 'Wurfsack' && <p>Inhalt des Wurfsacks.</p>}
                    {activeTab === 'Rettungsring' && <p>Inhalt des Rettungsrings.</p>}
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
