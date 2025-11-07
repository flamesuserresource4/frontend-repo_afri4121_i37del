import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Flowly Mobile',
    year: '2024',
    category: 'Mobile App',
    outcome: 'Reduced task time by 30%',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Nimbus Dashboard',
    year: '2023',
    category: 'SaaS Dashboard',
    outcome: 'Increased engagement 2.5x',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Arcade Commerce',
    year: '2022',
    category: 'E-commerce',
    outcome: 'Checkout drop-off -18%',
    image: 'https://images.unsplash.com/photo-1751759196124-a0b55924a36d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcmNhZGUlMjBDb21tZXJjZXxlbnwwfDB8fHwxNzYyNTAyNDE4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Case Studies</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">Selected projects and outcomes</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950"
          >
            <div className="relative aspect-video overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>{p.year}</span>
                <span>{p.category}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.outcome}</p>
              <a href="#" className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline">View Full Case Study</a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
