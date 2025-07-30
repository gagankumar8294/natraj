"use client";
import styles from "./LandingBanner.module.css";

export default function LandingBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Book Hygienic Taxi & Trusted Drivers</h1>
        <p className={styles.subtitle}>Just sit, relax and enjoy the drive</p>
      </div>
    </section>
  );
}
