"use client";
import '../components/CarCard.css'

export default function CarCard({ name, price, image }) {

  const phoneNumber = "9164143196";
  const rawMessage = `Hi *Nataraj Tours & Travels*\ni want to book cab - *${name}*\nCall back please`;
  const encodedMessage = encodeURIComponent(rawMessage);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-img" />
      <h3>{name}</h3>
      <p>{price}</p>
      <div className="button-group">
        <button className="call-btn">Call Us Now</button>
        <span className="or-text">OR</span>
        <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
          WhatsApp Now
        </button>
      </div>
    </div>
  );
}
