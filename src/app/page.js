import Image from "next/image";
import styles from "./page.module.css";
import CarCard from "../../components/CarCard";
import BookingForm from "../../components/BookingForm";
import About from "../../components/About";
import OutStation from "../../components/OutStation";

export default function Home() {

  const cars = [
    { id: 1, name: "Swift Dzire", price: "₹1099", image: "/cars/swift-natraj-tours-travels.png" },
    { id: 2, name: "Etios", price: "₹3999", image: "/cars/etios.png" },
    { id: 3, name: "Ciaz", price: "₹3999", image: "/cars/ciaz.png" },
    { id: 4, name: "Ertiga", price: "₹3999", image: "/cars/ertiga.png" },
    { id: 5, name: "Toyota Innova", price: "₹3999", image: "/cars/ciaz.png" },
    { id: 6, name: "Innova Crysta", price: "₹1999", image: "/cars/innova-crysta-natraj-tours-travels.png" },
    { id: 7, name: "Tempo Traveller", price: "₹3999", image: "/cars/tempo-traveller-natraj-tours-travells.png" },      
  ];

  const outStation = [
    { id: 1, name: "Swift Dzire", price: "₹12/KM | ₹Bata 400", image: "/cars/swift-natraj-tours-travels.png" },
    { id: 2, name: "Etios", price: "₹12/KM | ₹Bata 400", image: "/cars/ertiga.png" },
    { id: 3, name: "Ciaz", price: "₹13/KM | ₹Bata 400", image: "/cars/ciaz.png" },
    { id: 4, name: "Ertiga", price: "₹16/KM | ₹Bata 500", image: "/cars/ertiga.png" },
    { id: 5, name: "Toyota Innova", price: "₹18/KM | ₹Bata 500", image: "/cars/ciaz.png" },
    { id: 6, name: "Innova Crysta", price: "₹20/KM | ₹Bata 500", image: "/cars/innova-crysta-natraj-tours-travels.png" },
    { id: 7, name: "Tempo Traveller (non AC)", price: "₹20/KM | ₹Bata 600", image: "/cars/tempo-traveller-natraj-tours-travells.png" },
    { id: 8, name: "Tempo Traveller (AC)", price: "₹22/KM | ₹Bata 600", image: "/cars/tempo-traveller-ac.png" },
    { id: 9, name: "21-Seater Mini Bus", price: "₹30/KM | ₹Bata 600", image: "/cars/mini-bus.png" },
  ];
  return (
    <>
    <section id="home">

    </section>
    <h1 style={{ textAlign: "center" }}>Airport Taxi</h1>
      <div className="car-container">
        {cars.map(car => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    <section id="cars">

    </section>
    <h1 style={{ textAlign: "center" }}>Out Station</h1>
    <div className="car-container">
        {outStation.map(out => (
          <OutStation key={out.id} {...out} />
        ))}
      </div>
      <section id="booking">
      </section>
      <BookingForm />
        <section id="about">
      </section>
      <About />
    </>
  );
}
