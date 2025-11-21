import styles from './Testimonials.module.css';

export default function Testimonials() {
    return (
        <section className={styles.testimonials}>
            <div className="container">
                <h2 className={styles.heading}>Kind Words</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <p className={styles.quote}>
                            "Practicing with Nidhi has been a transformative experience. Her holistic approach helped me find balance not just on the mat, but in my daily life."
                        </p>
                        <p className={styles.author}>- Sarah J.</p>
                    </div>

                    <div className={styles.card}>
                        <p className={styles.quote}>
                            "The depth of knowledge Nidhi brings to her teaching is incredible. The 1-1 sessions are perfectly tailored to my needs."
                        </p>
                        <p className={styles.author}>- Michael R.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
