import { motion } from 'framer-motion';
import {
  Layout, Compass, Rocket, Accessibility, Component, Handshake,
} from 'lucide-react';

const skills = [
  { name: 'UX Research', icon: Compass, level: 85 },
  { name: 'Wireframing', icon: Layout, level: 90 },
  { name: 'Prototyping', icon: Rocket, level: 88 },
  { name: 'UI Systems', icon: Component, level: 86 },
  { name: 'Usability Testing', icon: Accessibility, level: 82 },
  { name: 'Design Handoff', icon: Handshake, level: 84 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Capabilities</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ name, icon: Icon, level }, idx) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-medium">{name}</div>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-900">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${level}%` }} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-6">
        {['Figma', 'FigJam', 'Notion', 'Maze', 'UserTesting', 'Zeplin'].map((tool) => (
          <div key={tool} className="rounded-lg border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
            {tool}
          </div>
        ))}
      </div>
    </section>
  );
}
