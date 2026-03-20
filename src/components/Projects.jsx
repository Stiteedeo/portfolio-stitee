import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    name: 'Hospital Recommendation System',
    emoji: '🏥',
    tagline: 'Medicure — Find & book specialized medical care easily',
    description:
      'Medicure is a web application designed to simplify the process of finding specialized medical care. Users can search for hospitals based on medical departments, view detailed hospital information, check appointment availability, and book appointments directly through the platform.',
    techStack: ['Python', 'Django', 'SQL', 'JavaScript', 'CSS'],
    github: 'https://github.com/Stiteedeo/hospital-recommendation-system',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30',
    features: ['Hospital Search', 'Appointment Booking', 'Department Filter'],
  },
  {
    name: 'Job Application Tracker',
    emoji: '💼',
    tagline: 'Track applications, manage interviews & store resumes',
    description:
      'A full-stack web application designed to help job seekers track job applications, manage interview notes, and store resumes securely. Features a dashboard with status tracking and filtering capabilities.',
    techStack: ['JavaScript', 'HTML', 'CSS', 'SQL', 'Python'],
    github: 'https://github.com/Stiteedeo/job-application-tracker',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30',
    features: ['Application Tracking', 'Interview Notes', 'Resume Manager'],
  },
  {
    name: 'AI Smart Inventory',
    emoji: '🤖',
    tagline: 'SaaS platform with AI-powered demand prediction',
    description:
      'A full-stack SaaS project to track products, monitor sales, and predict future demand via AI. Features a modern React frontend, FastAPI backend, and Scikit-learn powered ML model for predictive analytics.',
    techStack: ['React', 'Vite', 'TailwindCSS', 'FastAPI', 'Python', 'Scikit-learn', 'SQLite'],
    github: 'https://github.com/ArpitaChaini/ai-portfolio-builder',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
    features: ['AI Demand Prediction', 'Sales Analytics', 'Inventory Tracking'],
    featured: true,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className="group relative"
    >
      {project.featured && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg">
            ⭐ Featured Project
          </span>
        </div>
      )}

      <div className="card-glass rounded-2xl overflow-hidden h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-400 border border-slate-200/50 dark:border-white/5">

        {/* Card Header */}
        <div className={`relative h-36 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden`}>
          {/* Decorative blobs */}
          <div className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl -top-4 -left-4`} />
          <div className={`absolute w-24 h-24 rounded-full bg-gradient-to-br ${project.gradient} opacity-15 blur-xl bottom-0 right-0`} />

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-5xl mb-2">{project.emoji}</span>
            <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${project.gradient}`} />
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col h-full">
          {/* Title */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.name}
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{project.tagline}</p>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.map((f) => (
              <span key={f} className="px-2 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-400">
                ✓ {f}
              </span>
            ))}
          </div>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {project.techStack.map((tech) => (
                <button
                  type="button"
                  key={tech}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gradient-to-r ${project.gradient} text-white cursor-pointer hover:opacity-90 transition-opacity`}
                >
                  {tech}
                </button>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-white/10">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 flex-1 justify-center py-2.5 rounded-xl text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors duration-200"
            >
              <FiGithub className="w-4 h-4" />
              View on GitHub
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 dark:border-white/20 text-slate-600 dark:text-slate-400 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" ref={ref} className="py-24 bg-white dark:bg-surface-dark2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-semibold text-primary-500 uppercase tracking-widest mb-3">My work</p>
          <h2 className="section-heading text-slate-900 dark:text-white">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-subheading">Real-world applications built with modern tech stacks</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/StiteeDeo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <FiGithub className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
