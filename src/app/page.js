import Image from "next/image";
import styles from "./page.module.css";
import CarCard from "../../components/CarCard";
import BookingForm from "../../components/BookingForm";
import About from "../../components/About";
import OutStation from "../../components/OutStation";

export default function Home() {

  const cars = [
    { id: 1, name: "Swift Dzire", price: "₹1099", image: "/cars/swift-natraj-tours-travels.png" },
    { id: 2, name: "Innova Crysta", price: "₹1999", image: "/cars/innova-crysta-natraj-tours-travels.png" },
    { id: 3, name: "Tempo Traveller", price: "₹3999", image: "/cars/tempo-traveller-natraj-tours-travells.png" },
    
  ];

  const outStation = [
    { id: 1, name: "Swift Dzire", price: "₹12/KM | ₹Bata 400", image: "/cars/swift-natraj-tours-travels.png" },
    { id: 2, name: "Innova Crysta", price: "₹20/KM | ₹Bata 500", image: "/cars/innova-crysta-natraj-tours-travels.png" },
    { id: 3, name: "Tempo Traveller (non AC)", price: "₹20/KM | ₹Bata 600", image: "/cars/tempo-traveller-natraj-tours-travells.png" },
    
  ];
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Airport Taxi</h1>
      <div className="car-container">
        {cars.map(car => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    <h1 style={{ textAlign: "center" }}>Out Station</h1>
    <div className="car-container">
        {outStation.map(out => (
          <OutStation key={out.id} {...out} />
        ))}
      </div>
      <BookingForm />
      <About />
    </>
  );
}
