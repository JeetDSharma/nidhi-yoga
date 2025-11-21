"use client";
import { useState } from 'react';
import styles from './Services.module.css';
import BookingModal from './BookingModal';

export default function Services() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState("");

    const openBooking = (link) => {
        setSelectedLink(link);
        setIsModalOpen(true);
    };

    return (
        <section id="services" className={styles.services}>
            <div className="container">
                <h2 className={styles.heading}>Offerings</h2>

                <div className={styles.grid}>
                    {/* Service 1: Consultation */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Holistic Consultation</h3>
                        <div className={styles.price}>First Call Free</div>
                        <p className={styles.description}>
                            Let's discuss your health goals, challenges, and how yoga can support your healing journey.
                        </p>
                        <ul className={styles.features}>
                            <li>30-minute video call</li>
                            <li>Personalized assessment</li>
                            <li>Path forward recommendation</li>
                        </ul>
                        <button
                            onClick={() => openBooking("rick/30min")} // Placeholder link
                            className="btn btn-secondary"
                        >
                            Book Free Call
                        </button>
                    </div>

                    {/* Service 2: 1-1 Yoga */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>1-1 Yoga Session</h3>
                        <div className={styles.price}>$XX / Session</div>
                        <p className={styles.description}>
                            Personalized Hatha Yoga sessions tailored to your body, needs, and pace.
                        </p>
                        <ul className={styles.features}>
                            <li>60-minute private session</li>
                            <li>Asana, Pranayama & Meditation</li>
                            <li>Customized practice plan</li>
                        </ul>
                        <button
                            onClick={() => openBooking("rick/secret-sauce")} // Placeholder link
                            className="btn btn-primary"
                        >
                            Book Session
                        </button>
                    </div>
                </div>
            </div>

            <BookingModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                calLink={selectedLink}
            />
        </section>
    );
}
