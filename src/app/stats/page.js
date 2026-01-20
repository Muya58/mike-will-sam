import styles from './page.module.css';

export default function StatsPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className="text-gradient">Team Statistics</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Performance & Attendance metrics</p>
                </div>
                <select className={styles.select}>
                    <option>Last 30 Days</option>
                    <option>Season to Date</option>
                    <option>All Time</option>
                </select>
            </header>

            <div className={styles.grid}>
                <div className="card" style={{ gridColumn: 'span 2' }}>
                    <h3>Attendance Trend</h3>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', marginTop: '16px', borderRadius: '8px' }}>
                        <p style={{ color: 'var(--color-text-muted)' }}>[Chart: Weekly Attendance %]</p>
                    </div>
                </div>

                <div className="card">
                    <h3>Top Attendees</h3>
                    <ul className={styles.list}>
                        {[1, 2, 3, 4, 5].map(i => (
                            <li key={i} className={styles.listItem}>
                                <span>#{i} Player Name</span>
                                <span style={{ color: '#22c55e', fontWeight: 'bold' }}>100%</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
