import React, {useState} from "react";
import BildBaderegeln from "./images/Baderegeln.jpg"

export default function Rettungsgriffe() {

    function Navbar(){
        const [activeTab, setActiveTab] = useState('Baywatch-Boje');

        const handleTabClick = (tab) => {
            setActiveTab(tab);
        }

            return (
                <>
                    <div className="navbar">
                        <div
                            className={activeTab === 'Baywatch-Boje' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Baywatch-Boje')}
                        >
                            Transportschwimmen
                        </div>
                        <div
                            className={activeTab === 'Rettungsgurt' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Rettungsgurt')}
                        >
                            Nacken-Stirn-Griff
                        </div>
                        <div
                            className={activeTab === 'Rettungswürfel' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Rettungswürfel')}
                        >
                            Nacken-Griff
                        </div>
                    </div>

                    {/* Hier wird der Inhalt des aktiven Tabs gerendert */}
                    <div className="tab-content">
                        {activeTab === 'Transportschwimmen' && <p>Transportschwimmen.</p>}
                        {activeTab === 'Nacken-Stirn-Griff' && <p>Nacken-Stirn-Griff</p>}
                        {activeTab === 'Nacken-Griff' && <p>Nacken-Groff</p>}
                    </div>
                </>
            );
    }

        return (
            <>
                <h1>Rettungsgriffe</h1>
                <Navbar />
            </>
        );
}

