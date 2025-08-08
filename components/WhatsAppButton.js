import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917485960418" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px", // 👈 placed on the left
        backgroundColor: "#25D366",
        color: "white",
        borderRadius: "50%",
        padding: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
        fontSize: "26px",
        transition: "transform 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <FaWhatsapp />
    </a>
  );
}
