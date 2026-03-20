import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { HiCode } from 'react-icons/hi';

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const socialLinks = [
  { icon: FiGithub,   href: 'https://github.com/StiteeDeo',                                   label: 'GitHub'   },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arpita-meghamala-chaini-a11847272', label: 'LinkedIn' },
  { icon: FiMail,     href: 'mailto:deostiteepragyan@gmail.com',                               label: 'Email'    },
];

const techStack = ['React', 'Python', 'Django', 'FastAPI', 'SQL', 'JavaScript'];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient bg-slate-50 dark:bg-surface-dark"
    >
      {/* Decorative Orbs */}
      <div className="orb w-96 h-96 bg-primary-500/20 dark:bg-primary-500/25 top-10 -left-32" />
      <div className="orb w-72 h-72 bg-accent-500/15 dark:bg-accent-500/20 bottom-20 right-10" style={{ animationDelay: '2s' }} />
      <div className="orb w-48 h-48 bg-purple-500/10 top-1/2 right-1/3" style={{ animationDelay: '4s' }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
              <span className="text-sm font-medium text-primary-700 dark:text-primary-400">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-3">
              Hi, I'm{' '}
              <span className="gradient-text block sm:inline">Stitee Pragyan Deo</span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 justify-center lg:justify-start mb-6">
              <span className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
                <HiCode className="text-primary-500 w-6 h-6" />
                Full Stack Developer
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8 mx-auto lg:mx-0">
              Full Stack Developer passionate about building scalable web applications, solving real-world problems, and creating impactful digital solutions using modern technologies.
            </motion.p>

            {/* Tech Pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8">
              {techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 text-xs font-mono font-semibold rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10">
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Link to="projects" smooth duration={600} offset={-70}>
                <button className="btn-primary w-full sm:w-auto">
                  <FiArrowDown className="w-4 h-4" />
                  View Projects
                </button>
              </Link>
              <Link to="contact" smooth duration={600} offset={-70}>
                <button className="btn-outline w-full sm:w-auto">
                  <FiMail className="w-4 h-4" />
                  Contact Me
                </button>
              </Link>
              <a
                href="/Stitee_Pragyan_Deo_Resume.pdf"
                download="Stitee_Pragyan_Deo_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full sm:w-auto border-accent-500 text-accent-600 dark:text-accent-400 hover:bg-accent-500/10"
              >
                <FiDownload className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-300 dark:hover:border-primary-500/50 hover:-translate-y-1 transition-all duration-200 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative animate-float">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500 via-purple-500 to-accent-500 blur-2xl opacity-30 scale-110" />

              {/* Avatar card */}
              <div className="relative gradient-border rounded-3xl p-8 card-glass animate-glow">
                {/* Avatar placeholder with initials */}
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl bg-gradient-to-br from-primary-500 via-purple-600 to-accent-500 flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <span className="text-6xl sm:text-7xl font-black text-white select-none">SPD</span>
                </div>

                {/* Info */}
                <div className="text-center">
                  <p className="font-bold text-lg text-slate-800 dark:text-white mb-1">Full Stack Developer</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mb-4">B.Tech CSE · 2026</p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Projects', value: '3+' },
                      { label: 'Skills',   value: '15+' },
                      { label: 'Certs',    value: '2'   },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-slate-50 dark:bg-white/5 rounded-xl py-3 px-2">
                        <p className="font-bold text-xl gradient-text">{value}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white dark:bg-surface-dark2 rounded-xl px-3 py-2 shadow-lg border border-slate-200 dark:border-white/10 flex items-center gap-2"
              >
                <span className="text-lg">🚀</span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Open to Work</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-surface-dark2 rounded-xl px-3 py-2 shadow-lg border border-slate-200 dark:border-white/10 flex items-center gap-2"
              >
                <span className="text-lg">💡</span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200">Problem Solver</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
