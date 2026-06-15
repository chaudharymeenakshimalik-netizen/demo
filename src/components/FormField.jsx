import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function FormField({
  id, label, type = 'text', value, onChange, placeholder,
  focusClass = '', autoFocus = false, required = true, className = '', style,
}) {
  const [showPass, setShowPass] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword ? (showPass ? 'text' : 'password') : type;

  const inputClass = `h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-slate-500 focus:bg-white/[0.05] ${focusClass} ${isPassword ? 'pr-12' : ''}`;

  return (
    <div className={`animate-fade-up ${className}`} style={style}>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-white">{label}</label>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          autoFocus={autoFocus}
          className={inputClass}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPass(s => !s)}
            aria-label={showPass ? 'Hide password' : 'Show password'}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition-colors hover:text-slate-300"
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  );
}
