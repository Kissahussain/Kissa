import React, { useMemo, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#case-studies' },
  { label: 'Art Website', href: 'https://eastndwest.com', external: true }
];

const socials = [
  { label: 'Email', href: 'mailto:hello@example.com', icon: <MdEmail /> },
  { label: 'GitHub', href: 'https://github.com/Kissahussain', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kissa-hussain', icon: <FaLinkedin /> },
  { label: 'Medium', href: 'https://medium.com/@kissahussain', icon: <FaMedium /> }
];

const caseStudies = [
  {
    title: 'EcoEats',
    role: 'Front-end Developer, UI/UX Researcher',
    description: 'An AI-powered app that helps students find creative ways to use leftover food, promoting both sustainability and financial savings.',
    note: 'Case study in progress — in the meantime, enjoy the web app!',
    url: 'https://ecoeats-hci.web.app/',
    accent: '#F2CCB4',
    logo: '/Ecoeats logo.png',
  },
  {
    title: 'Print Workshop',
    role: 'Workshop Curator · 2025',
    description: 'Hosted a community-driven workshop on print design and techniques.',
    url: 'https://eastndwest.com/blogs/news/print-workshop',
    accent: '#F5955E',
    logo: '/East & West.png',
  },
  {
    title: 'Graphic Designs',
    role: 'Multimedia Art',
    description: 'Created a series of graphic designs for social media and print, using Adobe Illustrator and Canva tools.',
    url: '/graphic-designs.html',
    accent: '#FB3539',
    logoText: 'Designs',
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
            {item.icon}
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
        <h1>Hi, I'm <span className="name-highlight">Kissa!</span><br />A product designer and<br />artist in Texas.</h1>
        <div className="hero-actions">
          <a className="button" href="#case-studies">Projects</a>
        </div>
      </div>
      <div className="hero-photos">
        <img className="hero-photo hero-photo--back" src="/IMG_1195.jpeg" alt="Kissa" />
        <img className="hero-photo hero-photo--front" src="/IMG_1362.jpeg" alt="Kissa" />
      </div>
    </section>
  );
}

function Experience() {
  const items = useMemo(
    () => [
      {
        role: 'Founder',
        company: 'East & West',
        period: 'OCT 2025 – PRESENTT',
        bullets: [
          'Launched and scaled a personal brand as an oil painter, designing multi-medium content using Canva, Adobe Creative Suite, and CapCut to grow an engaged social media audience.',
          'Secured two commission pieces within the first three months of launch, demonstrating strong client acquisition and brand credibility.',
          'Curated a small-group art workshop, teaching techniques including stamp work to foster creativity and community.t campaigns.',
        ]
      },
      {
        role: 'Technical Specialist',
        company: 'Apple',
        period: 'AUG 2024 – PRESENT',
        bullets: [
          'Guided customers through device troubleshooting using  knowledge of Apples UI and ecosystem.',
          'Driving a significant improvement in customer experience, raising our Net Promoter Score (NPS) from 56 to 100  within a single quarter.',
        ]
      },
      {
        role: 'Social Media Manager',
        company: 'Texas State University',
        period: 'AUG 2022 – JAN 2023',
        bullets: [
          'Designed social and print content using Canva and Adobe Creative Suite.',
          'Drove significant follower growth in a single semester and boosting student event attendance for the Muslim Student Association.',
        ]
      }
    ],
    []
  );

  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section-block">
      <p className="section-label">Experience</p>
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
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-cycle through cards every 3s unless the user is interacting
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive(a => (a + 1) % caseStudies.length), 2000);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <section id="case-studies" className="section-block">
      <p className="section-label">Projects</p>
      <div
        className="case-stack"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {caseStudies.map((study, i) => {
          const n = caseStudies.length;
          const offset = ((i - active + n) % n); // circular: 0=active, 1=next-right, n-1=prev-left
          const cls = offset === 0 ? 'is-active' : offset === 1 ? 'is-next' : 'is-prev';
          return (
            <div
              key={study.title}
              className={`case-slide ${cls}`}
              onClick={() => { setPaused(true); setActive(i); }}
            >
              <div className="case-slide-logo" style={{ background: study.accent }}>
                {study.logo
                  ? <img src={study.logo} alt={study.title} style={{ width: '82%', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
                  : <span className={study.logoText ? 'logo-text' : ''}>{study.logoText ?? study.title[0]}</span>}
              </div>
              <div className="case-slide-text">
                <p className="muted">{study.role}</p>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
                {study.note && <p className="case-note">{study.note}</p>}
                <a href={study.url} className="case-link" target="_blank" rel="noreferrer">View project →</a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="case-dots">
        {caseStudies.map((_, i) => (
          <button key={i} className={`case-dot${i === active ? ' active' : ''}`} onClick={() => setActive(i)} aria-label={`Project ${i + 1}`} />
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
        <p>
          I'm currently working on a new case study while I work part-time at Apple as a Technical Specialist, where I
          get to help people with common problems they have on their iPhones. It's the most inspirational place to work
          if you're a product designer,you understand how users interact with their devices.
        </p>
        <p>Here are some tech and tools I'm great at:</p>
        <ul className="about-tools">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>Figma</li>
          <li>Adobe Creative Suite</li>
        </ul>
        <p>
          In my free time, I'm either bouldering, inventing new recipes, or working on my business. Oh, I make content too.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Kissa Hussain</p>
      <p>Designed and handcoded with Claude Code ❤️</p>
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
