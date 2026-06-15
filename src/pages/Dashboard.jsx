import { useLocation, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="app-bg flex min-h-screen w-full items-center justify-center px-5 py-[50px] text-white">
      <div className="w-full max-w-[560px] rounded-3xl bg-white p-11 text-center text-slate-900 shadow-[0_40px_90px_rgba(15,12,60,0.45)]">
        <span className="mb-5 inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-3 py-[5px] text-[11px] font-bold uppercase tracking-[0.04em] text-brand">Dashboard</span>
        <h1 className="text-[26px] font-extrabold tracking-[-0.03em] text-slate-900">
          Welcome{state?.identifier ? `, ${state.identifier}` : ''}
        </h1>
        <p className="mt-2 text-sm font-medium text-slate-500">
          {state?.loginType === 'admin' ? 'Signed in as Admin' : 'Signed in as Warrior'}
        </p>
        <p className="mt-6 text-[15px] leading-[1.65] text-slate-600">
          This is a placeholder dashboard. Build your attendance, payroll, and KPI views here.
        </p>
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="mt-8 h-[52px] w-full cursor-pointer rounded-xl bg-slate-900 text-sm font-bold text-white shadow-[0_8px_24px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-px hover:bg-slate-800"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
