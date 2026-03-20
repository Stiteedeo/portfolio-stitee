import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { Link } from 'react-scroll';

const quickLinks = ['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'];
const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com/StiteeDeo',                                   label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arpita-meghamala-chaini-a11847272', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:deostiteepragyan@gmail.com',                               label: 'Email'    },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-surface-dark2 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <Link to="hero" smooth duration={600} className="cursor-pointer inline-block mb-4">
              <span className="font-mono text-2xl font-bold">
                <span className="gradient-text">{'<'}</span>
                <span className="text-slate-800 dark:text-white">Stitee</span>
                <span className="gradient-text">{' />'}</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              Full Stack Developer passionate about building scalable web applications and impactful digital solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link}
                  to={link.toLowerCase()}
                  smooth
                  duration={600}
                  offset={-70}
                  className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer transition-colors duration-200"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/50 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a
              href="mailto:deostiteepragyan@gmail.com"
              className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              deostiteepragyan@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-600 text-center sm:text-left">
            © {year} Stitee Pragyan Deo. All rights reserved.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-600 flex items-center gap-1">
            Made with <FiHeart className="text-red-400 w-3 h-3 mx-0.5" /> using React + Vite + TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
