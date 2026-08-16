import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Topics", href: "#" },
    { name: "Exams", href: "#" },
    { name: "Fun Tools", href: "#" },
    { name: "About", href: "#" },
  ]

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Project Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tight text-blue-600">
              prentice<span className="text-slate-800">math</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button (TBA placeholder slot) */}
          <div className="hidden md:flex items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition-all duration-200">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-600 hover:bg-slate-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 window-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 window-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-slate-50 border-b border-slate-200"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-slate-200 px-3">
              <button className="w-full bg-blue-600 text-white text-center font-semibold py-2 rounded-md shadow-sm">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
