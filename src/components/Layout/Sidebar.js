import Link from 'next/link';
import styles from './Sidebar.module.css';

const navItems = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'Roster', href: '/roster', icon: '🏈' },
    { name: 'Events', href: '/calendar', icon: '📅' },
    { name: 'Stats', href: '/stats', icon: '📈' },
    { name: 'Communication', href: '/communication', icon: '💬' },
];

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <h1>Turbo<span>Club</span></h1>
            </div>

            <nav className={styles.nav}>
                {navItems.map((item) => (
                    <Link key={item.name} href={item.href} className={styles.navItem}>
                        <span className={styles.icon}>{item.icon}</span>
                        <span className={styles.label}>{item.name}</span>
                    </Link>
                ))}
            </nav>

            <div className={styles.footer}>
                <div className={styles.userProfile}>
                    <div className={styles.avatar}>HC</div>
                    <div className={styles.userInfo}>
                        <p className={styles.userName}>Head Coach</p>
                        <p className={styles.userRole}>Admin</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}
