import '../components/CarCard.css'

export default function CarCard({ name, price, image }) {
  return (
    <div className="car-card">
      <img src={image} alt={name} className="car-img" />
      <h3>{name}</h3>
      <p>{price}</p>
      <div className="button-group">
        <button className="call-btn">Call Us Now</button>
        <span className="or-text">OR</span>
        <button className="whatsapp-btn">WhatsApp Now</button>
      </div>
    </div>
  );
}
