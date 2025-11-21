import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.text}>
                        <h2 className={styles.heading}>About Me</h2>
                        <p className={styles.bio}>
                            Namaste, I am Nidhi Sharma.
                        </p>
                        <p className={styles.bio}>
                            I am a certified Yoga Instructor teaching traditional Hatha Yoga with a holistic approach that weaves together asana, pranayama, meditation, kriya, and the principles of a yogic lifestyle.
                        </p>
                        <p className={styles.bio}>
                            My personal healing journey through yoga has shaped my path, and I am committed to bringing the depth, clarity, and beauty of this timeless knowledge to others.
                        </p>
                    </div>

                    <div className={styles.imageWrapper}>
                        <Image
                            src="/assets/certificate.png"
                            alt="Yoga Instructor Certificate"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
