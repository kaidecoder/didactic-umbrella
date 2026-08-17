import { useState } from 'react';

export default function Header({ onToggleTools, onToggleFun, onToggleTopics, onToggleExams, onEnterPortal, isToolsOpen, isTopicsOpen, isFunOpen, isExamsOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Topics', action: onToggleTopics, isActive: isTopicsOpen }, // Linked directly to component state
    { name: 'Exams', action: onToggleExams, isActive: isExamsOpen },
    { name: 'Fun Games', action: onToggleFun, isActive: isFunOpen},
    { name: 'Tools', action: onToggleTools, isActive: isToolsOpen },
    { name: 'About', href: '#' },
  ];

  return (
    <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tight text-red-600">
              prentice<span className="text-zinc-100">math</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              item.action ? (
                // Renders interactive buttons for active structural layouts (Topics & Fun Tools)
                <button
                  key={item.name}
                  onClick={item.action}
                  className={`text-sm font-semibold transition-colors duration-200 ${
                    item.isActive ? 'text-red-500 font-bold' : 'text-zinc-400 hover:text-red-500'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-zinc-400 hover:text-red-500 transition-colors duration-200"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={onEnterPortal}
              className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all duration-200"
            >
              Enter Portal ➔
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
