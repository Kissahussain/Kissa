import { useMemo, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';

const navLinks = [
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
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
  role: 'Design Lead',
  description: 'Led design on a deployed team app that helps households track expiring groceries and cut food waste.',
  liveUrl: 'https://your-deployed-app-url.com',
  figmaUrl: 'https://www.figma.com/proto/UyhJAAvEywqWNcCjwXBJ5O/EcoEats?node-id=230-2',
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
        <h1>Hi, I'm <span className="name-highlight">Kissa!</span> A Product designer and artist in Texas.</h1>
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
  return (
    <section id="case-studies" className="section-block">
      <p className="section-label">Projects</p>
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
        <h1></h1>
        <p>
          I'm currently working on a new case study while I work part-time at Apple as a Technical Specialist, where I
          get to help people with common problems they have on their iPhones. It's the most inspirational place to work
          if you're a product designer, you understand how users interact with their devices.
        </p>
        <p>Here are some tech and tools I'm great at:</p>
        <ul className="about-tools">
          <li>React.js</li>
          <li>Figma</li>
           <li>Adobe Illustrator</li>
          <li>Instagram and TikTok</li>
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
      <p>Designed and handcoded in Houston, TX with ❤️</p>
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
