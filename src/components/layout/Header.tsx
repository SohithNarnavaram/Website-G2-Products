import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const navLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'Store', href: '/store', isRoute: true },
  { name: 'Best Sellers', href: '/#bestsellers', isRoute: false },
  { name: 'About', href: '/#brand', isRoute: false },
  { name: 'Creators', href: '/#portfolio', isRoute: false },
  { name: 'Contact', href: '/#contact', isRoute: false },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setIsOpen, totalItems } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileMenuOpen(false);
    
    if (isRoute) {
      navigate(href);
    } else {
      // Handle hash links - if on home page, scroll to section
      if (location.pathname === '/') {
        const hash = href.replace('/', '');
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        navigate(href);
      }
    }
  };

  const isActive = (href: string, isRoute: boolean) => {
    if (isRoute) {
      return location.pathname === href;
    } else {
      // For hash links, check if we're on home page and the hash matches
      if (location.pathname === '/') {
        const hash = href.replace('/', '');
        return location.hash === hash;
      }
      return false;
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/50 backdrop-blur-md shadow-md'
          : 'bg-transparent backdrop-blur-none'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/g2.jpg"
              alt="G2 Products"
              className="w-10 h-10 object-cover border border-border/60"
            />
            <span className="font-heading font-bold text-xl text-white hidden sm:block">
              PRODUCTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.isRoute);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className={`group relative font-medium text-sm tracking-wide transition-colors duration-300 ${
                    active ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex text-white hover:text-primary rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm" 
              asChild
            >
              <Link to="/store">
                <Search className="w-5 h-5" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative text-white hover:text-primary rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:border-white/30 backdrop-blur-sm"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => {
                const active = isActive(link.href, link.isRoute);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href, link.isRoute)}
                    className={`transition-colors duration-300 font-medium text-lg py-2 text-left ${
                      active ? 'text-primary' : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
