'use client'

import { useState } from 'react';
import '../components/BookingForm.css';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/sendBooking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert('Booking sent successfully!');
      setFormData({ name: '', email: '', phone: '', pickup: '', dropoff: '', date: '', time: '' });
    } else {
      alert('Something went wrong!');
    }
  };

  return (
    <div className="booking-form">
      <h2>Book Your Ride</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="pickup" placeholder="Pickup Address" value={formData.pickup} onChange={handleChange} required />
        <input type="text" name="dropoff" placeholder="Drop-off Address" value={formData.dropoff} onChange={handleChange} required />
        <p>Select date</p>
        <input type="date" name="date" value={formData.date} onChange={handleChange} className='date-color' required />
        <p>Select Time</p>
        <input type="time" name="time" value={formData.time} onChange={handleChange} className='time-color' required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
