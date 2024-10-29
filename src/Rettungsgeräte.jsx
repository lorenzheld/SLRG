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
                    {activeTab === 'Baywatch-Boje' && (
  <div>
    <h2>Baywatch-Boje</h2>
    <p>Die Baywatch-Boje ist ein schwimmfähiges Rettungsgerät, das in vielen Rettungsszenarien verwendet wird.</p>
    <ul>
      <li>Material: Kunststoff</li>
      <li>Farbe: Rot</li>
      <li>Gewicht: 1.5 kg</li>
    </ul>
  </div>
)}
{activeTab === 'Rettungsgurt' && (
  <div>
    <h2>Rettungsgurt</h2>
    <p>Der Rettungsgurt wird verwendet, um Personen aus gefährlichen Situationen zu retten.</p>
    <ul>
      <li>Material: Nylon</li>
      <li>Farbe: Gelb</li>
      <li>Gewicht: 0.5 kg</li>
    </ul>
  </div>
)}
{activeTab === 'Rettungswürfel' && (
  <div>
    <h2>Rettungswürfel</h2>
    <p>Der Rettungswürfel ist ein vielseitiges Rettungsgerät, das in verschiedenen Situationen eingesetzt werden kann.</p>
    <ul>
      <li>Material: Schaumstoff</li>
      <li>Farbe: Blau</li>
      <li>Gewicht: 0.8 kg</li>
    </ul>
  </div>
)}
{activeTab === 'Rescue-Brett' && (
  <div>
    <h2>Rescue-Brett</h2>
    <p>Das Rescue-Brett ist ein stabiles Rettungsgerät, das für die Rettung im Wasser verwendet wird.</p>
    <ul>
      <li>Material: Fiberglas</li>
      <li>Farbe: Weiß</li>
      <li>Gewicht: 7 kg</li>
    </ul>
  </div>
)}
{activeTab === 'Wurfsack' && (
  <div>
    <h2>Wurfsack</h2>
    <p>Der Wurfsack ist ein einfaches, aber effektives Rettungsgerät, das in Notfällen verwendet wird.</p>
    <ul>
      <li>Material: Nylon</li>
      <li>Farbe: Orange</li>
      <li>Gewicht: 0.3 kg</li>
    </ul>
  </div>
)}
{activeTab === 'Rettungsring' && (
  <div>
    <h2>Rettungsring</h2>
    <p>Der Rettungsring ist ein klassisches Rettungsgerät, das in vielen Rettungsszenarien verwendet wird.</p>
    <ul>
      <li>Material: Kunststoff</li>
      <li>Farbe: Weiß und Rot</li>
      <li>Gewicht: 2 kg</li>
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
