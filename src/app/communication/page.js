'use client';
import { useState } from 'react';
import styles from './page.module.css';

const templates = [
    { id: 'training', label: 'Training Call', text: '💪 Training tomorrow at 19:30. Field 2. Bring full pads. Reply with confirmation.' },
    { id: 'match', label: 'Match Day', text: '🏈 MATCH DAY! Meet at club house 14:00. Kickoff 16:00. Go Team!' },
    { id: 'urgent', label: 'Urgent Alert', text: '⚠️ URGENT: Practice cancelled due to weather.' },
];

export default function CommunicationPage() {
    const [message, setMessage] = useState(templates[0].text);
    const [selectedTemplate, setSelectedTemplate] = useState('training');

    const handleTemplateChange = (t) => {
        setSelectedTemplate(t.id);
        setMessage(t.text);
    };

    const handleSend = () => {
        // In a real app, this would use the WhatsApp Business API or iterate through phone numbers.
        // For this demo, we'll open a general link or alert.
        const encoded = encodeURIComponent(message);
        window.open(`https://wa.me/?text=${encoded}`, '_blank');
    };

    return (
        <div className={styles.container}>
            <header>
                <h1 className="text-gradient">Team Communication</h1>
                <p style={{ color: 'var(--color-text-muted)' }}>Send blasts via WhatsApp</p>
            </header>

            <div className={styles.content}>
                <div className="card">
                    <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>1. Choose Template</h2>
                    <div className={styles.templateGrid}>
                        {templates.map(t => (
                            <button
                                key={t.id}
                                className={`${styles.templateBtn} ${selectedTemplate === t.id ? styles.active : ''}`}
                                onClick={() => handleTemplateChange(t)}
                            >
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="card">
                    <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>2. Edit Message</h2>
                    <textarea
                        className={styles.textarea}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                    />
                </div>

                <div className="card">
                    <h2 style={{ marginBottom: '16px', fontSize: '18px' }}>3. Recipients</h2>
                    <div className={styles.recipients}>
                        <label className={styles.checkbox}>
                            <input type="checkbox" defaultChecked /> All Players (42)
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" /> Offense
                        </label>
                        <label className={styles.checkbox}>
                            <input type="checkbox" /> Defense
                        </label>
                    </div>
                </div>
            </div>

            <div className={styles.actions}>
                <button className="btn-primary" style={{ background: '#22c55e', fontSize: '18px', width: '100%' }} onClick={handleSend}>
                    Send via WhatsApp 🚀
                </button>
            </div>
        </div>
    );
}
