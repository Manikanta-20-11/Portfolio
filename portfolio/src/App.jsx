import { useEffect, useState, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion'
import Starfield from './Starfield'
import { CountUp, Typewriter } from './effects'
import { Animate, AnimatedText } from './motion'
import { fadeUp, scaleIn, stagger, useParallax, useSlideIn } from './anim'
import {
  profile,
  stats,
  about,
  education,
  experience,
  projects,
  skills,
  achievements,
} from './data'
import './App.css'

const NAV = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['achievements', 'Achievements'],
  ['contact', 'Contact'],
]

function Icon({ name }) {
  const p = {
    github:
      'M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z',
    linkedin:
      'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10.4H5.67v7.94h2.67zM7 9.24a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.1v-4.36c0-2.33-.5-4.12-3.22-4.12-1.31 0-2.19.72-2.55 1.4h-.04v-1.18h-2.56v7.94h2.67v-3.93c0-1.04.2-2.04 1.48-2.04 1.27 0 1.29 1.19 1.29 2.11v3.86h2.67z',
    mail: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 6.7L4.5 7.2v.3l7.5 4.5 7.5-4.5v-.3L12 11.7z',
    phone:
      'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.6 1 1 0 0 1-.25 1l-2.22 2.2z',
    location:
      'M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    external: 'M14 3h7v7M21 3l-9 9M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5',
    spark: 'M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4L12 2z',
    download: 'M12 3v12m0 0l-4-4m4 4l4-4M5 21h14',
  }
  return (
    <svg viewBox="0 0 24 24" className="ic" aria-hidden="true">
      <path d={p[name]} />
    </svg>
  )
}

/* ============ Custom Cursor ============ */
function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const dotX = useTransform(mouseX, v => v - 4);
  const dotY = useTransform(mouseY, v => v - 4);
  
  const ringX = useSpring(useTransform(mouseX, v => v - 16), { stiffness: 150, damping: 15, mass: 0.1 });
  const ringY = useSpring(useTransform(mouseY, v => v - 16), { stiffness: 150, damping: 15, mass: 0.1 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    const handleMouseOver = (e) => {
      if (
        e.target.tagName?.toLowerCase() === 'a' ||
        e.target.tagName?.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(124, 92, 255, 0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(124, 92, 255, 0.5)' : 'rgba(124, 92, 255, 0.8)'
        }}
      />
    </>
  );
}



/* ============ Nav ============ */
function Nav({ active }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#top" className="nav__brand">
        <motion.span
          className="nav__logo"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          M
        </motion.span>
        <span className="nav__name">Manikanta</span>
      </a>
      <motion.nav
        className={`nav__links ${open ? 'nav__links--open' : ''}`}
        variants={stagger(0.07, 0.2)}
        initial="hidden"
        animate="show"
      >
        {NAV.map(([id, label]) => (
          <motion.a
            key={id}
            href={`#${id}`}
            className={active === id ? 'active' : ''}
            onClick={() => setOpen(false)}
            variants={fadeUp}
            whileHover={{ y: -2 }}
          >
            {label}
            {active === id && (
              <motion.span className="nav__ind" layoutId="navIndicator" />
            )}
          </motion.a>
        ))}
        <motion.a
          href={profile.links.resume}
          target="_blank"
          rel="noreferrer"
          download
          variants={fadeUp}
          whileHover={{ y: -2 }}
        >
          Résumé
        </motion.a>
      </motion.nav>
      <button
        className="nav__burger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </motion.header>
  )
}

/* ============ Hero ============ */
function Hero() {
  const { scrollY } = useScroll()
  const yText = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0])

  return (
    <section id="top" className="hero">
      <motion.div className="hero__inner" style={{ y: yText, opacity }}>
        <motion.p
          className="hero__hi"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="dot" /> Available for internships
        </motion.p>

        <h1 className="hero__title">
          <AnimatedText text="Hi, I'm" by="char" stagger={0.04} />{' '}
          <AnimatedText text="Manikanta." by="char" className="grad" stagger={0.05} delay={0.3} />
        </h1>

        <motion.h2
          className="hero__role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Typewriter words={profile.roles} />
        </motion.h2>

        <AnimatedText
          as="p"
          className="hero__tag"
          text={profile.tagline}
          by="word"
          stagger={0.02}
          delay={1.2}
          y={16}
        />

        <motion.div
          className="hero__actions"
          variants={stagger(0.12, 1.5)}
          initial="hidden"
          animate="show"
        >
          <motion.a className="btn btn--primary" href="#projects" variants={scaleIn} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            View My Work <Icon name="arrow" />
          </motion.a>
          <motion.a className="btn btn--ghost" href={`mailto:${profile.email}`} variants={scaleIn} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            <Icon name="mail" /> Get in Touch
          </motion.a>
          <motion.a className="btn btn--ghost" href={profile.links.resume} target="_blank" rel="noreferrer" download variants={scaleIn} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            <Icon name="download" /> Résumé
          </motion.a>
        </motion.div>

        <motion.div
          className="hero__socials"
          variants={stagger(0.1, 1.8)}
          initial="hidden"
          animate="show"
        >
          {[
            ['github', profile.links.github, 'GitHub'],
            ['linkedin', profile.links.linkedin, 'LinkedIn'],
            ['mail', `mailto:${profile.email}`, 'Email'],
          ].map(([ic, href, label]) => (
            <motion.a
              key={ic}
              href={href}
              target={ic === 'mail' ? undefined : '_blank'}
              rel="noreferrer"
              aria-label={label}
              variants={scaleIn}
              whileHover={{ y: -4, scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon name={ic} />
            </motion.a>
          ))}
          <motion.span className="hero__loc" variants={scaleIn}>
            <Icon name="location" /> {profile.location}
          </motion.span>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__stats"
        variants={stagger(0.12, 2)}
        initial="hidden"
        animate="show"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            className="stat"
            variants={scaleIn}
            whileHover={{ y: -6, scale: 1.04 }}
          >
            <div className="stat__val">
              <CountUp end={s.value} suffix={s.suffix} />
            </div>
            <div className="stat__label">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="#about"
        className="hero__scroll"
        aria-label="Scroll down"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <span className="mouse"><span /></span>
      </motion.a>
    </section>
  )
}

/* ============ Section shell ============ */
function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="section">
      <Animate className="section__head">
        <motion.span className="section__kicker" variants={scaleIn}>
          <Icon name="spark" /> {kicker}
        </motion.span>
        <h2 className="section__title">
          <AnimatedText text={title} by="word" stagger={0.06} />
        </h2>
      </Animate>
      {children}
    </section>
  )
}

/* ============ About ============ */
function About() {
  const cardRef = useSlideIn('right')
  return (
    <Section id="about" kicker="Who I Am" title="About Me">
      <div className="about">
        <div className="about__text">
          <AnimatedText as="p" text={about.summary} by="word" stagger={0.012} y={14} />
          <motion.ul
            className="about__highlights"
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {about.highlights.map((h) => (
              <motion.li key={h} variants={fadeUp} whileHover={{ x: 6 }}>
                <Icon name="spark" /> {h}
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <div ref={cardRef} className="about__edu card">
          <span className="card__badge">Education</span>
          <h3>{education.school}</h3>
          <p className="about__degree">{education.degree}</p>
          <p className="about__meta">
            {education.location} · {education.period}
          </p>
          <div className="about__gpa">
            <div>
              <strong>GPA</strong>
              <span>{education.gpa}</span>
            </div>
            <div>
              <strong>Honor</strong>
              <span>{education.award}</span>
            </div>
          </div>
          <motion.div
            className="about__course"
            variants={stagger(0.05)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {education.coursework.map((c) => (
              <motion.span key={c} className="chip" variants={scaleIn} whileHover={{ scale: 1.08 }}>
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

/* ============ Experience ============ */
function Experience() {
  return (
    <Section id="experience" kicker="Work Experience" title="Internship & Experience">
      <motion.div
        className="exp__list"
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experience.map((job) => (
          <motion.div
            key={job.company}
            className="exp__card card"
            variants={fadeUp}
            whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.18)' }}
          >
            <div className="exp__header">
              <div className="exp__title-group">
                <h3 className="exp__role">{job.role}</h3>
                <span className="exp__company">{job.company}</span>
              </div>
              <div className="exp__meta">
                <span className="exp__period chip">{job.period}</span>
                <span className="exp__location">{job.location}</span>
              </div>
            </div>
            <motion.ul
              className="exp__points"
              variants={stagger(0.08)}
            >
              {job.points.map((pt, i) => (
                <motion.li key={i} variants={fadeUp} whileHover={{ x: 5 }}>
                  <Icon name="spark" />
                  {pt}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* ============ Project card with screenshot + hover reveal ============ */
function TiltCard({ p }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 25 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 25 })
  const [hovered, setHovered] = useState(false)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    /* Stable wrapper handles all mouse events — no transform here, so no 3D-boundary flicker */
    <div
      className="proj-wrapper"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={() => setHovered(true)}
      style={{ perspective: 1200 }}
    >
      <motion.article
        layout
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX, rotateY }}
        className={`proj ${p.featured ? 'proj--featured' : ''}`}
      >
        {/* Screenshot preview area */}
        <div className="proj__preview">
          <img src={p.preview} alt={`${p.name} preview`} className="proj__img" loading="lazy" />
          <div className="proj__img-fade" />
          <div className="proj__img-header">
            <span className="proj__badge">{p.badge}</span>
            <motion.a
              className="proj__link"
              href={p.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${p.name} on GitHub`}
              whileHover={{ rotate: 12, scale: 1.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Icon name="github" />
            </motion.a>
          </div>
          {p.featured && <span className="proj__feat-ribbon">★ Featured</span>}
        </div>

        {/* Card body — always populated */}
        <div className="proj__body">
          <h3 className="proj__name">{p.name}</h3>
          <p className="proj__tagline">{p.tagline}</p>

          {/* Bullet points — animate in on hover */}
          <AnimatePresence initial={false}>
            {hovered && (
              <motion.ul
                className="proj__points"
                key="points"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ overflow: 'hidden' }}
              >
                {p.points.map((pt, i) => (
                  <motion.li
                    key={pt}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25 }}
                  >
                    <Icon name="spark" />{pt}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          {/* Tech chips — ALWAYS visible */}
          <div className="proj__tech">
            {p.tech.map((t) => (
              <span key={t} className="chip chip--tech">{t}</span>
            ))}
          </div>

          {/* View Code — ALWAYS visible */}
          <a className="proj__cta" href={p.github} target="_blank" rel="noreferrer">
            View Code <Icon name="external" />
          </a>
        </div>
      </motion.article>
    </div>
  )
}



function Projects() {
  const [filter, setFilter] = useState('All')
  const badges = ['All', ...Array.from(new Set(projects.map((p) => p.badge)))]
  const list = filter === 'All' ? projects : projects.filter((p) => p.badge === filter)

  return (
    <Section id="projects" kicker="What I've Built" title="Featured Projects">
      <motion.div
        className="proj__filters"
        variants={stagger(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {badges.map((b) => (
          <motion.button
            key={b}
            className={`filter ${filter === b ? 'filter--on' : ''}`}
            onClick={() => setFilter(b)}
            variants={scaleIn}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            {filter === b && <motion.span className="filter__bg" layoutId="filterBg" />}
            <span className="filter__label">{b}</span>
          </motion.button>
        ))}
      </motion.div>
      <motion.div layout className="proj__grid">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <TiltCard key={p.name} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}

/* ============ Skills ============ */
function Skills() {
  return (
    <Section id="skills" kicker="My Toolkit" title="Skills & Technologies">
      <motion.div
        className="skills"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {skills.map((s) => (
          <motion.div
            key={s.group}
            className="skills__card card"
            variants={fadeUp}
            whileHover={{ y: -6, borderColor: 'rgba(255,255,255,0.16)' }}
          >
            <h3>{s.group}</h3>
            <motion.div
              className="skills__chips"
              variants={stagger(0.05)}
            >
              {s.items.map((it) => (
                <motion.span
                  key={it}
                  className="chip chip--skill"
                  variants={scaleIn}
                  whileHover={{ scale: 1.12, y: -2 }}
                >
                  {it}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}

/* ============ Achievements (GSAP slide-in) ============ */
function AchievementItem({ a, side }) {
  const ref = useSlideIn(side)
  return (
    <div ref={ref} className="tl">
      <div className="tl__dot" />
      <motion.div className="tl__card card" whileHover={{ x: 6, scale: 1.01 }}>
        <div className="tl__head">
          <span className={`tl__tag tl__tag--${a.tag.toLowerCase()}`}>{a.tag}</span>
          <span className="tl__date">{a.date}</span>
        </div>
        <h3>{a.title}</h3>
        <p>{a.description}</p>
      </motion.div>
    </div>
  )
}

function Achievements() {
  return (
    <Section id="achievements" kicker="Milestones" title="Achievements & Hackathons">
      <div className="timeline">
        {achievements.map((a, i) => (
          <AchievementItem key={a.title} a={a} side={i % 2 === 0 ? 'left' : 'right'} />
        ))}
      </div>
    </Section>
  )
}

/* ============ Contact ============ */
function Contact() {
  return (
    <section id="contact" className="section contact">
      <Animate className="contact__inner" variants={fadeUp}>
        <motion.span className="section__kicker" variants={scaleIn}>
          <Icon name="spark" /> Let's Connect
        </motion.span>
        <h2 className="contact__title">
          <AnimatedText text="Let's build something" by="word" stagger={0.05} />{' '}
          <AnimatedText text="amazing" by="char" className="grad" stagger={0.05} delay={0.4} />{' '}
          <AnimatedText text="together." by="word" stagger={0.05} delay={0.6} />
        </h2>
        <AnimatedText
          as="p"
          className="contact__sub"
          text="I'm actively seeking internship opportunities in software development and data engineering. My inbox is always open."
          by="word"
          stagger={0.015}
          y={12}
        />
        <motion.div
          className="contact__actions"
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.a className="btn btn--primary" href={`mailto:${profile.email}`} variants={scaleIn} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            <Icon name="mail" /> Say Hello
          </motion.a>
          <motion.a className="btn btn--ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer" variants={scaleIn} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            <Icon name="linkedin" /> LinkedIn
          </motion.a>
        </motion.div>
        <motion.div
          className="contact__cards"
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {[
            ['mail', `mailto:${profile.email}`, profile.email],
            ['phone', `tel:${profile.phone}`, profile.phone],
            ['github', profile.links.github, 'GitHub'],
          ].map(([ic, href, label]) => (
            <motion.a
              key={ic}
              className="contact__card"
              href={href}
              target={ic === 'github' ? '_blank' : undefined}
              rel="noreferrer"
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.03 }}
            >
              <Icon name={ic} />
              <span>{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </Animate>
      <footer className="footer">
        <p>© 2026 {profile.name}</p>
        <a href="#top" className="footer__top">Back to top ↑</a>
      </footer>
    </section>
  )
}

/* ============ Active section + progress ============ */
function useActiveSection() {
  const [active, setActive] = useState('about')
  useEffect(() => {
    const ids = NAV.map(([id]) => id)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])
  return active
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div className="progress" style={{ scaleX: scrollYProgress }} />
}

export default function App() {
  const active = useActiveSection()
  const glow1 = useParallax(0.4)
  const glow2 = useParallax(0.25)
  
  const glowX = useMotionValue(-1000);
  const glowY = useMotionValue(-1000);
  
  const springGlowX = useSpring(useTransform(glowX, v => v - 300), { stiffness: 50, damping: 20 });
  const springGlowY = useSpring(useTransform(glowY, v => v - 300), { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [glowX, glowY]);

  return (
    <>
      <CustomCursor />
      <Starfield />
      <motion.div 
        className="glow glow--interactive" 
        style={{ x: springGlowX, y: springGlowY }}
      />
      <div ref={glow1} className="glow glow--1" />
      <div ref={glow2} className="glow glow--2" />
      <ScrollProgress />
      <Nav active={active} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
