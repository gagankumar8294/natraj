"use client";
import styles from "./LandingBanner.module.css";

export default function LandingBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Book Hygienic Taxi & Trusted Drivers</h1>
        <p className={styles.subtitle}>Reliable, Clean - Just sit, relax and enjoy the drive</p>

        <p className={styles.serviceHighlight}>
          <strong>Airport Pickup & Drop | Outstation & Local Rides 24/7</strong><br />
          <span>City Travel, Outstation Trips, & on-time vehicles — Anytime, Anywhere.</span>
        </p>
      </div>
    </section>
  );
}
