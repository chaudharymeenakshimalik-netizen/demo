import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ onClose, glow, topLine, children }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-display">
      <div
        className="animate-overlay-in absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={onClose}
      />

      {glow && (
        <div className={`animate-glow-pulse pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] rounded-full ${glow} blur-[130px]`} />
      )}

      <div
        role="dialog"
        aria-modal="true"
        className="animate-dialog-in relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-[#12161f] to-[#0b0e16] p-8 shadow-2xl shadow-black/60"
      >
        {topLine && (
          <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent ${topLine} to-transparent`} />
        )}

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-6 top-6 text-slate-500 transition-all duration-200 hover:rotate-90 hover:text-white"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
