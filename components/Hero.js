import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <Image
                    src="/assets/hero-bg.png"
                    alt="Peaceful Yoga Studio"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>Find Balance & Inner Peace</h1>
                <p className={styles.subtitle}>
                    Traditional Hatha Yoga, Meditation, and Holistic Healing with Nidhi Sharma.
                </p>
                <a href="#services" className="btn btn-primary">
                    Start Your Journey
                </a>
            </div>
        </section>
    );
}
