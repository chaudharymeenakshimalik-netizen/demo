import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/personal-logo.png';
import warriorIcon from '../assets/warrior-icon.png.ico';
import adminIcon from '../assets/admin-icon.png.ico';

export default function Login() {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState('employee');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!identifier.trim() || !password) return alert('Please fill in all fields');
    navigate('/dashboard', { state: { loginType, identifier } });
  };

  return (
    <div className="app-bg flex min-h-screen w-full items-center justify-center px-5 py-[50px] text-white">
      <div className="flex w-full max-w-[1280px] flex-col gap-[54px]">

        {/* LOGO HEADER */}
        <header className="flex items-center gap-3.5 self-center min-[1151px]:self-start">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-white p-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <img
              src="/personal-logo.png"
              onError={e => { e.currentTarget.src = logo }}
              alt="Jantek Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[19px] font-extrabold leading-tight tracking-[-0.02em] text-white">Jantek HRMS</span>
            <span className="mt-px text-[11px] font-bold uppercase tracking-[0.06em] text-indigo-100">Get It Solved</span>
          </div>
        </header>

        {/* SYSTEM MAIN GRID MATRIX */}
        <main className="grid grid-cols-1 items-start gap-14 max-[1150px]:mx-auto max-[1150px]:max-w-[480px] min-[1151px]:grid-cols-[460px_1fr] min-[1151px]:gap-20">

          {/* LEFT PANEL - HIGH CONTRAST WHITE LOGIN COMPONENT */}
          <section className="w-full">
            <div className="w-full rounded-3xl bg-white px-5 py-8 shadow-[0_40px_90px_rgba(15,12,60,0.45),0_4px_20px_rgba(0,0,0,0.05)] min-[501px]:p-11">
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h2 className="text-[26px] font-extrabold tracking-[-0.03em] text-slate-900">Welcome Back</h2>
                  <p className="mt-[5px] text-sm font-medium text-slate-500">Sign in to your account</p>
                </div>
                <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.04em] text-brand">Secure Access</span>
              </div>

              {/* Segmented Role Controls */}
              <div className="mb-7 grid grid-cols-2 gap-0 rounded-xl border border-slate-200 bg-slate-100 p-1">
                {[
                  ['employee', 'Warriors', warriorIcon, '⚔️'],
                  ['admin', 'Admin', adminIcon, '🧑‍💼']
                ].map(([type, label, icon, fallback]) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => { setLoginType(type); setIdentifier(''); }}
                    className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg p-3 text-[13px] font-semibold transition-all ${
                      loginType === type
                        ? 'bg-white font-bold text-brand shadow-[0_4px_12px_rgba(79,70,229,0.1)]'
                        : 'bg-transparent text-slate-500'
                    }`}
                  >
                    {icon ? (
                      <img src={icon} alt={`${label} icon`} className="h-4 w-4 object-contain" />
                    ) : (
                      <span>{fallback}</span>
                    )}
                    <span>{label}</span>
                  </button>
                ))}
              </div>

              {/* Form Input Elements */}
              <form onSubmit={handleSubmit}>
                <div className="mb-[22px]">
                  <label htmlFor="identifier" className="mb-2 block text-[13px] font-semibold text-slate-700">
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
                    className="h-[52px] w-full rounded-xl border-[1.5px] border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)]"
                  />
                </div>

                <div className="mb-[22px]">
                  <label htmlFor="password" className="mb-2 block text-[13px] font-semibold text-slate-700">Password</label>
                  <div className="relative flex w-full items-center">
                    <input
                      id="password"
                      type={showPass ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="h-[52px] w-full rounded-xl border-[1.5px] border-slate-200 bg-white px-4 text-sm font-medium text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand focus:shadow-[0_0_0_4px_rgba(79,70,229,0.1)]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 cursor-pointer border-none bg-none text-base text-slate-400"
                    >
                      {showPass ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-2.5 h-[52px] w-full cursor-pointer rounded-xl bg-slate-900 text-sm font-bold text-white shadow-[0_8px_24px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-px hover:bg-slate-800 hover:shadow-[0_12px_28px_rgba(15,23,42,0.35)]"
                >
                  Sign In to Dashboard
                </button>
              </form>
            </div>
          </section>

          {/* RIGHT PANEL - BRAND MARKETING MATRIX */}
          <section className="flex flex-col items-center pt-2.5 text-center min-[1151px]:items-start min-[1151px]:text-left">
            <div className="mb-11">
              <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/[0.12] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.06em] text-white">Enterprise HR, Reimagined</span>
              <h1 className="mb-[18px] text-[44px] font-bold leading-tight tracking-[-0.02em] text-white">Manage J-Squad</h1>
              <p className="max-w-[520px] text-[15px] font-normal leading-[1.65] text-slate-300 max-[1150px]:mx-auto">
                Streamline attendance tracking, automate complex payroll loops, and manage strategic personnel metrics through a single, secure enterprise intelligence layer.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 min-[501px]:grid-cols-2">
              {[
                ['📍', 'GPS Attendance', 'Smart punch in/out'],
                ['💰', 'Auto Payroll', 'Auto salary calculation'],
                ['📋', 'Leave Management', 'Apply & track leaves'],
                ['📈', 'Performance', 'Monthly KPI reviews']
              ].map(([icon, title, desc]) => (
                <div key={title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition-all hover:-translate-y-px hover:border-white/20 hover:bg-white/10">
                  <div className="rounded-[10px] bg-white p-2.5 text-xl leading-none shadow-[0_4px_12px_rgba(0,0,0,0.05)]">{icon}</div>
                  <div className="flex flex-col text-left">
                    <h3 className="mb-1 text-[15px] font-bold text-white">{title}</h3>
                    <p className="text-[13px] font-medium leading-snug text-slate-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* HIGH-END FOOTER ROW */}
        <footer className="w-full border-t border-white/10 pt-3">
          <div className="flex flex-col gap-2 text-center text-xs font-semibold text-slate-300 min-[1151px]:flex-row min-[1151px]:justify-between min-[1151px]:text-left">
            <span>Jantek HRMS &copy; 2026 Operations Suite</span>
            <span>End-to-End Enterprise Grade Encryption</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
