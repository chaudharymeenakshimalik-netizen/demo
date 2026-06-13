import { useState } from 'react';
import './App.css';
import logo from './assets/personal-logo.png';
import warriorIcon from './assets/warrior-icon.png.ico';
import adminIcon from './assets/admin-icon.png.ico';

export default function Login() {
  const [loginType, setLoginType] = useState('employee');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password) return alert('Please fill in all fields');
    alert(`Success! Logging in as ${loginType}`);
  };

  return (
    <div className="app-root">
      <div className="app-container">
        
        {/* LOGO HEADER */}
        <header className="global-header">
          <div className="brand-badge">
            <img
              src="/personal-logo.png"
              onError={e => { e.currentTarget.src = logo }}
              alt="Jantek Logo"
            />
          </div>
          <div className="brand-copy">
            <span className="brand-name">Jantek HRMS</span>
            <span className="brand-tag">Get It Solved</span>
          </div>
        </header>

        {/* SYSTEM MAIN GRID MATRIX */}
        <main className="app-content">
          
          {/* LEFT PANEL - HIGH CONTRAST WHITE LOGIN COMPONENT */}
          <section className="left-panel">
            <div className="login-card">
              <div className="login-title-row">
                <div className="title-text">
                  <h2>Welcome Back</h2>
                  <p className="subtitle">Sign in to your account</p>
                </div>
                <span className="login-pill">Secure Access</span>
              </div>

              {/* Segmented Role Controls */}
              <div className="role-switch">
                {[
                  ['employee', 'Warriors', warriorIcon, '⚔️'],
                  ['admin', 'Admin', adminIcon, '🧑‍💼']
                ].map(([type, label, icon, fallback]) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => { setLoginType(type); setIdentifier(''); }}
                    className={loginType === type ? 'active-role' : ''}
                  >
                    {icon ? (
                      <img src={icon} alt={`${label} icon`} className="role-icon" />
                    ) : (
                      <span className="role-fallback">{fallback}</span>
                    )}
                    <span className="role-label">{label}</span>
                  </button>
                ))}
              </div>

              {/* Form Input Elements */}
              <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                  <label htmlFor="identifier">
                    {loginType === 'admin' ? 'Admin Email Address' : 'Employee ID or Email'}
                  </label>
                  <input
                    id="identifier"
                    type="text"
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
                    placeholder={loginType === 'admin' ? 'admin@company.com' : 'EMP0001 or email'}
                    required
                    autoFocus
                  />
                </div>

                <div className="input-group password-box">
                  <label htmlFor="password">Password</label>
                  <div className="input-wrapper">
                    <input
                      id="password"
                      type={showPass ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPass(!showPass)} 
                      className="password-toggle"
                    >
                      {showPass ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <button type="submit" className="login-btn">
                  Sign In to Dashboard
                </button>
              </form>
            </div>
          </section>

         {/* RIGHT PANEL - BRAND MARKETING MATRIX */}
<section className="right-panel">
  <div className="hero-section">
    <span className="hero-highlight">Enterprise HR, Reimagined</span>
    <h1 className="hero-title">Manage J-Squad</h1>
    <p className="hero-description">
      Streamline attendance tracking, automate complex payroll loops, and manage strategic personnel metrics through a single, secure enterprise intelligence layer.
    </p>
  </div>
  
  <div className="features">
    {[
      ['📍', 'GPS Attendance', 'Smart punch in/out'],
      ['💰', 'Auto Payroll', 'Auto salary calculation'],
      ['📋', 'Leave Management', 'Apply & track leaves'],
      ['📈', 'Performance', 'Monthly KPI reviews']
    ].map(([icon, title, desc]) => (
      <div key={title} className="feature-card">
        <div className="feature-icon">{icon}</div>
        <div className="feature-info-block">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-desc">{desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

        </main>

        {/* HIGH-END FOOTER ROW */}
        <footer className="app-footer">
          <div className="footer-copy">
            <span>Jantek HRMS &copy; 2026 Operations Suite</span>
            <span>End-to-End Enterprise Grade Encryption</span>
          </div>
        </footer>

      </div>
    </div>
  );
}