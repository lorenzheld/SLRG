import React, { useState } from "react";
import BildBaderegeln from "./images/baderegeln-dfi.jpg";
import Video from "./video/Baderegeln_Alle.mp4";

export default function Baderegeln() {
    const [activeTab, setActiveTab] = useState('Text');

    const handleTabClick = (tab) => setActiveTab(tab);

    return (
        <>
            <h1 className="title">Baderegeln</h1>
            <div className="navbar">
                <div
                    className={activeTab === 'Text' ? 'active-tab' : 'tab'}
                    onClick={() => handleTabClick('Text')}
                >
                    Text
                </div>
                <div
                    className={activeTab === 'Video' ? 'active-tab' : 'tab'}
                    onClick={() => handleTabClick('Video')}
                >
                    Video
                </div>
            </div>
            <div className="tab-content">
                {activeTab === 'Text' && (
                    <>
                        <h2>Baderegeln</h2>
                        <img src={BildBaderegeln} alt="Baderegeln" height="100%" width="100%" />
                    </>
                )}
                {activeTab === 'Video' && (
                    <div className="video-container">
                        <iframe
                            src={Video}
                            title="Baderegeln Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </>
    );
}
