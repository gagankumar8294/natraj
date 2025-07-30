import Image from "next/image";
import styles from "./page.module.css";
import CarCard from "../../components/CarCard";
import BookingForm from "../../components/BookingForm";

export default function Home() {

  const cars = [
    { id: 1, name: "Swift Dzire", price: "₹1099", image: "/cars/swift-natraj-tours-travels.png" },
    { id: 2, name: "Innova Crysta", price: "₹1999", image: "/cars/innova-crysta-natraj-tours-travels.png" },
    { id: 3, name: "Tempo Traveller", price: "₹3999", image: "/cars/tempo-traveller-natraj-tours-travells.png" },
    
  ];
  return (
    <>
    <h1 style={{ textAlign: "center" }}>Airport Taxi</h1>
      <div className="car-container">
        {cars.map(car => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
      <BookingForm />
    </>
  );
}
