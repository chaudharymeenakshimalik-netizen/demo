import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';
import Modal from './Modal.jsx';
import FormField from './FormField.jsx';

const focusClass = 'focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/20';

export default function AdminLoginDialog({ onClose }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !password) return;
    navigate('/dashboard', { state: { loginType: 'admin', identifier: email } });
  };

  return (
    <Modal onClose={onClose} glow="bg-violet-500/30" topLine="via-violet-500/70">
      <div className="flex items-center gap-3.5">
        <div className="animate-pop-in grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-linear-to-br from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/40">
          <Shield size={22} />
        </div>
        <div className="animate-fade-up" style={{ animationDelay: '80ms' }}>
          <h2 className="text-xl font-bold text-white">Admin Portal</h2>
          <p className="text-sm text-slate-400">Restricted access — authorized personnel only</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-7">
        <FormField
          id="admin-email"
          label="Admin Email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="admin@company.com"
          focusClass={focusClass}
          autoFocus
          style={{ animationDelay: '150ms' }}
        />

        <FormField
          id="admin-password"
          label="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="••••••••"
          focusClass={focusClass}
          className="mt-5"
          style={{ animationDelay: '220ms' }}
        />

        <div className="animate-fade-up mt-5 flex items-center justify-between" style={{ animationDelay: '290ms' }}>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/5 accent-violet-500" />
            Remember me
          </label>
          <a href="#" className="text-sm font-semibold text-violet-400 transition-colors hover:text-violet-300">Forgot password?</a>
        </div>

        <button
          type="submit"
          style={{ animationDelay: '360ms' }}
          className="animate-fade-up group relative mt-6 w-full overflow-hidden rounded-xl bg-linear-to-r from-violet-500 to-purple-600 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-violet-500/50 active:translate-y-0"
        >
          <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          <span className="relative">Sign In as Admin</span>
        </button>

        <p className="animate-fade-up mt-5 text-center text-xs text-slate-500" style={{ animationDelay: '430ms' }}>
          All admin actions are logged and audited
        </p>
      </form>
    </Modal>
  );
}
