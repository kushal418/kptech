import React from "react";

export default function DemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={overlayStyle}>
      <div className="modal-content" style={modalStyle}>
        <h2>Book a Free Demo</h2>
        <p>Fill in your details and we’ll contact you soon!</p>
        <button onClick={onClose} style={buttonStyle}>Close</button>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
  alignItems: "center", justifyContent: "center", zIndex: 1000
};

const modalStyle = {
  background: "#fff", padding: "30px", borderRadius: "10px", maxWidth: "400px", width: "100%", textAlign: "center"
};

const buttonStyle = {
  marginTop: "20px", padding: "10px 20px", background: "#0070f3", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer"
};
