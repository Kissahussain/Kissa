import { useMemo } from 'react';

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Art Website', href: 'https://eastndwest.com', external: true }
];

const socials = [
  { label: 'Email', href: 'mailto:hello@example.com', icon: '✉️' },
  { label: 'GitHub', href: 'https://github.com/Kissahussain', icon: '🐙' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/username', icon: '🔗' },
  { label: 'Medium', href: 'https://medium.com/@username', icon: '✍️' }
];

const caseStudies = [
  {
    title: 'EcoEats',
    role: 'Branding · 2024',
    description: 'Designing a sustainable experience to reduce food waste with purposeful product flows.',
    url: 'https://www.figma.com/proto/UyhJAAvEywqWNcCjwXBJ5O/EcoEats?node-id=230-2'
  },
  {
    title: 'Creative System',
    role: 'UI Design · 2024',
    description: 'Building a visual system that scales across editorial, web, and motion projects.',
    url: '#'
  },
  {
    title: 'Art Direction',
    role: 'Illustration · 2023',
    description: 'Developing concept-driven art direction for lifestyle and cultural brands.',
    url: '#'
  }
];

function Nav() {
  return (
    <header className="topbar">
      <div className="brand">
        <span>KH</span>
      </div>
      <nav className="nav-links">
        {navLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : '_self'}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="socials">
        {socials.map(item => (
          <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
            <span>{item.icon}</span>
          </a>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <h1>Hi, I'm Kissa! A Product designer and artist in Texas.</h1>
        <div className="hero-actions">
          <a className="button" href="#case-studies">Case Studies</a>
          <a className="button button-outline" href="#about">About Me</a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = useMemo(
    () => [
      { role: 'Product Designer', company: 'EcoEats', period: '2024 – Present', description: 'Led end-to-end product design for a sustainable food waste app, from user research to high-fidelity prototypes.' },
      { role: 'Visual Designer', company: 'Creative Studio', period: '2022 – 2024', description: 'Created visual systems, brand identities, and motion graphics for clients across lifestyle and tech.' },
      { role: 'Freelance Designer', company: 'Independent', period: '2020 – 2022', description: 'Delivered UI/UX and branding projects for early-stage startups and local businesses.' }
    ],
    []
  );

  return (
    <section id="experience" className="section-block">
      <p className="section-label">Experience</p>
      <h2>Work History</h2>
      <div className="experience-grid">
        {items.map(item => (
          <article key={`${item.role}-${item.company}`} className="card card-flip">
            <div className="card-inner">
              <div className="card-front">
                <h3>{item.role}</h3>
                <p className="muted">{item.company}</p>
                <p className="muted">{item.period}</p>
              </div>
              <div className="card-back">
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="case-studies" className="section-block">
      <p className="section-label">Selected Work</p>
      <h2>Case Studies</h2>
      <div className="case-grid">
        {caseStudies.map(study => (
          <a key={study.title} href={study.url} className="case-card" target="_blank" rel="noreferrer">
            <div>
              <p className="muted">{study.role}</p>
              <h3>{study.title}</h3>
              <p>{study.description}</p>
            </div>
            <span className="case-link">View project</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-block about-section">
      <div>
        <p className="section-label">About Me</p>
        <h2>I create distinctive digital experiences.</h2>
        <p>
          I combine design thinking, interaction, and product storytelling to help brands stand out online. My work
          spans branding, UX, responsive web design, and interactive prototypes.
        </p>
        <a className="button button-outline" href="https://eastndwest.com" target="_blank" rel="noreferrer">
          Visit Art Website
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Kissa Hussain</p>
      <p>Built with React + Vite</p>
    </footer>
  );
}

function App() {
  return (
    <div className="page-wrapper">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <CaseStudies />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
