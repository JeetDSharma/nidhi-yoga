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
                <p style={{ textAlign: 'center', marginBottom: '40px', color: '#666' }}>
                    * All new students receive a personalized intake form to tailor the practice to your goals.
                </p>

                <div className={styles.grid}>
                    {/* Service 1: Consultation */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Holistic Consultation</h3>
                        <div className={styles.price}>£10 / 30 min</div>
                        <p className={styles.description}>
                            Discuss your health goals and how yoga can support your healing journey.
                        </p>
                        <ul className={styles.features}>
                            <li>30-minute video call</li>
                            <li>Personalized assessment</li>
                            <li>Path forward recommendation</li>
                        </ul>
                        <button
                            onClick={() => openBooking(process.env.NEXT_PUBLIC_CAL_LINK)}
                            className="btn btn-secondary"
                        >
                            Book Free First Call
                        </button>
                        <p style={{ fontSize: '0.8rem', marginTop: '10px', color: '#888' }}>
                            Follow-ups: £10
                        </p>
                    </div>

                    {/* Service 2: 1-1 Yoga */}
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>1-1 Yoga Session</h3>
                        <div className={styles.price}>£20 / Session</div>
                        <p className={styles.description}>
                            Personalized Hatha Yoga sessions tailored to your body, needs, and pace.
                        </p>
                        <ul className={styles.features}>
                            <li>60-minute private session</li>
                            <li>Asana, Pranayama & Meditation</li>
                            <li>Customized practice plan</li>
                        </ul>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button
                                onClick={() => openBooking(process.env.NEXT_PUBLIC_CAL_LINK)}
                                className="btn btn-primary"
                            >
                                Book First Free Session
                            </button>
                            <button
                                onClick={() => openBooking(process.env.NEXT_PUBLIC_CAL_LINK)}
                                style={{ fontSize: '0.9rem', textDecoration: 'underline', color: '#666' }}
                            >
                                Returning Student (£20)
                            </button>
                        </div>
                    </div>

                    {/* Service 3: Monthly Plans */}
                    <div className={styles.card} style={{ border: '2px solid var(--primary-peach)' }}>
                        <h3 className={styles.cardTitle}>Monthly Plans</h3>
                        <div className={styles.price}>Save with Plans</div>
                        <p className={styles.description}>
                            Commit to your practice with a structured monthly plan.
                        </p>
                        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
                            <div style={{ marginBottom: '10px' }}>
                                <strong>1 Session/Week:</strong> <span style={{ textDecoration: 'line-through', color: '#999' }}>£80</span> <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>£70/mo</span>
                            </div>
                            <div>
                                <strong>2 Sessions/Week:</strong> <span style={{ textDecoration: 'line-through', color: '#999' }}>£160</span> <span style={{ color: 'var(--accent-terracotta)', fontWeight: 'bold' }}>£130/mo</span>
                            </div>
                        </div>
                        <a
                            href="#"
                            className="btn btn-secondary"
                            onClick={(e) => {
                                e.preventDefault();
                                alert("Stripe integration coming soon!");
                            }}
                        >
                            Subscribe Now
                        </a>
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
