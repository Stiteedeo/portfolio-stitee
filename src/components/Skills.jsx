import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiPython, SiJavascript, SiHtml5, SiLinux,
  SiReact, SiDjango, SiFlask, SiFastapi,
  SiPostgresql,
} from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';
import { FiDatabase, FiCpu, FiServer, FiCode, FiLayers } from 'react-icons/fi';
import { TbSql } from 'react-icons/tb';

const categories = [
  {
    title: 'Programming Languages',
    color: 'from-blue-500 to-primary-600',
    bgAccent: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700/40',
    icon: FiCode,
    skills: [
      { name: 'Python',     icon: SiPython,     color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML',       icon: SiHtml5,      color: '#E34F26' },
      { name: 'CSS',        icon: FaCss3Alt,    color: '#264DE4' },
      { name: 'SQL',        icon: TbSql,        color: '#336791' },
      { name: 'Linux',      icon: SiLinux,      color: '#FCC624' },
    ],
  },
  {
    title: 'Frameworks & Technologies',
    color: 'from-purple-500 to-pink-600',
    bgAccent: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-700/40',
    icon: FiLayers,
    skills: [
      { name: 'React',   icon: SiReact,   color: '#61DAFB' },
      { name: 'Django',  icon: SiDjango,  color: '#09f' },
      { name: 'Flask',   icon: SiFlask,   color: '#000000' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    ],
  },
  {
    title: 'CS Concepts',
    color: 'from-green-500 to-teal-600',
    bgAccent: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700/40',
    icon: FiCpu,
    skills: [
      { name: 'DSA',   icon: FiCpu,      color: '#10b981' },
      { name: 'OOP',   icon: FiCode,     color: '#6366f1' },
      { name: 'NoSQL', icon: FiDatabase, color: '#f59e0b' },
    ],
  },
  {
    title: 'Core Fundamentals',
    color: 'from-orange-500 to-red-500',
    bgAccent: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700/40',
    icon: FiServer,
    skills: [
      { name: 'Networking',  icon: FiServer,   color: '#f97316' },
      { name: 'OS',          icon: FiCpu,      color: '#8b5cf6' },
      { name: 'DBMS',        icon: SiPostgresql, color: '#336791' },
    ],
  },
];

function SkillBadge({ name, icon: Icon, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-primary-300 dark:hover:border-primary-600/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default"
    >
      <Icon className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" style={{ color }} />
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="py-24 bg-slate-50 dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono font-semibold text-primary-500 uppercase tracking-widest mb-3">My toolkit</p>
          <h2 className="section-heading text-slate-900 dark:text-white">Skills & Technologies</h2>
          <div className="section-divider" />
          <p className="section-subheading">Technologies I use to build impactful solutions</p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, catIdx) => {
            const CatIcon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIdx * 0.12 }}
                className="card-glass rounded-2xl p-6"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center`}>
                    <CatIcon className="text-white w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white">{cat.title}</h3>
                  <span className="ml-auto text-xs font-mono bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 px-2 py-1 rounded-md">
                    {cat.skills.length} skills
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, skillIdx) => (
                    <SkillBadge
                      key={skill.name}
                      {...skill}
                      delay={catIdx * 0.1 + skillIdx * 0.05}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 card-glass rounded-2xl p-6 flex flex-wrap justify-around gap-6"
        >
          {[
            { label: 'Languages',    value: '6',  icon: '📝' },
            { label: 'Frameworks',   value: '4',  icon: '⚡' },
            { label: 'CS Concepts',  value: '3',  icon: '🧠' },
            { label: 'Core Topics',  value: '3',  icon: '🔧' },
            { label: 'Total Skills', value: '16', icon: '🚀' },
          ].map(({ label, value, icon }) => (
            <div key={label} className="text-center">
              <span className="text-2xl mb-1 block">{icon}</span>
              <p className="text-2xl font-black gradient-text">{value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
