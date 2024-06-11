'use client';

export default function UnderConstruction() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <span
        role="img"
        aria-label="hammer"
        style={{ fontSize: '64px', marginBottom: '20px' }}
      >
        🛠️
      </span>
      <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>
        Under Construction
      </h1>
      <p style={{ fontSize: '16px', textAlign: 'center' }}>
        This page is still under construction. Please check back later.
      </p>
    </div>
  );
}
