import { useMemo, useState } from 'react';

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
      {
        role: 'Product Designer',
        company: 'EcoEats',
        period: 'JAN 2024 – PRESENT',
        bullets: [
          'Led end-to-end product design for a sustainable food waste app, from discovery to launch.',
          'Conducted user research and usability testing to inform design decisions.',
          'Built high-fidelity prototypes and design systems used across the product team.'
        ]
      },
      {
        role: 'Visual Designer',
        company: 'Creative Studio',
        period: 'JUN 2022 – DEC 2023',
        bullets: [
          'Created visual systems and brand identities for clients across lifestyle and tech.',
          'Designed motion graphics and editorial layouts for digital and print campaigns.',
          'Collaborated with developers to ensure pixel-perfect implementation.'
        ]
      },
      {
        role: 'Freelance Designer',
        company: 'Independent',
        period: 'MAR 2020 – MAY 2022',
        bullets: [
          'Delivered UI/UX and branding projects for early-stage startups and local businesses.',
          'Managed client relationships from brief to final delivery.',
          'Designed responsive web interfaces and marketing materials.'
        ]
      }
    ],
    []
  );

  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section-block">
      <p className="section-label">Experience</p>
      <h2>Work History</h2>
      <div className="experience-layout">
        <ul className="experience-sidebar">
          {items.map((item, i) => (
            <li
              key={item.company}
              className={`experience-tab${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {item.company}
            </li>
          ))}
        </ul>
        <div className="experience-detail">
          <h3 className="experience-title">
            {items[active].role} @ <span className="experience-company">{items[active].company}</span>
          </h3>
          <p className="experience-period">{items[active].period}</p>
          <ul className="experience-bullets">
            {items[active].bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
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
        <About />
        <Experience />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
