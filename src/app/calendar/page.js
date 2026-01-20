import styles from './page.module.css';

const events = [
    { id: 1, title: 'Team Practice', date: '2026-01-16', time: '19:30', type: 'Training', location: 'Field 2' },
    { id: 2, title: 'Video Session', date: '2026-01-17', time: '10:00', type: 'Meeting', location: 'Club House' },
    { id: 3, title: 'Match vs. Lions', date: '2026-01-18', time: '14:00', type: 'Match', location: 'Main Stadium' },
];

export default function CalendarPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className="text-gradient">Events</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Schedule & Attendance</p>
                </div>
                <button className="btn-primary">+ New Event</button>
            </header>

            <div className={styles.timeline}>
                {events.map(event => (
                    <div key={event.id} className="card" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div className={styles.dateBox}>
                            <span className={styles.day}>{event.date.split('-')[2]}</span>
                            <span className={styles.month}>JAN</span>
                        </div>

                        <div style={{ flex: 1 }}>
                            <div className={styles.badge}>{event.type}</div>
                            <h3 style={{ fontSize: '18px', margin: '4px 0' }}>{event.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>
                                📍 {event.location} • ⏰ {event.time}
                            </p>
                        </div>

                        <button className={styles.actionBtn}>
                            Check In
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
