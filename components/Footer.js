"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  const phoneNumber = "9164143196";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h3>Nataraj Tours & Travels</h3>
          <p>Your trusted ride across Bangalore</p>
        </div>

        <div className={styles.contact}>
          <p>📞 <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
          <p>💬 <a href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp Chat</a></p>
        </div>

        <div className={styles.bottomNote}>
          <p>&copy; {new Date().getFullYear()} Nataraj Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
