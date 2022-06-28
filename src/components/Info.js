import React from "react";

export default function Info() {
  return (
    <div className="info-section">
      <img src="profile-pic.png" alt="Profile picture" />
      <div className="info-text">
        <h3 className="name">Fahad Mohammad</h3>
        <h5 className="occupation">Frontend Developer</h5>
        <p className="website">fahadmohammad.website</p>
        <div className="buttons">
          <button className="email">
            <i class="fa-solid fa-envelope"></i> Email
          </button>
          <button className="linkedin">
            <i class="fa-brands fa-linkedin"></i> LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}
