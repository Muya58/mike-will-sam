import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className="text-gradient">Dashboard</h1>
          <p style={{ color: 'var(--color-text-muted)', marginTop: '4px' }}>Welcome back, Coach.</p>
        </div>
        <button className="btn-primary">+ New Session</button>
      </header>

      <div className={styles.statsGrid}>
        {/* Stat Cards */}
        <div className="card">
          <h3 style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '8px' }}>Active Players</h3>
          <p style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>42</p>
          <p style={{ color: 'var(--color-success)', fontSize: '14px' }}>+3 this week</p>
        </div>

        <div className="card">
          <h3 style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '8px' }}>Attendance Rate</h3>
          <p style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>87%</p>
          <p style={{ color: 'var(--color-warning)', fontSize: '14px' }}>-2% from last week</p>
        </div>

        <div className="card">
          <h3 style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '8px' }}>Next Match</h3>
          <p style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>vs. Lions</p>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '14px' }}>Saturday, 10:00 AM</p>
        </div>

        <div className="card">
          <h3 style={{ color: 'var(--color-text-muted)', fontSize: '14px', marginBottom: '8px' }}>Team Health</h3>
          <p style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>95%</p>
          <p style={{ color: 'var(--color-success)', fontSize: '14px' }}>Optimal</p>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className="card" style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--color-text-muted)' }}>Attendance Chart Placeholder</p>
        </div>
      </div>
    </div>
  );
}
