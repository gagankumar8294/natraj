import '../components/BookingForm.css'

export default function BookingForm() {
  return (
    <div className="booking-form">
      <h2>Book Your Ride</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Mobile Number" required />
        <input type="text" placeholder="Pickup Address" required />
        <input type="text" placeholder="Drop-off Address" required />
        <p>Select date</p>
        <input type="date" className='date-color' required />
        <p>Select Time</p>
        <input type="time" className='time-color' required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
