import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { HeroSection } from '@/components/HeroSection';
import { HeroErrorBoundary } from '@/components/HeroErrorBoundary';
import { AnimatedGridBackground } from '@/components/AnimatedGridBackground';
import { FlowArt, FlowSection } from '@/components/FlowArt';
import { Github, Linkedin, Mail, ArrowUpRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn('fixed top-0 left-0 right-0 z-[200] transition-all duration-300', scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6')}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tighter text-white">
          HF<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-white/70">
          <a href="#about" className="hover:text-primary transition-colors">01. About</a>
          <a href="#skills" className="hover:text-primary transition-colors">02. Skills</a>
          <a href="#experience" className="hover:text-primary transition-colors">03. Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">04. Projects</a>
        </div>
        <a href="#contact" className="md:hidden text-sm font-mono text-primary">Contact</a>
      </div>
    </nav>
  );
};

const SectionHeading = ({ title, number }: { title: string, number: string }) => (
  <div className="flex items-center gap-4 mb-12">
    <span className="text-primary font-mono text-lg">{number}.</span>
    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
    <div className="h-px bg-white/10 flex-grow ml-4 max-w-[200px]" />
  </div>
);

const AboutSection = () => (
  <section id="about" className="relative min-h-screen flex items-center py-24 z-10">
    <AnimatedGridBackground className="absolute inset-0" />
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <SectionHeading number="01" title="About Me" />
        <div className="space-y-6 text-lg text-white/70 leading-relaxed font-sans">
          <p>
            I'm a 100% Merit Scholar studying Artificial Intelligence at GIKI, Pakistan. 
            My focus lies at the intersection of machine learning, data engineering, and scalable 
            software architecture.
          </p>
          <p>
            Whether it's predicting stock market regimes using ensemble models, extracting 
            chemical entities via NLP, or building platforms that serve thousands of users, 
            I build systems that are robust, precise, and impactful.
          </p>
          <div className="p-6 mt-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <Terminal size={16} />
              <span>Education</span>
            </div>
            <ul className="space-y-4">
              <li>
                <div className="text-white">B.Sc. Artificial Intelligence</div>
                <div className="text-white/50">GIKI, Pakistan &middot; 100% Merit Scholarship</div>
              </li>
              <li>
                <div className="text-white">CAIE A-Levels</div>
                <div className="text-white/50">Highbrow College &middot; 100% Merit Scholarship</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillCategory = ({ title, skills, delay }: { title: string, skills: string[], delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="border border-white/10 bg-black/40 p-6 rounded-sm backdrop-blur-sm hover:border-primary/50 transition-colors"
  >
    <h3 className="text-primary font-mono text-sm mb-4 uppercase tracking-widest">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-white/5 border border-white/5 text-white/80 text-sm rounded-[2px] font-medium">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="relative min-h-screen flex items-center py-24 z-10">
    <AnimatedGridBackground className="absolute inset-0" />
    <div className="container mx-auto px-6 relative z-10">
      <SectionHeading number="02" title="Technical Arsenal" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <SkillCategory 
          title="Languages" 
          skills={['Python', 'C++', 'SQL', 'R', 'TypeScript', 'C']} 
          delay={0.1} 
        />
        <SkillCategory 
          title="ML & AI" 
          skills={['Scikit-learn', 'XGBoost', 'LightGBM', 'BiLSTM', 'SVM', 'NER', 'Transformers']} 
          delay={0.2} 
        />
        <SkillCategory 
          title="MLOps & Data" 
          skills={['Prefect', 'Deepchecks', 'CI/CD', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly']} 
          delay={0.3} 
        />
        <SkillCategory 
          title="Web & Databases" 
          skills={['React', 'PostgreSQL', 'Firestore', 'Streamlit', 'HTML/CSS', 'JavaScript']} 
          delay={0.4} 
        />
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="relative z-10 bg-background">
    <div className="container mx-auto px-6 pt-24 pb-12 relative z-20">
      <SectionHeading number="03" title="Experience" />
    </div>
    
    <FlowArt>
      <FlowSection>
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-primary mb-2">Jan 2026 – Present</div>
          <h3 className="text-4xl font-bold text-white mb-2">Officer Operations</h3>
          <div className="text-xl text-white/60 mb-8 border-b border-white/10 pb-6">Undergraduate Research Organization (UROG) &middot; GIKI</div>
          <ul className="space-y-4 text-lg text-white/80 list-disc list-inside ml-4 marker:text-primary">
            <li>Selected for Core Team out of 200+ applicants; steered process-improvement initiatives attaining 90%+ on-time execution rate across 15+ organizational programs.</li>
            <li>Conducting NLP research for automated chemical entity extraction using NER and transformer-based models; achieving 78% interim accuracy, targeting 90%+ on a corpus of 500+ scientific documents.</li>
          </ul>
        </div>
      </FlowSection>

      <FlowSection>
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-primary mb-2">Oct 2024 – Present</div>
          <h3 className="text-4xl font-bold text-white mb-2">Active Member</h3>
          <div className="text-xl text-white/60 mb-8 border-b border-white/10 pb-6">Team Hammerhead &middot; GIKI</div>
          <ul className="space-y-4 text-lg text-white/80 list-disc list-inside ml-4 marker:text-primary">
            <li>Spearheaded sponsorship outreach to 400+ organizations, converting 15%+ into active sponsors.</li>
            <li>Directly secured funding for 2+ major team engineering and competition initiatives through strategic corporate partnerships.</li>
          </ul>
        </div>
      </FlowSection>

      <FlowSection>
        <div className="max-w-4xl mx-auto">
          <div className="font-mono text-primary mb-2">Jan 2024 – Aug 2024</div>
          <h3 className="text-4xl font-bold text-white mb-2">Community & Fundraising Coordinator</h3>
          <div className="text-xl text-white/60 mb-8 border-b border-white/10 pb-6">OWE Organization</div>
          <ul className="space-y-4 text-lg text-white/80 list-disc list-inside ml-4 marker:text-primary">
            <li>Contributed 90+ volunteer hours across 8 months, leading fundraising drives that expanded program reach to 200+ underprivileged students across 3+ communities.</li>
            <li>Coordinated logistics for 20+ teaching sessions, improving scheduling efficiency by 40% and increasing average session attendance rate by 25%.</li>
          </ul>
        </div>
      </FlowSection>
    </FlowArt>
  </section>
);

const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  github, 
  metrics 
}: { 
  title: string, 
  description: string, 
  tech: string[], 
  github: string,
  metrics: string[]
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative flex flex-col justify-between p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-sm overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
      <Terminal size={120} className="text-primary translate-x-8 -translate-y-8" />
    </div>
    
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{title}</h3>
        <a href={github} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors" data-testid="link-github-project">
          <Github size={24} />
        </a>
      </div>
      <p className="text-white/70 mb-6 leading-relaxed">
        {description}
      </p>
      <ul className="mb-8 space-y-2">
        {metrics.map((m, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/60">
            <ArrowUpRight size={16} className="text-primary shrink-0 mt-0.5" />
            <span>{m}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <div className="flex flex-wrap gap-2 relative z-10 mt-auto pt-6 border-t border-white/10">
      {tech.map(t => (
        <span key={t} className="font-mono text-xs text-primary/80">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectsSection = () => (
  <section id="projects" className="relative py-32 bg-background z-10 border-t border-white/5">
    <div className="container mx-auto px-6">
      <SectionHeading number="04" title="Selected Works" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProjectCard 
          title="KSE-100 Predictive Framework"
          description="Multi-factor stock-market prediction system integrating 10+ macroeconomic and global indicators for the Pakistan Stock Exchange KSE-100 index."
          tech={['Python', 'XGBoost', 'LightGBM', 'MLOps', 'Prefect']}
          github="https://github.com/Sel68/kse-100-alpha"
          metrics={[
            'Applied K-Means clustering improving trend-segmentation accuracy by 25%',
            '~80% classification accuracy with XGBoost; LightGBM for volatility',
            'Production-grade MLOps pipeline automating 100% of data flow'
          ]}
        />
        <ProjectCard 
          title="GIKI Chronicles"
          description="Scalable, database-driven blog platform serving the entire GIKI student community with robust content management."
          tech={['PostgreSQL', 'React', 'TypeScript', 'Firestore']}
          github="https://github.com/hamxa296/blog"
          metrics={[
            'Grew to 4,000+ registered users rapidly',
            'Sustaining 500+ daily active users',
            'Achieved impressive 12% DAU/MAU engagement ratio'
          ]}
        />
        <ProjectCard 
          title="Spendr"
          description="Intelligent, interactive expense analytics dashboard with dynamic spend-category breakdowns and forecasting capabilities."
          tech={['Python', 'Streamlit', 'Scikit-learn', 'Pandas']}
          github="https://github.com/HarisFarooq23/Spendr-"
          metrics={[
            'Real-time financial data visualization',
            'Regression models trained on historical data',
            'Accurate monthly expenditure forecasting'
          ]}
        />
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="relative py-32 bg-[#050814] z-10 flex flex-col items-center justify-center text-center">
    <div className="container mx-auto px-6 max-w-2xl">
      <div className="font-mono text-primary mb-4 text-sm">05. What's Next?</div>
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-white/60 mb-12 text-lg leading-relaxed">
        Currently focused on expanding my expertise in AI/ML and looking for new opportunities to build intelligent systems. My inbox is always open.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16">
        <a 
          href="mailto:harisnetbackup@gmail.com" 
          className="flex items-center gap-3 px-8 py-4 bg-primary text-white font-mono rounded-[2px] hover:bg-primary/90 hover:-translate-y-1 transition-all"
          data-testid="button-email"
        >
          <Mail size={20} />
          <span>Say Hello</span>
        </a>
      </div>
      
      <div className="flex items-center justify-center gap-8">
        <a href="https://github.com/HarisFarooq23" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white hover:-translate-y-1 transition-all p-2" data-testid="link-footer-github">
          <span className="sr-only">GitHub</span>
          <Github size={24} />
        </a>
        <a href="https://linkedin.com/in/harisfarooq23" target="_blank" rel="noreferrer" className="text-white/50 hover:text-[#0077b5] hover:-translate-y-1 transition-all p-2" data-testid="link-footer-linkedin">
          <span className="sr-only">LinkedIn</span>
          <Linkedin size={24} />
        </a>
      </div>
    </div>
    
    <div className="absolute bottom-8 text-white/30 font-mono text-xs text-center w-full">
      Designed & Built with precision.<br/>
      &copy; {new Date().getFullYear()} Haris Farooq
    </div>
  </section>
);

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      <HeroErrorBoundary>
        <HeroSection />
      </HeroErrorBoundary>
      <div className="relative z-10 bg-background shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
