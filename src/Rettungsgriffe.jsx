import React, {useState} from "react";

export default function Rettungsgriffe() {

    function Navbar(){
        const [activeTab, setActiveTab] = useState('Transportschwimmen');

        const handleTabClick = (tab) => {
            setActiveTab(tab);
        }

            return (
                <>
                    <div className="navbar">
                        <div
                            className={activeTab === 'Transportschwimmen' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Transportschwimmen')}
                        >
                            Transportschwimmen
                        </div>
                        <div
                            className={activeTab === 'Nacken-Stirn-Griff' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Nacken-Stirn-Griff')}
                        >
                            Nacken-Stirn-Griff
                        </div>
                        <div
                            className={activeTab === 'Nacken-Griff' ? 'active-tab' : 'tab'}
                            onClick={() => handleTabClick('Nacken-Griff')}
                        >
                            Nacken-Griff
                        </div>
                    </div>

                    {/* Hier wird der Inhalt des aktiven Tabs gerendert */}
                    <div className="tab-content">
                        {activeTab === 'Transportschwimmen' && (
                            <div>
                                <h3>Transportschwimmen</h3>
                                <p>Das Transportschwimmen wird verwendet, um eine Person sicher an einen sicheren Ort zu
                                    bringen. Dabei hält der Retter den Kopf der zu rettenden Person über Wasser und
                                    schwimmt mit kräftigen Beinbewegungen, um eine gleichmäßige Geschwindigkeit zu
                                    halten.</p>
                                <p><strong>Anwendung:</strong> Diese Technik eignet sich besonders gut für schwache oder
                                    bewusstlose Personen, da der Kopf stabilisiert wird und das Atmen erleichtert wird.
                                </p>
                            </div>
                        )}
                        {activeTab === 'Nacken-Stirn-Griff' && (
                            <div>
                                <h3>Nacken-Stirn-Griff</h3>
                                <p>Der Nacken-Stirn-Griff ist ein Griff zur Fixierung des Kopfes, wobei eine Hand an die
                                    Stirn der verunglückten Person gelegt wird, um den Kopf über Wasser zu halten, und
                                    die andere Hand den Nacken unterstützt.</p>
                                <p><strong>Anwendung:</strong> Dieser Griff eignet sich für Personen, die wenig
                                    Gegenwehr leisten, und bietet eine effektive Methode, um den Kopf zu stabilisieren
                                    und sicher an die Oberfläche zu bringen.</p>
                            </div>
                        )}
                        {activeTab === 'Nacken-Griff' && (
                            <div>
                                <h3>Nacken-Griff</h3>
                                <p>Beim Nacken-Griff wird die verunglückte Person am Nacken gefasst und stabilisiert,
                                    sodass sie ruhig gehalten und sicher transportiert werden kann.</p>
                                <p><strong>Anwendung:</strong> Ideal für die Rettung von Personen, die Panik zeigen oder
                                    sich aktiv bewegen, da der Griff mehr Kontrolle über den Körper der Person
                                    ermöglicht.</p>
                            </div>
                        )}
                    </div>

                </>
            );
    }

    return (
        <>
            <h1>Rettungsgriffe</h1>
            <Navbar/>
        </>
    );
}

