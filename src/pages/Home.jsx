import { useState } from 'react';
import {
  Users, Clock, DollarSign, CheckCircle2, MapPin,
  TrendingUp, Calendar, Shield, Bell, ArrowRight, ChevronRight,
} from 'lucide-react';
import EmployeeLoginDialog from '../components/EmployeeLoginDialog.jsx';
import AdminLoginDialog from '../components/AdminLoginDialog.jsx';
import jantekLogo from '../assets/img.png';

const stats = [
  { icon: Users, value: '2,847', label: 'Active Employees', delta: '+12%' },
  { icon: Clock, value: '94.3%', label: 'On-Time Today', delta: '+2.1%' },
  { icon: DollarSign, value: '₹48.2L', label: 'Payroll Processed', delta: 'This month' },
  { icon: CheckCircle2, value: '186', label: 'Leaves Approved', delta: 'This week' },
];

const accents = {
  emerald: { iconBg: 'bg-emerald-500/10', iconText: 'text-emerald-400', badge: 'bg-emerald-500/10 text-emerald-400', link: 'text-emerald-400' },
  blue: { iconBg: 'bg-blue-500/10', iconText: 'text-blue-400', badge: 'bg-blue-500/10 text-blue-400', link: 'text-blue-400' },
  amber: { iconBg: 'bg-amber-500/10', iconText: 'text-amber-400', badge: 'bg-amber-500/10 text-amber-400', link: 'text-amber-400' },
  violet: { iconBg: 'bg-violet-500/10', iconText: 'text-violet-400', badge: 'bg-violet-500/10 text-violet-400', link: 'text-violet-400' },
};

const modules = [
  { icon: MapPin, accent: 'emerald', badge: 'Live', stat: '99.2% accuracy', title: 'GPS Attendance', desc: 'Real-time location-based check-in and check-out. Geofencing alerts, live tracking maps, and automated attendance reports.' },
  { icon: DollarSign, accent: 'blue', badge: 'Automated', stat: '₹0 errors', title: 'Auto Payroll', desc: 'Automated salary calculation with tax deductions, benefits, and bonuses. Direct deposit integration and payslip generation.' },
  { icon: TrendingUp, accent: 'amber', badge: 'Analytics', stat: '4.8/5 avg rating', title: 'Performance', desc: '360° performance reviews, KPI tracking, goal setting, and real-time dashboards for employee growth monitoring.' },
  { icon: Calendar, accent: 'violet', badge: 'Workflow', stat: '< 2hr approval', title: 'Leave Management', desc: 'Streamlined leave requests, approval workflows, balance tracking, and holiday calendar integration.' },
];

const ctas = [
  {
    icon: Users,
    title: 'Employee Access',
    desc: 'Check your attendance, apply for leaves, view payslips, and track your performance goals.',
    features: ['View attendance & GPS logs', 'Apply and track leave requests', 'Download payslips', 'Performance self-review'],
    variant: 'employee',
    cardBg: 'from-blue-500/[0.06]',
    iconClass: 'bg-blue-500/10 text-blue-400',
    check: 'text-emerald-400',
    btnClass: 'bg-blue-500 hover:bg-blue-600',
    btnLabel: 'Warriors',
  },
  {
    icon: Shield,
    title: 'Admin Dashboard',
    desc: 'Manage the full workforce — payroll processing, attendance oversight, performance reviews, and leave approvals.',
    features: ['Full payroll automation', 'GPS attendance monitoring', 'Leave approval workflows', 'Performance analytics'],
    variant: 'admin',
    cardBg: 'from-violet-500/[0.06]',
    iconClass: 'bg-violet-500/10 text-violet-400',
    check: 'text-violet-400',
    btnClass: 'bg-linear-to-r from-violet-500 to-purple-600 hover:opacity-95',
    btnLabel: 'Admin Login',
  },
];

export default function Home() {
  const [dialog, setDialog] = useState(null);

  return (
    <div className="font-display min-h-screen bg-[#0a0d14] text-slate-400">

      {/* NAVBAR */}
      <nav className="border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-lg bg-white p-1">
              <img src={jantekLogo} alt="Jantek logo" className="h-full w-full scale-125 object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-white">Jantek <span className="text-[#4d7cff]">HRMS</span></span>
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500">get it solved</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button onClick={() => setDialog('employee')} className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10">Warriors</button>
            <button onClick={() => setDialog('admin')} className="rounded-lg bg-linear-to-r from-violet-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-95">Admin Login</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs tracking-wider text-blue-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ENTERPRISE HR, REIMAGINED
          </span>

          <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Managed J-Squad
            <br />
            <span className="text-[#4d7cff]">Built for Modern Teams</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-400">
            GPS attendance, automated payroll, performance tracking, and leave management — all in one unified platform.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => setDialog('employee')} className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-colors hover:bg-blue-600">
              <Users size={18} /> Warriors <ArrowRight size={18} />
            </button>
            <button onClick={() => setDialog('admin')} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10">
              <Shield size={18} /> Admin Portal
            </button>
          </div>
        </div>

        {/* STATS BAR */}
        <div className="relative border-t border-white/[0.06]">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-7 px-6 py-7 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map(({ icon: Icon, value, label, delta }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-slate-300">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">{value}</div>
                  <div className="text-xs text-slate-500">{label}</div>
                </div>
                <span className="ml-auto font-mono text-xs text-emerald-400">{delta}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">Core Modules</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Everything your HR team needs</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {modules.map(({ icon: Icon, accent, badge, stat, title, desc }) => {
            const a = accents[accent];
            return (
              <div key={title} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors hover:border-white/10">
                <div className="flex items-start justify-between">
                  <div className={`grid h-12 w-12 place-items-center rounded-xl ${a.iconBg} ${a.iconText}`}>
                    <Icon size={22} />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-md px-2 py-1 font-mono text-xs font-medium ${a.badge}`}>{badge}</span>
                    <span className="font-mono text-xs text-slate-500">{stat}</span>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{desc}</p>
                <a href="#" className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${a.link}`}>
                  Explore module <ChevronRight size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA CARDS */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {ctas.map(({ icon: Icon, variant, title, desc, features, cardBg, iconClass, check, btnClass, btnLabel }) => (
            <div key={title} className={`relative overflow-hidden rounded-3xl border border-white/[0.08] bg-linear-to-b ${cardBg} to-transparent p-10`}>
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${iconClass}`}>
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{desc}</p>

              <ul className="mt-7 space-y-3">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={18} className={check} /> {f}
                  </li>
                ))}
              </ul>

              <button onClick={() => setDialog(variant)} className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl py-4 font-semibold text-white transition-all ${btnClass}`}>
                <Icon size={18} /> {btnLabel}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2.5">
            <div className="grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-white p-0.5">
              <img src={jantekLogo} alt="Jantek logo" className="h-full w-full scale-125 object-contain" />
            </div>
            <span className="text-sm font-bold text-white">Jantek <span className="text-[#4d7cff]">HRMS</span></span>
            <span className="text-sm text-slate-500">&copy; 2026</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            All systems operational
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <Bell size={16} />
            <span>Privacy · Terms · Support</span>
          </div>
        </div>
      </footer>

      {/* FLOATING HELP */}
      <button className="fixed bottom-5 right-5 grid h-11 w-11 place-items-center rounded-full bg-white text-lg font-semibold text-slate-900 shadow-lg transition-transform hover:scale-105">
        ?
      </button>

      {dialog === 'employee' && <EmployeeLoginDialog onClose={() => setDialog(null)} />}
      {dialog === 'admin' && <AdminLoginDialog onClose={() => setDialog(null)} />}
    </div>
  );
}
