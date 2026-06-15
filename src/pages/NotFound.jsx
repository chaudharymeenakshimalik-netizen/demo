import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="app-bg flex min-h-screen w-full flex-col items-center justify-center px-5 text-center text-white">
      <span className="text-[88px] font-extrabold leading-none tracking-[-0.03em]">404</span>
      <h1 className="mt-2 text-[26px] font-bold text-white">Page not found</h1>
      <p className="mt-3 max-w-[420px] text-[15px] leading-[1.65] text-slate-300">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/login"
        className="mt-8 inline-flex h-[52px] items-center rounded-xl bg-white px-8 text-sm font-bold text-brand shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-px"
      >
        Back to Login
      </Link>
    </div>
  );
}
