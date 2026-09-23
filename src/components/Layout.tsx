import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-sm">
          <Link to="/" className="font-semibold">
            Rubies Shop
          </Link>

          <nav className="flex items-center gap-6">
            <Link to="/get-started" className="hover:opacity-70">
              Get Started
            </Link>
            <Link to="/login" className="hover:opacity-70">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Outlet />
        </div>
      </main>

      <footer className="bg-[#4a5a2b] text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div>
            <p className="font-semibold mb-3">Rubies Shop</p>
            <p className="text-white/70 max-w-xs">
              You are viewing Rubies. Pay by bank transfer — no account needed.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3">Shop</p>
            <ul className="flex flex-col gap-2 text-white/70">
              <li>
                <Link to="/" className="hover:text-white">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white">
                  Merchant desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-white/60">
            Rubies Shop · 2026
          </div>
        </div>

        <div className="overflow-hidden">
          <p className="text-[18vw] leading-[0.8] font-bold text-white/10 select-none px-4">
            Rubies
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
