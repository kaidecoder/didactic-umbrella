import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Topics', href: '#' },
    { name: 'Exams', href: '#' },
    { name: 'Fun Tools', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    // Changed bg-white to bg-zinc-900 and border-slate-200 to border-zinc-800
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo Name: Crimson Red balanced with a clean white span */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tight text-red-600">
              prentice<span className="text-zinc-100">math</span>
            </span>
          </div>

          {/* Navigation Links: Light gray links that turn crimson red on hover */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-zinc-400 hover:text-red-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button: Solid clean white button for perfect dark contrast */}
          <div className="hidden md:flex items-center">
            <button className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
              Sign In
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
