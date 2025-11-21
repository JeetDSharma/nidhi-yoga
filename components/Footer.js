import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.name}>Nidhi Sharma</h2>
                    <p>Certified Yoga Instructor</p>
                </div>

                <div className={styles.links}>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="mailto:nidhi@example.com">Contact</a>
                </div>

                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Nidhi Sharma. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
