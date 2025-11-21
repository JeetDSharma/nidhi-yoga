import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Nidhi Sharma
                </Link>

                <div className={styles.links}>
                    <Link href="#about">About</Link>
                    <Link href="#services">Services</Link>
                    <Link href="mailto:nidhi@example.com" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
}
