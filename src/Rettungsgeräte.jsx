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
                            <p>Die Baywatch-Boje ist ein schwimmfähiges Rettungsgerät, das ideal zur schnellen Rettung von Personen in Wasserrettungsszenarien geeignet ist.</p>
                            <ul>
                                <li>Material: Kunststoff</li>
                                <li>Farbe: Rot</li>
                                <li>Gewicht: 1.5 kg</li>
                                <li>Eigenschaft: Leicht zu werfen und zu transportieren</li>
                                <li>Einsatzgebiet: Schwimmbäder, Strände</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'Rettungsgurt' && (
                        <div>
                            <h2>Rettungsgurt</h2>
                            <p>Der Rettungsgurt ermöglicht eine sichere Rettung durch Befestigung an der geretteten Person.</p>
                            <ul>
                                <li>Material: Nylon</li>
                                <li>Farbe: Gelb</li>
                                <li>Gewicht: 0.5 kg</li>
                                <li>Eigenschaft: Schnell anlegbar und sicher</li>
                                <li>Einsatzgebiet: Wasserrettung, Hochseilrettung</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'Rettungswürfel' && (
                        <div>
                            <h2>Rettungswürfel</h2>
                            <p>Ein vielseitig einsetzbares Gerät, das dank seiner Form und Schwimmfähigkeit besonders einfach zu handhaben ist.</p>
                            <ul>
                                <li>Material: Schaumstoff</li>
                                <li>Farbe: Blau</li>
                                <li>Gewicht: 0.8 kg</li>
                                <li>Eigenschaft: Einfach zu greifen und zu halten</li>
                                <li>Einsatzgebiet: Seen, Pools</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'Rescue-Brett' && (
                        <div>
                            <h2>Rescue-Brett</h2>
                            <p>Das Rescue-Brett ist ideal zur Stabilisierung von Verunglückten im Wasser und Transport zurück an Land.</p>
                            <ul>
                                <li>Material: Fiberglas</li>
                                <li>Farbe: Weiß</li>
                                <li>Gewicht: 7 kg</li>
                                <li>Eigenschaft: Hohe Stabilität und Tragkraft</li>
                                <li>Einsatzgebiet: Offenes Gewässer, Strömungen</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'Wurfsack' && (
                        <div>
                            <h2>Wurfsack</h2>
                            <p>Der Wurfsack wird verwendet, um Personen eine schwimmfähige Leine zuzuwerfen.</p>
                            <ul>
                                <li>Material: Nylon</li>
                                <li>Farbe: Orange</li>
                                <li>Gewicht: 0.3 kg</li>
                                <li>Eigenschaft: Sehr präzise zu werfen</li>
                                <li>Einsatzgebiet: Flüsse, Bäche</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === 'Rettungsring' && (
                        <div>
                            <h2>Rettungsring</h2>
                            <p>Der Rettungsring ist ein bewährtes und langlebiges Gerät zur Rettung von Personen im Wasser.</p>
                            <ul>
                                <li>Material: Kunststoff</li>
                                <li>Farbe: Weiß und Rot</li>
                                <li>Gewicht: 2 kg</li>
                                <li>Eigenschaft: Einfach zu werfen, hohe Sichtbarkeit</li>
                                <li>Einsatzgebiet: Seen, Meere, Schiffe</li>
                            </ul>
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
