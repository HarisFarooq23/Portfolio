
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { HeroSection } from '@/components/HeroSection';
import { HeroErrorBoundary } from '@/components/HeroErrorBoundary';
import { FlowArt, FlowSection } from '@/components/FlowArt';
import { TechCard } from '@/components/PixelCanvas';
import { FileTree } from '@/components/FileTree';
import { RatingInteraction } from '@/components/RatingInteraction';
import { Perspective, Highlight } from '@/components/Perspective';
import { LocationMap } from '@/components/LocationMap';
import { ZoomParallax } from '@/components/ZoomParallax';

import { Github, Linkedin, Mail, ArrowUpRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const BG = '#0a0907';
const BEIGE = '#c9b08c';
const CREAM = '#ede0cc';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-[200] transition-all duration-300', scrolled ? 'backdrop-blur-md border-b py-4' : 'bg-transparent py-6')}
      style={{ background: scrolled ? 'rgba(10,9,7,0.85)' : 'transparent', borderColor: 'rgba(201,176,140,0.1)' }}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tighter" style={{ color: CREAM }}>
          HF<span style={{ color: BEIGE }}>.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono" style={{ color: 'rgba(237,224,204,0.6)' }}>
          <a href="#about" className="hover:text-[#c9b08c] transition-colors">01. About</a>
          <a href="#skills" className="hover:text-[#c9b08c] transition-colors">02. Skills</a>
          <a href="#experience" className="hover:text-[#c9b08c] transition-colors">03. Experience</a>
          <a href="#projects" className="hover:text-[#c9b08c] transition-colors">04. Projects</a>
          <a href="#contact" className="hover:text-[#c9b08c] transition-colors">05. Contact</a>
        </div>
      </div>
    </nav>
  );
};

const SectionLabel = ({ number, title }: { number: string; title: string }) => (
  <div className="flex items-center gap-4 mb-16">
    <span className="font-mono text-lg" style={{ color: BEIGE }}>{number}.</span>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: CREAM }}>{title}</h2>
    <div className="h-px flex-grow ml-4 max-w-[200px]" style={{ background: 'rgba(201,176,140,0.12)' }} />
  </div>
);

const AboutSection = () => (
  <section id="about" className="relative min-h-screen flex items-center py-32 z-10" style={{ background: BG }}>
    <div className="container mx-auto px-6">
      <SectionLabel number="01" title="About Me" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Perspective maxRotateX={8} maxRotateY={15} smoothing={0.08}>
          <div className="text-2xl md:text-3xl font-bold leading-relaxed" style={{ color: CREAM }}>
            I build <Highlight color="beige">intelligent systems</Highlight> that sit at the intersection of{' '}
            <Highlight color="amber">machine learning</Highlight>,{' '}
            data engineering, and{' '}
            <Highlight color="warm">scalable architecture</Highlight>.
          </div>
          <p className="mt-6 text-base leading-relaxed font-mono" style={{ color: 'rgba(237,224,204,0.5)', fontSize: '0.85rem' }}>
            Tilt your screen — or move your mouse.
          </p>
        </Perspective>

        <div className="space-y-8">
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(237,224,204,0.7)' }}>
            100% Merit Scholar studying Artificial Intelligence at GIKI, — Building systems that are robust, precise, and impactful.
          </p>

          <div className="p-6 border" style={{ borderColor: 'rgba(201,176,140,0.15)', background: 'rgba(201,176,140,0.04)' }}>
            <div className="flex items-center gap-2 mb-6 font-mono text-sm" style={{ color: BEIGE }}>
              <Terminal size={14} />
              <span className="tracking-widest text-xs">EDUCATION</span>
            </div>
            <div className="space-y-5">
              <div>
                <div className="font-bold" style={{ color: CREAM }}>B.Sc. Artificial Intelligence</div>
                <div className="font-mono text-sm mt-1" style={{ color: 'rgba(201,176,140,0.6)' }}>GIKI, Pakistan &middot; 100% Merit Scholarship</div>
              </div>
              <div className="h-px" style={{ background: 'rgba(201,176,140,0.08)' }} />
              <div>
                <div className="font-bold" style={{ color: CREAM }}>CAIE A-Levels</div>
                <div className="font-mono text-sm mt-1" style={{ color: 'rgba(201,176,140,0.6)' }}>Highbrow College &middot; 100% Merit Scholarship</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const techCards = [
  {
    abbr: 'PY', label: 'Python',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly'],
    colors: ['#c9b08c22', '#b89a7233', '#a08060aa'],
  },
  {
    abbr: 'ML', label: 'Machine Learning',
    skills: ['XGBoost', 'LightGBM', 'Scikit-learn', 'BiLSTM', 'SVM'],
    colors: ['#c9b08c33', '#d4b89622', '#c4a45f44'],
  },
  {
    abbr: 'NLP', label: 'NLP & Transformers',
    skills: ['BERT', 'NER', 'HuggingFace', 'spaCy'],
    colors: ['#a0806044', '#b89a7222', '#c9b08c33'],
  },
  {
    abbr: 'OPS', label: 'MLOps & Data',
    skills: ['Prefect', 'Deepchecks', 'CI/CD', 'Pipeline'],
    colors: ['#c4a45f33', '#a08060aa', '#b89a7222'],
  },
  {
    abbr: 'WEB', label: 'Web & Databases',
    skills: ['React', 'TypeScript', 'PostgreSQL', 'Firestore'],
    colors: ['#c9b08c22', '#d4b89633', '#b89a7244'],
  },
  {
    abbr: 'SYS', label: 'Languages & Systems',
    skills: ['Python', 'C++', 'SQL', 'R', 'C', 'TypeScript'],
    colors: ['#a0806033', '#c9b08c44', '#b89a7222'],
  },
];

const SkillsSection = () => (
  <section id="skills" className="relative py-32 z-10" style={{ background: BG }}>
    <div className="container mx-auto px-6">
      <SectionLabel number="02" title="Technical Arsenal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5">
        {techCards.map((card, i) => (
          <motion.div
            key={card.abbr}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <TechCard {...card} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="relative z-10" style={{ background: BG }}>
    <div className="container mx-auto px-6 pt-24 pb-12 relative z-20">
      <SectionLabel number="03" title="Experience" />
    </div>

    <FlowArt>
      

      <FlowSection>
        <div className="max-w-4xl mx-auto">
          <div className="font-mono mb-2 text-sm" style={{ color: BEIGE }}>Oct 2024 – Present</div>
          <h3 className="text-4xl font-bold mb-2" style={{ color: CREAM }}>Active Member</h3>
          <div className="text-xl mb-4 border-b pb-6" style={{ color: 'rgba(237,224,204,0.5)', borderColor: 'rgba(201,176,140,0.1)' }}>
            Team Hammerhead &middot; GIKI
          </div>
          <div className="mb-6 px-4 py-3 border-l-2 font-mono text-sm" style={{ borderColor: BEIGE, background: 'rgba(201,176,140,0.06)', color: BEIGE }}>
            Part of the <strong>Automation Team</strong> — participating in the{' '}
            <strong>Shell Eco Marathon, Qatar</strong> (upcoming)
          </div>
          <ul className="space-y-4 text-lg list-disc list-inside ml-4" style={{ color: 'rgba(237,224,204,0.8)' }}>
            <li className="marker:text-[#c9b08c]">Awarded with Hammerhead Excellence Awards for the session 2024-2025 and 2025-2026.</li>
            <li className="marker:text-[#c9b08c]">Achieved 6th place in Safety at SEMA'26 .</li>
            <li className="marker:text-[#c9b08c]">Led design workshop focused on UX and design principles, training technical team members.</li>
            <li className="marker:text-[#c9b08c]">Managed media outreach for the team, generating over 150K impressions over the past year.</li>
          </ul>
        </div>
      </FlowSection>

      <FlowSection>
        <div className="max-w-4xl mx-auto">
          <div className="font-mono mb-2 text-sm" style={{ color: BEIGE }}>Jan 2024 – Aug 2024</div>
          <h3 className="text-4xl font-bold mb-2" style={{ color: CREAM }}>Advisor & CTO</h3>
          <div className="text-xl mb-8 border-b pb-6" style={{ color: 'rgba(237,224,204,0.5)', borderColor: 'rgba(201,176,140,0.1)' }}>
            Highbrow Entrepreneurship Society 
          </div>
          <div className="mb-6 px-4 py-3 border-l-2 font-mono text-sm" style={{ borderColor: BEIGE, background: 'rgba(201,176,140,0.06)', color: BEIGE }}>
            Awarded as the Most Active Society Bearer <strong>for the session</strong> — participating in the{' '}
            <strong>2023-2024</strong> 
          </div>
          <ul className="space-y-4 text-lg list-disc list-inside ml-4" style={{ color: 'rgba(237,224,204,0.8)' }}>
            <li className="marker:text-[#c9b08c]">Connected students with resources, mentorship, and opportunities to turn their ideas into viable ventures..</li>
            <li className="marker:text-[#c9b08c]">- Led delegations to following events in academic year 2023-24
  Nasa Space Apps , HU - ACE , Generations - Negotium , Cedar College - AKU presidents challenge , AKU</li>
          </ul>
        </div>
      </FlowSection>

      <FlowSection>
        <div className="max-w-4xl mx-auto">
          <div className="font-mono mb-2 text-sm" style={{ color: BEIGE }}>Jan 2026 – Present</div>
          <h3 className="text-4xl font-bold mb-2" style={{ color: CREAM }}>Officer Operations</h3>
          <div className="text-xl mb-8 border-b pb-6" style={{ color: 'rgba(237,224,204,0.5)', borderColor: 'rgba(201,176,140,0.1)' }}>
            Undergraduate Research Organization (UROG) &middot; GIKI
          </div>
          <ul className="space-y-4 text-lg list-disc list-inside ml-4" style={{ color: 'rgba(237,224,204,0.8)' }}>
            <li style={{ '--tw-prose-bullets': BEIGE } as React.CSSProperties} className="marker:text-[#c9b08c]">Selected for Core Team out of 200+ applicants</li>
            <li className="marker:text-[#c9b08c]">On a mission to promote Undergraduate-level research and innovation at GIKI.</li>
            <li className="marker:text-[#c9b08c]">Inspired from the Stanford University's Undergraduate Research Opportunities Program (UROP)</li>
            <li className="marker:text-[#c9b08c]">Conducting NLP research for automated chemical entity extraction using NER and transformer-based models</li>
          </ul>
        </div>
      </FlowSection>
    </FlowArt>
  </section>
);

const projectTree = [
  {
    name: 'KSE-100 Predictive Framework',
    type: 'folder' as const,
    children: [
      { name: 'market_data.py', type: 'file' as const, extension: 'py' },
      { name: 'train_xgboost.py', type: 'file' as const, extension: 'py' },
      { name: 'lightgbm_volatility.py', type: 'file' as const, extension: 'py' },
      { name: 'pipeline.py', type: 'file' as const, extension: 'py' },
      { name: 'config.json', type: 'file' as const, extension: 'json' },
      { name: 'README.md', type: 'file' as const, extension: 'md' },
    ],
  },
  {
    name: 'GIKI Chronicles',
    type: 'folder' as const,
    children: [
      { name: 'app.tsx', type: 'file' as const, extension: 'tsx' },
      { name: 'database.ts', type: 'file' as const, extension: 'ts' },
      { name: 'blog_post.ts', type: 'file' as const, extension: 'ts' },
      { name: 'auth.ts', type: 'file' as const, extension: 'ts' },
      { name: 'schema.sql', type: 'file' as const, extension: 'json' },
      { name: 'index.css', type: 'file' as const, extension: 'css' },
    ],
  },
  {
    name: 'GitOracle',
    type: 'folder' as const,
    children: [
      { name: 'search_engine.py', type: 'file' as const, extension: 'py' },
      { name: 'scoring.py', type: 'file' as const, extension: 'py' },
      { name: 'api.py', type: 'file' as const, extension: 'py' },
      { name: 'schema.sql', type: 'file' as const, extension: 'json' },
      { name: 'pipeline.py', type: 'file' as const, extension: 'py' },
      { name: 'app.tsx', type: 'file' as const, extension: 'tsx' },
    ],
  },
];

const projectMeta: Record<string, { description: string; metrics: string[]; github: string; tech: string[] }> = {
  'KSE-100 Predictive Framework': {
    description: 'Multi-factor stock-market prediction system integrating 10+ macroeconomic and global indicators for the Pakistan Stock Exchange.',
    metrics: ['~80% classification accuracy with XGBoost', 'K-Means clustering improves trend-segmentation by 25%', 'Production-grade MLOps pipeline, 100% automated'],
    github: 'https://github.com/Sel68/kse-100-alpha',
    tech: ['Python', 'XGBoost', 'LightGBM', 'Prefect', 'MLOps'],
  },
  'GIKI Chronicles': {
    description: 'Scalable database-driven blog platform serving the entire GIKI student community with robust content management.',
    metrics: ['4,000+ Unique visitors','300+ followers', '12% DAU/MAU engagement ratio'],
    github: 'https://github.com/hamxa296/blog',
    tech: ['React', 'TypeScript', 'PostgreSQL', 'Firestore'],
  },
  'GitOracle': {
    description: 'Open-source effort intelligence engine that transforms 1.8M+ GitHub repositories into a structured decision-making system — combining hybrid search, heuristic difficulty scoring, and topic intelligence so developers know not just what a project is, but how hard it will be.',
    metrics: ['5M+ repositories indexed in PostgreSQL', 'Hybrid keyword + filter search with effort estimation', 'Dual ingestion: Kaggle dataset + live GitHub API sync'],
    github: 'https://github.com/HarisFarooq23/Project_GitOracle',
    tech: ['Python', 'Flask', 'PostgreSQL', 'TypeScript', 'Node.js', 'Firebase'],
  },
};

const ProjectsSection = () => {
  const [selected, setSelected] = useState('KSE-100 Predictive Framework');
  const meta = projectMeta[selected];

  return (
    <section id="projects" className="relative py-32 z-10" style={{ background: BG }}>
      <div className="container mx-auto px-6">
        <SectionLabel number="04" title="Selected Works" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <FileTree
              data={projectTree.map(p => ({
                ...p,
                name: p.name,
              }))}
              className="cursor-pointer"
            />
            <p className="font-mono text-xs mt-3" style={{ color: 'rgba(201,176,140,0.35)' }}>
              Click a folder to explore
            </p>
          </div>

          <motion.div
            key={selected}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 border"
            style={{ borderColor: 'rgba(201,176,140,0.15)', background: 'rgba(201,176,140,0.03)' }}
          >
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-bold" style={{ color: CREAM }}>{selected}</h3>
              <a href={meta.github} target="_blank" rel="noreferrer"
                className="hover:opacity-100 transition-opacity p-1" style={{ color: 'rgba(201,176,140,0.5)' }}>
                <Github size={20} />
              </a>
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: 'rgba(237,224,204,0.65)' }}>{meta.description}</p>
            <ul className="space-y-3 mb-8">
              {meta.metrics.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(237,224,204,0.55)' }}>
                  <ArrowUpRight size={14} className="shrink-0 mt-0.5" style={{ color: BEIGE }} />
                  {m}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-6 border-t" style={{ borderColor: 'rgba(201,176,140,0.1)' }}>
              {meta.tech.map(t => (
                <span key={t} className="font-mono text-xs px-2 py-1 border" style={{ color: 'rgba(201,176,140,0.7)', borderColor: 'rgba(201,176,140,0.2)' }}>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 flex gap-4">
          {Object.keys(projectMeta).map(name => (
            <button
              key={name}
              onClick={() => setSelected(name)}
              className="font-mono text-xs px-4 py-2 border transition-all"
              style={{
                borderColor: selected === name ? BEIGE : 'rgba(201,176,140,0.2)',
                color: selected === name ? BEIGE : 'rgba(201,176,140,0.4)',
                background: selected === name ? 'rgba(201,176,140,0.08)' : 'transparent',
              }}
            >
              {name.split(' ').slice(0, 2).join(' ')}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const galleryImages = [
  { src: '/image1.jpg', alt: 'Gallery image 1' },
  { src: '/image2.jpg', alt: 'Gallery image 2' },
  { src: '/image3.jpg', alt: 'Gallery image 3' },
];

const LocationSection = () => (
  <section className="relative z-10 py-24" style={{ background: BG }}>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
        <div className="flex-1">
          <SectionLabel number="06" title="Based In" />
          <p className="text-lg leading-relaxed mt-6" style={{ color: 'rgba(237,224,204,0.55)' }}>
            Currently in <span style={{ color: BEIGE }}>Karachi, Pakistan</span> — studying AI &amp; ML at GIKI
            and building intelligent systems from the edge.
          </p>
        </div>
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <LocationMap
            location="Karachi, Pakistan"
            coordinates="24.8607° N, 67.0011° E"
          />
        </div>
      </div>
    </div>
  </section>
);

const GallerySection = () => (
  <section className="relative z-10" style={{ background: BG }}>
    <div className="container mx-auto px-6 max-w-5xl pt-8 pb-4">
      <SectionLabel number="07" title="Gallery" />
    </div>
    <ZoomParallax images={galleryImages} />
  </section>
);

const CERTS = [
  { issuer: 'Stanford Online', title: 'Supervised Machine Learning: Regression and Classification', date: 'Jul 2025', id: '28IX1TMVRS0B' },
  { issuer: 'Meta', title: 'Introduction to Front-End Development', date: 'Jul 2025', id: 'DDMJJJW35XCX' },
  { issuer: 'IBM', title: 'Exploratory Data Analysis for Machine Learning', date: 'Jul 2025', id: '7222GZMDA74P' },
  { issuer: 'IBM', title: 'Machine Learning with Python', date: 'Jul 2025', id: 'AVBVK6SWECGQ' },
  { issuer: 'DeepLearning.AI', title: 'AI For Everyone', date: 'Jun 2025', id: '4SD588NHDEV3' },
  { issuer: 'Google', title: 'Google UX Design Specialization', date: 'Jun 2025', id: '58RB8Z05VO4S' },
  { issuer: 'Google', title: 'Accelerate Your Job Search with AI', date: 'Mar 2025', id: 'TIGB7Q46NWFS' },
  { issuer: 'Google', title: 'Design a UX for Social Good & Prepare for Jobs', date: 'Jun 2025', id: 'UTUSS25O3LHD' },
  { issuer: 'Google', title: 'Build Dynamic User Interfaces (UI) for Websites', date: 'Jun 2025', id: 'N4ESMBIOTSDV' },
  { issuer: 'Google', title: 'Create High-Fidelity Designs and Prototypes in Figma', date: 'Jun 2025', id: 'O3FK8JS4NQX8' },
  { issuer: 'Google', title: 'Conduct UX Research and Test Early Concepts', date: 'Jun 2025', id: 'H9PAYYMVZKYZ' },
  { issuer: 'Google', title: 'Build Wireframes and Low-Fidelity Prototypes', date: 'Jun 2025', id: 'LYN2RL90FYV5' },
  { issuer: 'Google', title: 'Start the UX Design Process: Empathize, Define, and Ideate', date: 'Jun 2025', id: '33OG36IKO6MY' },
  { issuer: 'Google', title: 'Foundations of User Experience (UX) Design', date: 'Jun 2025', id: 'COVGDN3VICGL' },
  { issuer: 'Google', title: 'Crash Course on Python', date: 'Apr 2025', id: 'Q88XQ342EQ2H' },
  { issuer: 'Coursera', title: 'Work with Components in Figma', date: 'Apr 2025', id: 'DGB9AMAOFSPN' },
  { issuer: 'Coursera', title: 'Create a No-Code Responsive Website with Webflow', date: 'Jun 2025', id: 'A4FUPAV1M6A9' },
  { issuer: 'IBM', title: 'Generative AI: Prompt Engineering Basics', date: 'Jun 2025', id: 'A5MPZ8A0QT34' },
  { issuer: 'IBM', title: 'Generative AI: Introduction and Applications', date: 'Apr 2025', id: 'YY1B5Z1CT1V1' },
  { issuer: 'IBM', title: 'Data Visualization with Python', date: 'Mar 2025', id: '' },
  { issuer: 'Google Cloud', title: 'Introduction to Image Generation', date: 'Feb 2025', id: '13976783' },
  { issuer: 'Google Cloud', title: 'Introduction to Large Language Models', date: 'Nov 2024', id: '12665010' },
  { issuer: 'Google Cloud', title: 'Introduction to Generative AI', date: 'Nov 2024', id: '12664437' },
];

const ISSUER_COLORS: Record<string, string> = {
  'Stanford Online': '#B91C1C',   // red
  'Meta': '#1877F2',
  'IBM': '#0F62FE',
  'DeepLearning.AI': '#FF6F00',
  'Google': '#34A853',            // green
  'Google Cloud': '#1A73E8',
  'Coursera': '#3C4F76',
};

const CertificationsSection = () => {
  const [filter, setFilter] = React.useState<string>('All');
  const issuers = ['All', ...Array.from(new Set(CERTS.map(c => c.issuer)))];
  const visible = filter === 'All' ? CERTS : CERTS.filter(c => c.issuer === filter);

  return (
    <section id="certifications" className="relative py-24 z-10" style={{ background: BG }}>
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionLabel number="08" title="Certifications" />
        <p className="mt-4 mb-10 text-base" style={{ color: 'rgba(237,224,204,0.45)' }}>
          {CERTS.length} credentials across AI/ML, UX Design, and Cloud
        </p>

        {/* Issuer filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {issuers.map(issuer => (
            <button
              key={issuer}
              onClick={() => setFilter(issuer)}
              className="font-mono text-xs px-3 py-1.5 border transition-all"
              style={{
                borderColor: filter === issuer ? BEIGE : 'rgba(201,176,140,0.18)',
                color: filter === issuer ? BG : 'rgba(201,176,140,0.55)',
                background: filter === issuer ? BEIGE : 'transparent',
              }}
            >
              {issuer}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((cert, i) => {
            const accent = ISSUER_COLORS[cert.issuer] ?? BEIGE;
            return (
              <motion.div
                key={cert.id || cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (i % 9) * 0.04 }}
                className="flex flex-col justify-between p-5 border"
                style={{
                  borderColor: 'rgba(201,176,140,0.12)',
                  background: 'rgba(201,176,140,0.03)',
                  borderLeft: `3px solid ${accent}`,
                }}
              >
                <div>
                  <div className="font-mono text-xs mb-3 tracking-wider uppercase"
                    style={{ color: accent, opacity: 0.85 }}>
                    {cert.issuer}
                  </div>
                  <p className="text-sm font-medium leading-snug mb-4" style={{ color: CREAM }}>
                    {cert.title}
                  </p>
                </div>
                <div className="flex items-end justify-between">
                  <span className="font-mono text-xs" style={{ color: 'rgba(201,176,140,0.4)' }}>
                    {cert.date}
                  </span>
                  {cert.id && (
                    <span className="font-mono text-[10px] tracking-wide" style={{ color: 'rgba(201,176,140,0.25)' }}>
                      {cert.id}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="relative py-32 z-10" style={{ background: BG }}>
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionLabel number="05" title="Get In Touch" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(237,224,204,0.6)' }}>
            Currently focused on expanding my expertise in AI/ML and looking for opportunities to build intelligent systems.
            My inbox is always open.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:harisfarooqbuilds@gmail.com"
              className="flex items-center gap-3 px-8 py-4 font-mono text-sm transition-all hover:-translate-y-1"
              style={{ background: BEIGE, color: BG }}
              data-testid="button-email"
            >
              <Mail size={18} />
              <span>SAY HELLO</span>
            </a>
            <div className="flex items-center gap-6 mt-4">
              <a href="https://github.com/HarisFarooq23" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs transition-all hover:-translate-y-1"
                style={{ color: 'rgba(201,176,140,0.5)' }}
                data-testid="link-footer-github">
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/harisfarooq23/" target="_blank" rel="noreferrer"
                className="flex items-center gap-2 font-mono text-xs transition-all hover:-translate-y-1"
                style={{ color: 'rgba(201,176,140,0.5)' }}
                data-testid="link-footer-linkedin">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 p-8 border"
          style={{ borderColor: 'rgba(201,176,140,0.12)', background: 'rgba(201,176,140,0.03)' }}>
          <div className="font-mono text-xs tracking-[0.3em]" style={{ color: 'rgba(201,176,140,0.4)' }}>
            PORTFOLIO FEEDBACK
          </div>
          <RatingInteraction />
          <p className="font-mono text-xs text-center" style={{ color: 'rgba(201,176,140,0.3)' }}>
            How did this portfolio make you feel?
          </p>
        </div>
      </div>

      <div className="mt-24 pt-8 border-t flex items-center justify-between" style={{ borderColor: 'rgba(201,176,140,0.08)' }}>
        <div className="font-mono text-xs" style={{ color: 'rgba(201,176,140,0.25)' }}>
          Designed &amp; Built by Haris Farooq
        </div>
        <div className="font-mono text-xs" style={{ color: 'rgba(201,176,140,0.25)' }}>
          &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <div style={{ background: BG }} className="min-h-screen">
      <Navbar />
      <HeroErrorBoundary>
        <HeroSection />
      </HeroErrorBoundary>
      <div className="relative z-10" style={{ boxShadow: '0 -30px 80px rgba(0,0,0,0.9)' }}>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <LocationSection />
        <GallerySection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </div>
  );
}
