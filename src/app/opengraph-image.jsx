import { ImageResponse } from 'next/og';
import fs from 'fs';
import path from 'path';

export const contentType = 'image/png';
export const size = { width: 1200, height: 630 };

export default async function Image() {
    const naanBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'Naan.png'));
    const neeBuffer = fs.readFileSync(path.join(process.cwd(), 'public', 'Nee.png'));

    const naanBase64 = `data:image/png;base64,${naanBuffer.toString('base64')}`;
    const neeBase64 = `data:image/png;base64,${neeBuffer.toString('base64')}`;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    backgroundColor: '#FFF8F5',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}
            >
                {/* Left Side Flower (Naan) */}
                <img
                    src={naanBase64}
                    style={{ position: 'absolute', left: 10, top: 20, width: 380, opacity: 1 }}
                />

                {/* Right Side Flower (Nee) */}
                <img
                    src={neeBase64}
                    style={{ position: 'absolute', right: 20, bottom: -40, width: 340, opacity: 1 }}
                />

                {/* Center Content */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(249, 211, 227, 0.2)',
                    padding: '50px 90px',
                    borderRadius: '80px',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: '0 8px 32px rgba(242, 168, 198, 0.2)'
                }}>
                    <div style={{ fontSize: 35, color: '#F2A8C6', fontFamily: 'serif', fontStyle: 'italic', marginBottom: 5 }}>
                        Wedding Invitation
                    </div>
                    <div style={{ fontSize: 80, color: '#6E3A4E', fontWeight: 'bold', fontFamily: 'serif' }}>
                        Naveen & Ramya
                    </div>
                    <div style={{ fontSize: 26, color: '#6E3A4E', marginTop: 30, textTransform: 'uppercase', letterSpacing: '8px' }}>
                        13 / 11 / 2026
                    </div>
                    <div style={{ fontSize: 22, color: '#6E3A4E', marginTop: 15, opacity: 0.8, fontFamily: 'serif' }}>
                        Shree Vasuki Mahal
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
