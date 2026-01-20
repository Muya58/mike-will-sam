'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import styles from './page.module.css';

export default function RosterPage() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        fetchPlayers();
    }, []);

    const fetchPlayers = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('players')
                .select('*')
                .order('number', { ascending: true });

            if (error) throw error;
            setPlayers(data || []);
        } catch (error) {
            console.error('Error fetching players:', error.message);
        } finally {
            setLoading(false);
        }
    };

    const filteredPlayers = filter === 'All'
        ? players
        : players.filter(p => p.role === filter || p.position === filter); // Simple fuzzy filter for now

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div>
                    <h1 className="text-gradient">Roster</h1>
                    <p style={{ color: 'var(--color-text-muted)' }}>Manage your squad (Offense, Defense, ST)</p>
                </div>
                <button className="btn-primary" onClick={() => alert('Add Player feature coming next!')}>+ Add Player</button>
            </header>

            <div className={styles.filters}>
                {['All', 'Offense', 'Defense', 'Special Teams', 'Staff'].map((f) => (
                    <button
                        key={f}
                        className={`${styles.filterBtn} ${filter === f ? styles.active : ''}`}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {loading ? (
                <div style={{ textAlign: 'center', padding: '4rem', color: '#fff' }}>Loading Roster...</div>
            ) : (
                <div className={styles.grid}>
                    {filteredPlayers.length === 0 ? (
                        <p style={{ color: '#aaa' }}>No players found via Supabase.</p>
                    ) : (
                        filteredPlayers.map((player) => (
                            <div key={player.id} className="card">
                                <div className={styles.playerHeader}>
                                    <div className={styles.number}>#{player.number}</div>
                                    <div className={`${styles.status} ${player.status === 'Injured' ? styles.injured : ''}`}>
                                        {player.status}
                                    </div>
                                </div>
                                <h3 className={styles.name}>{player.name}</h3>
                                <div className={styles.meta}>
                                    <span className={styles.position}>{player.position}</span>
                                    <span className={styles.dot}>•</span>
                                    <span>{player.role}</span>
                                </div>
                                <div className={styles.statsRow}>
                                    <div>
                                        <p className={styles.statLabel}>Height</p>
                                        <p className={styles.statValue}>{player.height}</p>
                                    </div>
                                    <div>
                                        <p className={styles.statLabel}>Weight</p>
                                        <p className={styles.statValue}>{player.weight}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
