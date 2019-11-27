import React from "react";
import './css/Section.css';
import Card from './Card';
import Profile from './Profile';

export default function AboutSection({ title, subtitle, dark, id, image}) {
    return (
        <center>
            <div className="section">
                <div className="line">
                </div>
                <div className = "container-title">
                    <h2 className="color">{title}</h2>
                </div>
                <div className="section-content" id={id}>
                    <Profile/>
                </div>
            </div>
        </center>
  );
}
