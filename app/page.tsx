import Image from "next/image";
import { ContactForm } from "./contact-form";

export default function Home() {
  return (
    <div className="lp">
      <TopBar />
      <Nav />
      <Hero />
      <Trust />
      <Stats />
      <Programs />
      <MissionVision />
      <Methodology />
      <Differentiators />
      <Modalities />
      <Testimonials />
      <Sedes />
      <CTA />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__left">
          <span className="topbar__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            Sedes en Cali · Valle del Cauca
          </span>
          <span className="topbar__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" /></svg>
            <a href="tel:+5725245727">+57 (2) 524 5727</a>
          </span>
          <span className="topbar__item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
            <a href="https://wa.me/573000000000">WhatsApp</a>
          </span>
        </div>
        <div className="topbar__right">
          <a href="#sedes">Encuentra tu sede</a>
          <a href="#contacto">Agenda tu clase gratis →</a>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Image
          src="/brand/logo.png"
          alt="Educate Learning Center"
          className="nav__logo"
          width={160}
          height={40}
          priority
        />
        <div className="nav__links">
          <a href="#programas" className="nav__link nav__link--active">Programas</a>
          <a href="#metodologia" className="nav__link">Metodología</a>
          <a href="#diferencia" className="nav__link">¿Qué nos diferencia?</a>
          <a href="#mision" className="nav__link">Nosotros</a>
          <a href="#sedes" className="nav__link">Sedes</a>
          <a href="#contacto" className="nav__link">Contacto</a>
        </div>
        <div className="nav__right">
          <a href="#" className="btn btn--ghost btn--sm">Iniciar sesión</a>
          <a href="#contacto" className="btn btn--accent btn--sm">Agenda tu clase gratis</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const decorBlocks = [
    "var(--ed-orange)", null, "var(--ed-yellow)",
    null, "var(--ed-navy)", "var(--ed-red)",
    "var(--ed-burgundy)", "var(--ed-green)", null,
  ];
  return (
    <section className="hero">
      <div className="hero__decor-blocks">
        {decorBlocks.map((bg, i) => (
          <div key={i} style={bg ? { background: bg } : undefined} />
        ))}
      </div>
      <div className="hero__decor-corner" />

      <div className="container">
        <div className="hero__grid">
          <div>
            <div className="hero__pre">
              <span className="hero__pre-pill">NUEVO</span>
              <span>Inscripciones abiertas · Cohorte de julio 2026</span>
            </div>
            <h1 className="hero__h1">
              Aprende inglés que te lleva al{" "}
              <span style={{ color: "var(--ed-orange)" }}>mundo.</span>
            </h1>
            <p className="hero__lede">
              Niños, jóvenes y adultos. Grupos pequeños, profes certificados y una metodología 100% conversacional que de verdad te hace hablar — no solo memorizar.
            </p>
            <div className="hero__cta">
              <a href="#contacto" className="btn btn--accent btn--lg">Agenda tu clase gratis</a>
              <a href="#programas" className="btn btn--secondary btn--lg">Conoce los programas</a>
            </div>
            <div className="hero__social">
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span className="hero__stars">★★★★★</span>
                <strong style={{ color: "var(--ed-ink)" }}>4,9/5</strong>
                <span>· 412 reseñas de familias</span>
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--ed-green)" }} />
                Cupos abiertos para julio
              </span>
            </div>
          </div>

          <div className="hero__photo-wrap">
            <div className="hero__floating">
              <div className="hero__floating-num">4,9</div>
              <div className="hero__floating-text">
                de 5 estrellas
                <br />
                <strong style={{ color: "var(--ed-ink)" }}>412 familias</strong>
              </div>
            </div>
            <div className="hero__photo photo-ph" data-label="ESTUDIANTE · CLASE EN VIVO" />
            <div className="hero__sticker">Primera clase gratis ★</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="trust">
      <div className="trust__inner">
        <div className="trust__label">RESPALDOS QUE<br />NOS AVALAN</div>
        <div className="trust__list">
          <TrustItem bg="var(--ed-navy)" title="Marco Común Europeo" sub="Homologados A1 a C2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
          </TrustItem>
          <TrustItem bg="var(--ed-burgundy)" title="Cambridge Authorized" sub="Centro de preparación oficial">
            <polyline points="20 6 9 17 4 12" />
          </TrustItem>
          <TrustItem bg="var(--ed-orange)" title="Profes certificados" sub="TKT, CELTA y nativos">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </TrustItem>
          <TrustItem bg="var(--ed-green)" title="12 años en el Valle" sub="3.200 estudiantes formados">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </TrustItem>
        </div>
      </div>
    </section>
  );
}

function TrustItem({
  bg,
  title,
  sub,
  children,
}: {
  bg: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <div className="trust__item">
      <div className="trust__icon" style={{ background: bg }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
      </div>
      <div>
        <div className="trust__text-title">{title}</div>
        <div className="trust__text-sub">{sub}</div>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats__grid">
          <div>
            <div className="stat__num" style={{ color: "var(--ed-navy)" }}>
              12 <span style={{ fontSize: 32 }}>años</span>
            </div>
            <div className="stat__sub">formando estudiantes</div>
            <div className="stat__caption">en el Valle del Cauca desde 2014</div>
          </div>
          <div>
            <div className="stat__num" style={{ color: "var(--ed-orange)" }}>3,2k</div>
            <div className="stat__sub">estudiantes graduados</div>
            <div className="stat__caption">niños, jóvenes y adultos</div>
          </div>
          <div>
            <div className="stat__num" style={{ color: "var(--ed-green)" }}>
              76<span style={{ fontSize: 32 }}>%</span>
            </div>
            <div className="stat__sub">sube un nivel CEFR al año</div>
            <div className="stat__caption">medido por evaluación externa</div>
          </div>
          <div>
            <div className="stat__num" style={{ color: "var(--ed-burgundy)" }}>
              98<span style={{ fontSize: 32 }}>%</span>
            </div>
            <div className="stat__sub">aprueba Cambridge al primer intento</div>
            <div className="stat__caption">cohortes 2024 y 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section className="programs" id="programas">
      <div className="container">
        <div className="programs__header">
          <div>
            <div className="section-eyebrow">Programas de inglés</div>
            <h2 className="section-title">
              Un curso para cada edad,
              <br />
              una ruta para cada meta.
            </h2>
          </div>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ed-ink-3)", maxWidth: 380 }}>
            Todos nuestros programas están homologados con el Marco Común Europeo y estructurados en módulos de 51 horas.
          </p>
        </div>

        <div className="programs__grid">
          <article className="card">
            <div className="card__media photo-ph" data-label="NIÑOS · 6–10" />
            <div className="card__body">
              <div className="card__badge-row">
                <span className="lvl lvl--a1">A1</span>
                <span className="badge badge--orange badge--dot">Niños · 6–10</span>
              </div>
              <h3 className="card__title">Little Explorers</h3>
              <p className="card__desc">Cuentos, canciones, juegos y proyectos cortos. El inglés se descubre, no se memoriza.</p>
              <div className="card__meta">
                <span>6 módulos</span><span className="card__meta-dot" />
                <span>51 h c/u</span>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="card__media photo-ph" data-label="NIÑOS · 10–13" />
            <div className="card__body">
              <div className="card__badge-row">
                <span className="lvl lvl--a2">A2</span>
                <span className="badge badge--yellow badge--dot">Tweens · 10–13</span>
              </div>
              <h3 className="card__title">Explore 4 Learning</h3>
              <p className="card__desc">Lectura, escritura y conversación con temas que de verdad les importan a esta edad.</p>
              <div className="card__meta">
                <span>8 módulos</span><span className="card__meta-dot" />
                <span>51 h c/u</span>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="card__media photo-ph" data-label="ADOLES + ADULTOS" />
            <div className="card__body">
              <div className="card__badge-row">
                <span className="lvl lvl--b1">B1</span>
                <span className="lvl lvl--b2">B2</span>
                <span className="badge badge--solid-navy">Jóvenes &amp; adultos</span>
              </div>
              <h3 className="card__title">Confident Voices</h3>
              <p className="card__desc">Inglés conversacional para universidad, viajes y trabajo. Hablar fluido es la meta.</p>
              <div className="card__meta">
                <span>10 módulos</span><span className="card__meta-dot" />
                <span>51 h c/u</span>
              </div>
            </div>
          </article>

          <article className="card" style={{ boxShadow: "var(--sh-md)" }}>
            <div
              className="card__media"
              style={{
                aspectRatio: "16/10",
                background: "var(--ed-burgundy)",
                display: "grid",
                placeItems: "center",
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontSize: 28,
              }}
            >
              CAMBRIDGE
            </div>
            <div className="card__body">
              <div className="card__badge-row">
                <span className="lvl lvl--c1">C1</span>
                <span className="lvl lvl--c2">C2</span>
                <span className="badge badge--burgundy">Cambridge</span>
              </div>
              <h3 className="card__title">Global Leaders</h3>
              <p className="card__desc">Preparación CAE, CPE e IELTS. Para profesionales que necesitan moverse en el mundo.</p>
              <div className="card__meta">
                <span>22 semanas</span><span className="card__meta-dot" />
                <span>+ simulacros</span>
              </div>
            </div>
          </article>
        </div>

        <div className="programs__cta-row">
          <a href="#" className="btn btn--secondary">Programa empresarial para tu equipo →</a>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="mv" id="mision">
      <div className="container">
        <div className="mv__intro">
          <div>
            <div className="section-eyebrow">Por qué existimos</div>
            <h2 className="section-title">
              Formamos a quienes
              <br />
              conectan el Valle con el mundo.
            </h2>
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--ed-ink-2)", maxWidth: 520 }}>
            No enseñamos inglés para aprobar un examen. Lo enseñamos porque cada estudiante que sale de Educate se vuelve un puente — entre su familia, su región y un mundo que necesita más voces como la suya.
          </p>
        </div>

        <div className="mv__grid">
          <article className="mv__card mv__card--mision">
            <div
              className="mv__decor"
              style={{ top: 24, right: 24, display: "grid", gridTemplateColumns: "repeat(2, 24px)", gap: 4, opacity: 0.35 }}
            >
              <div style={{ background: "var(--ed-orange)", width: 24, height: 24, borderRadius: 6 }} />
              <div style={{ background: "var(--ed-yellow)", width: 24, height: 24, borderRadius: 6 }} />
              <div style={{ background: "var(--ed-red)", width: 24, height: 24, borderRadius: 6 }} />
              <div style={{ background: "var(--ed-burgundy)", width: 24, height: 24, borderRadius: 6 }} />
            </div>
            <div className="mv__card-label">Misión</div>
            <h3 className="mv__card-title">
              Construimos
              <br />
              líderes globales.
            </h3>
            <p className="mv__card-body">
              Formamos niños, jóvenes y adultos como líderes globales, desarrollando habilidades comunicativas en múltiples lenguas y competencias interculturales, mediante metodologías y tecnología educativa innovadora. Nos comprometemos con la calidad, el crecimiento continuo y la formación integral de nuestros estudiantes, generando un impacto positivo en la sociedad colombiana y contribuyendo a un mundo más conectado y sostenible.
            </p>
          </article>

          <article className="mv__card mv__card--vision">
            <div
              className="mv__decor"
              style={{ top: 24, right: 24, display: "grid", gridTemplateColumns: "repeat(2, 24px)", gap: 4, opacity: 0.45 }}
            >
              <div style={{ background: "var(--ed-orange)", width: 24, height: 24, borderRadius: 6 }} />
              <div style={{ background: "var(--ed-yellow)", width: 24, height: 24, borderRadius: 6 }} />
              <div style={{ background: "var(--ed-green)", width: 24, height: 24, borderRadius: 6 }} />
              <div style={{ background: "rgba(255,255,255,.15)", width: 24, height: 24, borderRadius: 6 }} />
            </div>
            <div className="mv__card-label">Visión 2030</div>
            <h3 className="mv__card-title">
              Referentes del Valle
              <br />
              para el mundo.
            </h3>
            <p className="mv__card-body">
              Para 2030, Educate Learning Center® será reconocido en el Valle del Cauca como un referente en educación multilingüe de alta calidad, con una infraestructura moderna y ambientes de aprendizaje innovadores que integren modalidades presenciales, virtuales e híbridas. Nos destacaremos por formar estudiantes con liderazgo, competencias interculturales y pensamiento global, contribuyendo de manera sostenible al desarrollo social, educativo y cultural de la región.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Methodology() {
  return (
    <section className="pillars" id="metodologia">
      <div className="container">
        <div className="section-eyebrow">Metodología Integral Learning</div>
        <h2 className="section-title">
          100% conversacional.
          <br />
          0% relleno.
        </h2>
        <p className="section-lede">
          Una metodología diseñada por psicólogos, pedagogos y licenciados en lenguas extranjeras. Cuatro principios que defendemos en cada clase.
        </p>

        <div className="pillars__grid">
          <article className="pillar">
            <div className="pillar__icon" style={{ background: "var(--ed-navy)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
            </div>
            <h3 className="pillar__title">Hablar primero.</h3>
            <p className="pillar__desc">Cada estudiante habla en cada clase. Sin excepciones. Grupos pequeños hacen posible lo que los libros prometen.</p>
          </article>

          <article className="pillar">
            <div className="pillar__icon" style={{ background: "var(--ed-orange)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </div>
            <h3 className="pillar__title">Inmersión cultural.</h3>
            <p className="pillar__desc">Aprendes el idioma con la cultura que lo viste. Películas, podcasts, comida, música — no solo gramática.</p>
          </article>

          <article className="pillar">
            <div className="pillar__icon" style={{ background: "var(--ed-green)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
            </div>
            <h3 className="pillar__title">Progreso medible.</h3>
            <p className="pillar__desc">Evaluación trimestral con profe + estudiante + familia. La misma rúbrica se abre cada vez. Nada se infla.</p>
          </article>

          <article className="pillar">
            <div className="pillar__icon" style={{ background: "var(--ed-burgundy)" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
            </div>
            <h3 className="pillar__title">Tecnología que sirve.</h3>
            <p className="pillar__desc">Plataforma propia con seguimiento personalizado. Tecnología que potencia al profe, nunca lo reemplaza.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Differentiators() {
  const items: { bg?: string; ink?: string; title: string; desc: string }[] = [
    { title: "Grupos pequeños siempre", desc: "Máximo 10 estudiantes por clase. Todos hablan, todos los días." },
    { bg: "var(--ed-orange)", title: "Seguimiento personalizado", desc: "Un plan ajustado a tu nivel, ritmo y meta — revisado cada trimestre." },
    { bg: "var(--ed-navy)", title: "Profes certificados", desc: "Licenciados con TKT, CELTA o experiencia internacional. Hablantes nativos en C1+." },
    { bg: "var(--ed-burgundy)", title: "Certificación oficial", desc: "Tu nivel CEFR queda certificado al terminar cada programa. Sirve para universidad y trabajo." },
    { bg: "var(--ed-yellow-deep)", ink: "var(--ed-ink)", title: "Horarios flexibles", desc: "Mañanas, tardes, noches y sábados. Cambia tu horario sin perder tu cohorte." },
    { bg: "var(--ed-red)", title: "Garantía de nivel", desc: "Si no subes de nivel en un año, tu siguiente módulo lo pagamos nosotros." },
  ];

  return (
    <section className="diff" id="diferencia">
      <div className="container">
        <div className="diff__layout">
          <div>
            <div className="section-eyebrow">¿Qué nos diferencia?</div>
            <h2 className="section-title">
              Seis razones
              <br />
              para elegirnos.
            </h2>
            <p className="section-lede">
              Lo que separa una academia más de una que de verdad cambia la forma en que tu hijo, tú o tu equipo se relacionan con el inglés.
            </p>
            <div style={{ marginTop: 32 }}>
              <a href="#contacto" className="btn btn--primary btn--lg">Quiero conocerlos →</a>
            </div>
          </div>

          <div className="diff__list">
            {items.map((item, i) => (
              <div key={i} className="diff__item">
                <div
                  className="diff__check"
                  style={{ background: item.bg, color: item.ink }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div>
                  <div className="diff__item-title">{item.title}</div>
                  <div className="diff__item-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Modalities() {
  return (
    <section className="modes">
      <div className="container">
        <div className="section-eyebrow">Modalidades</div>
        <h2 className="section-title">
          Donde tú puedas,
          <br />
          cuando tú puedas.
        </h2>
        <p className="section-lede">Tres formas de aprender en Educate. La misma metodología, el mismo plan de estudios, el mismo equipo de profes.</p>

        <div className="modes__grid">
          <article className="mode mode--presencial">
            <svg className="mode__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21V7l8-4v18" /><path d="M19 21V11l-6-4" /></svg>
            <div className="mode__tag">SEDES EN CALI</div>
            <h3 className="mode__title">Presencial.</h3>
            <p className="mode__desc">Aulas modernas, materiales incluidos, conexión cara a cara con profes y compañeros. Ideal para niños y para quien aprende mejor en comunidad.</p>
          </article>

          <article className="mode mode--virtual">
            <svg className="mode__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--ed-green-deep)" }}><rect width="20" height="14" x="2" y="3" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
            <div className="mode__tag">EN VIVO · GRUPOS PEQUEÑOS</div>
            <h3 className="mode__title">Virtual.</h3>
            <p className="mode__desc">Clases en vivo con grupos de máximo 10. Plataforma propia con grabaciones, ejercicios y seguimiento. Para quien vive lejos o tiene una agenda apretada.</p>
          </article>

          <article className="mode mode--hibrida">
            <svg className="mode__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: "#8A6B0C" }}><path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
            <div className="mode__tag">LO MEJOR DE LOS DOS</div>
            <h3 className="mode__title">Híbrida.</h3>
            <p className="mode__desc">Dos clases presenciales y una virtual cada semana. Mantén la conexión humana sin sacrificar la flexibilidad.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-eyebrow">Familias Educate</div>
        <h2 className="section-title">Lo que dicen quienes ya están aquí.</h2>

        <div className="testimonials__grid">
          <div
            className="tcard"
            style={{ background: "var(--ed-navy)", color: "#fff", border: 0, justifyContent: "space-between" }}
          >
            <div className="tcard__stars" style={{ color: "var(--ed-yellow)" }}>★★★★★</div>
            <div className="tcard__quote" style={{ color: "#fff", fontSize: 28 }}>
              &ldquo;Lucía pasó de respuestas de una palabra a contarnos su día en inglés en la cena. En cuatro meses. No esperábamos eso.&rdquo;
            </div>
            <div className="tcard__who">
              <div className="tcard__avatar" style={{ background: "var(--ed-yellow)", color: "var(--ed-navy-deep)" }}>M</div>
              <div>
                <div className="tcard__name" style={{ color: "#fff" }}>Mariana C.</div>
                <div className="tcard__role" style={{ color: "rgba(255,255,255,.7)" }}>Mamá de Lucía · Cali · A2</div>
              </div>
            </div>
          </div>

          <div className="tcard">
            <div className="tcard__stars">★★★★★</div>
            <div className="tcard__quote">&ldquo;Llamaron cuando Marco faltó una semana. No para vendernos algo. Para ver si estaba bien.&rdquo;</div>
            <div className="tcard__who">
              <div className="tcard__avatar">D</div>
              <div>
                <div className="tcard__name">Diego R.</div>
                <div className="tcard__role">Papá de Marco · Yumbo · B1</div>
              </div>
            </div>
          </div>

          <div className="tcard">
            <div className="tcard__stars">★★★★★</div>
            <div className="tcard__quote">&ldquo;Pasé el CAE al primer intento. Lo que más me sirvió no fue el examen — fue aprender a defender una idea en otro idioma.&rdquo;</div>
            <div className="tcard__who">
              <div className="tcard__avatar" style={{ background: "var(--ed-burgundy)" }}>V</div>
              <div>
                <div className="tcard__name">Valentina O.</div>
                <div className="tcard__role">Adulta · Palmira · C1</div>
              </div>
            </div>
          </div>

          <div className="tcard">
            <div className="tcard__stars">★★★★★</div>
            <div className="tcard__quote">&ldquo;Mi hijo de 7 años pide ir a clase. Eso es todo lo que necesito decir.&rdquo;</div>
            <div className="tcard__who">
              <div className="tcard__avatar" style={{ background: "var(--ed-green)" }}>A</div>
              <div>
                <div className="tcard__name">Andrea L.</div>
                <div className="tcard__role">Mamá de Tomás · Cali · A1</div>
              </div>
            </div>
          </div>

          <div className="tcard">
            <div className="tcard__stars">★★★★★</div>
            <div className="tcard__quote">&ldquo;En seis meses dejé de necesitar subtítulos. La diferencia con otras academias se siente desde la primera clase.&rdquo;</div>
            <div className="tcard__who">
              <div className="tcard__avatar" style={{ background: "var(--ed-red)" }}>J</div>
              <div>
                <div className="tcard__name">Juan Camilo P.</div>
                <div className="tcard__role">Adulto · Cali · B2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sedes() {
  const sedes = [
    { name: "Ciudad Jardín", addr: "Carrera 100 # 15–14", pin: "var(--ed-orange)" },
    { name: "Tequendama", addr: "Av. Roosevelt # 44–48", pin: "var(--ed-navy)" },
    { name: "Norte / Vipasa", addr: "Av. 3ª Norte # 44N–85", pin: "var(--ed-burgundy)" },
  ];
  return (
    <section className="sedes" id="sedes">
      <div className="container">
        <div className="section-eyebrow">Sedes</div>
        <h2 className="section-title">Encuentra una sede cerca de ti.</h2>
        <p className="section-lede">Tres sedes en el Valle del Cauca, todas a 10 minutos de tu rutina diaria. Visita la que te quede mejor o pide una clase virtual.</p>

        <div className="sedes__grid">
          {sedes.map((sede) => (
            <article key={sede.name} className="sede">
              <div className="sede__map">
                <span className="sede__pin" style={{ background: sede.pin }} />
              </div>
              <div>
                <div className="sede__name">{sede.name}</div>
                <div className="sede__addr">
                  {sede.addr}
                  <br />
                  Cali, Valle del Cauca
                </div>
              </div>
              <div className="sede__hours">
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--ed-green)" }} />
                Lun–vie 7am–8pm · Sáb 8am–4pm
              </div>
              <a href="#" className="btn btn--secondary btn--sm" style={{ alignSelf: "flex-start" }}>
                Ver en Google Maps →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const decor = [
    null, "var(--ed-orange)", null,
    "var(--ed-yellow)", "var(--ed-red)", null,
    "var(--ed-burgundy)", "var(--ed-green)", "var(--ed-navy)",
  ];
  return (
    <section className="cta" id="contacto">
      <div className="cta__decor">
        {decor.map((bg, i) => (
          <div key={i} style={bg ? { background: bg } : undefined} />
        ))}
      </div>

      <div className="cta__inner">
        <div>
          <div className="section-eyebrow">Casa abierta</div>
          <h2 className="cta__title">
            Ven a vivir
            <br />
            una clase real.
          </h2>
          <p className="cta__lede">
            Agenda 60 minutos. Mira un grupo en vivo, conoce a los profes, trae a tu hijo y prueba sin compromiso. El café lo ponemos nosotros.
          </p>

          <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              "Evaluación de nivel gratuita",
              "Plan personalizado para tu objetivo",
              "Sin matrícula, sin compromiso",
            ].map((text) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ed-orange-deep)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                <span style={{ fontSize: 16, color: "var(--ed-ink-2)" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <Image
              src="/brand/logo.png"
              alt=""
              width={224}
              height={56}
              style={{ height: 56, width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <p className="footer__about">
              Academia de inglés para niños, jóvenes y adultos. Fundada en Cali en 2014.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="YouTube">yt</a>
            </div>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Programas</div>
            <ul>
              <li><a href="#">Little Explorers · 6–10</a></li>
              <li><a href="#">Explore 4 Learning · 10–13</a></li>
              <li><a href="#">Confident Voices · jóvenes y adultos</a></li>
              <li><a href="#">Global Leaders · Cambridge</a></li>
              <li><a href="#">Programa empresarial</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Escuela</div>
            <ul>
              <li><a href="#">Metodología</a></li>
              <li><a href="#">Misión y visión</a></li>
              <li><a href="#">Profes</a></li>
              <li><a href="#">¿Qué nos diferencia?</a></li>
              <li><a href="#">Vacantes</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Sedes</div>
            <ul>
              <li><a href="#">Ciudad Jardín</a></li>
              <li><a href="#">Tequendama</a></li>
              <li><a href="#">Norte / Vipasa</a></li>
              <li><a href="#">Aula virtual</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Mantente al tanto</div>
            <p className="footer__about" style={{ marginTop: 14 }}>
              Un correo amigable al mes con clases nuevas, eventos gratuitos y consejos para familias.
            </p>
            <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
              <input
                className="input"
                placeholder="tu@correo.com"
                style={{ background: "rgba(255,255,255,.08)", borderColor: "rgba(255,255,255,.18)", color: "#fff" }}
              />
              <a href="#" className="btn btn--accent btn--sm" style={{ flexShrink: 0 }}>Suscribirme</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div>© 2026 Educate Learning Center®, S.A.S. · Cali, Valle del Cauca · NIT 901.XXX.XXX-X</div>
          <div className="footer__bottom-links">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>

      <div className="footer__ribbon">
        <div style={{ background: "var(--ed-orange)" }} />
        <div style={{ background: "var(--ed-navy-deep)" }} />
        <div style={{ background: "var(--ed-yellow)" }} />
        <div style={{ background: "var(--ed-green)" }} />
        <div style={{ background: "var(--ed-red)" }} />
        <div style={{ background: "var(--ed-burgundy)" }} />
      </div>
    </footer>
  );
}
