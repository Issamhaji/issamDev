import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initial = saved ? saved === 'dark' : prefersDark;
      setIsDark(initial);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      type="button"
      aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      title={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      onClick={() => setIsDark((v) => !v)}
      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
    >
      {isDark ? <Sun size={18} className="text-yellow-300" /> : <Moon size={18} className="text-gray-700" />}
    </button>
  );
}
