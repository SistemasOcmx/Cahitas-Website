import { useState, type FormEvent } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Plus,
} from 'lucide-react'
import { commitments, milestones, processSteps, services, values } from '../data/site'
import { Brand } from './SiteHeader'

function SectionHeading({ number, eyebrow, title, description, titleId }: {
  number: string
  eyebrow: string
  title: string
  description?: string
  titleId?: string
}) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow"><span>{number}</span><i aria-hidden="true" />{eyebrow}</p>
      <div className="section-heading__body">
        <h2 id={titleId}>{title}</h2>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img className="hero__image" src="/img/webp/01_Hero.webp" alt="" fetchPriority="high" />
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__content page-width">
        <p className="hero__kicker reveal"><span className="hero__status" /> Desde Culiacán, Sinaloa · Desde 2021</p>
        <h1 id="hero-title" className="hero__title reveal">CONSTRUIMOS<br /><em>ESPACIOS</em><br />QUE PERDURAN<span>.</span></h1>
        <div className="hero__bottom reveal">
          <p>Construcción, diseño y supervisión<br />para proyectos que importan.</p>
          <a className="button button--light" href="#contacto">Iniciar un proyecto <ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <div className="hero__location"><span>CULIACÁN</span><i aria-hidden="true" /><span>TODO MÉXICO</span></div>
      </div>
      <a className="hero__scroll" href="#cahita"><span>Explorar</span><ArrowDown size={16} strokeWidth={1.5} aria-hidden="true" /></a>
      <span className="hero__image-note">Visualización ilustrativa</span>
      <span className="hero__coordinates" aria-hidden="true">24°48′N &nbsp; 107°23′W</span>
    </section>
  )
}

export function AboutSection() {
  return (
    <section className="about section-pad" id="cahita" aria-labelledby="about-title">
      <div className="page-width">
        <SectionHeading number="01" eyebrow="Cahita" title="Una buena obra comienza mucho antes de construir." titleId="about-title" />
        <div className="about__main">
          <div className="about__copy reveal">
            <p className="about__lead">Transformamos ideas en espacios funcionales, seguros y duraderos.</p>
            <p>Desde 2021 desarrollamos proyectos residenciales y comerciales de construcción, diseño, remodelación, supervisión y consultoría. Acompañamos a cada cliente para comprender sus necesidades y convertirlas en soluciones para su espacio.</p>
            <p>Nuestra visión integra planeación, funcionalidad, estética, calidad y seguimiento en las distintas etapas del proyecto.</p>
            <a className="text-link" href="#proceso">Así trabajamos <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <figure className="about__figure reveal">
            <img src="/img/webp/02_Quienes_Somos.webp" alt="Visualización ilustrativa de una persona revisando planos en una obra" loading="lazy" />
            <figcaption>IMAGEN ILUSTRATIVA</figcaption>
            <span className="about__figure-mark" aria-hidden="true">C.</span>
          </figure>
        </div>
        <div className="about__facts reveal">
          <div><span>01</span><strong>Desde 2021</strong><small>Inicio de operaciones</small></div>
          <div><span>02</span><strong>Culiacán</strong><small>Sinaloa, México</small></div>
          <div><span>03</span><strong>Todo México</strong><small>Cobertura nacional</small></div>
        </div>
        <div className="about__purpose reveal">
          <p className="eyebrow"><span>01.1</span><i aria-hidden="true" />Propósito</p>
          <div><h3>Nuestra misión</h3><p>Diseñar, construir y transformar espacios mediante soluciones funcionales, responsables y de calidad, acompañando a nuestros clientes durante las etapas de sus proyectos.</p></div>
          <div><h3>Nuestra visión</h3><p>Consolidarnos como una empresa reconocida por la calidad, la confianza y la integración de diseño, planeación, construcción y supervisión.</p></div>
        </div>
        <div className="timeline reveal" aria-label="Trayectoria de Cahita Constructora">
          <p className="eyebrow"><span>01.2</span><i aria-hidden="true" />Trayectoria</p>
          <div className="timeline__items">
            {milestones.map((item) => <div className="timeline__item" key={item.year}><strong>{item.year}</strong><span>{item.text}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]

  return (
    <section className="services section-pad" id="servicios" aria-labelledby="services-title">
      <div className="page-width">
        <SectionHeading number="02" eyebrow="Servicios" title="Una visión integral para cada espacio." titleId="services-title" description="Participamos en las etapas que tu proyecto necesita: desde una primera idea hasta la ejecución y el seguimiento." />
        <div className="services__layout">
          <div className="services__list" aria-label="Selecciona un servicio">
            {services.map((service, index) => (
              <div className={`service-row${activeIndex === index ? ' is-active' : ''}`} key={service.number}>
                <button className="service-row__button" type="button" aria-pressed={activeIndex === index} onMouseEnter={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)} onClick={() => setActiveIndex(index)}>
                  <span className="service-row__number">{service.number}</span>
                  <span className="service-row__title">{service.title}</span>
                  <Plus className="service-row__icon" size={19} strokeWidth={1.4} aria-hidden="true" />
                </button>
                <div className="service-row__mobile-detail" aria-hidden={activeIndex !== index}>
                  <p>{service.description}</p>
                  <p>{service.details}</p>
                  <img src={service.image} alt="" loading="lazy" />
                  <span>Imagen ilustrativa</span>
                </div>
              </div>
            ))}
          </div>
          <div className="service-preview" aria-live="polite" aria-atomic="true">
            <img key={activeService.image} src={activeService.image} alt="" loading="lazy" />
            <div className="service-preview__scrim" aria-hidden="true" />
            <div className="service-preview__top"><span>SERVICIO {activeService.number} / 06</span><span>IMAGEN ILUSTRATIVA</span></div>
            <div className="service-preview__content">
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
              <p className="service-preview__details">{activeService.details}</p>
              <div className="service-preview__tags">{activeService.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </div>
        </div>
        <p className="services__note">Las imágenes de esta sección son ilustrativas y no representan obras publicadas de Cahita.</p>
      </div>
    </section>
  )
}

export function ManifestoSection() {
  return (
    <section className="manifesto" aria-label="Manifiesto Cahita">
      <div className="manifesto__grid" aria-hidden="true" />
      <div className="manifesto__inner page-width reveal">
        <p className="eyebrow eyebrow--light"><span>03</span><i aria-hidden="true" />Nuestra manera de hacer</p>
        <h2>NO CONSTRUIMOS<br />SOLAMENTE ESTRUCTURAS<span>.</span></h2>
        <p className="manifesto__answer">Planeamos. Diseñamos. Construimos.<br /><strong>Espacios pensados para funcionar.</strong></p>
        <span className="manifesto__index" aria-hidden="true">C / 2021</span>
      </div>
    </section>
  )
}

export function ProcessSection() {
  return (
    <section className="process section-pad" id="proceso" aria-labelledby="process-title">
      <div className="page-width process__layout">
        <div className="process__intro reveal">
          <p className="eyebrow"><span>04</span><i aria-hidden="true" />Proceso</p>
          <h2 id="process-title">De la idea<br />al espacio.</h2>
          <p className="process__lead">Una metodología para dar claridad a cada decisión y seguimiento a cada etapa.</p>
          <span className="process__seal" aria-hidden="true">IDEA <i>→</i> RESULTADO</span>
        </div>
        <ol className="process__steps">
          {processSteps.map((step) => (
            <li className="process-step reveal" key={step.number}>
              <span className="process-step__number">{step.number}</span>
              <div><h3>{step.title}</h3><p>{step.description}</p></div>
              <span className="process-step__cross" aria-hidden="true">+</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function CommitmentsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCommitment = commitments[activeIndex]

  return (
    <section className="commitments section-pad" id="compromiso" aria-labelledby="commitments-title">
      <div className="page-width">
        <SectionHeading number="05" eyebrow="Compromiso" title="La calidad está en cada decisión." description="El cuidado del proyecto se construye con criterios claros y una manera responsable de trabajar." />
        <div className="commitments__layout">
          <div className="commitments__list" aria-label="Compromisos de Cahita">
            {commitments.map((item, index) => (
              <button className={index === activeIndex ? 'commitment-row is-active' : 'commitment-row'} key={item.title} type="button" aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} onFocus={() => setActiveIndex(index)}>
                <span>{String(index + 1).padStart(2, '0')}</span><strong>{item.title}</strong><ChevronDown size={17} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="commitments__detail" aria-live="polite">
            <span className="commitments__detail-number">{String(activeIndex + 1).padStart(2, '0')} / 06</span>
            <h3 id="commitments-title">{activeCommitment.title}<span>.</span></h3>
            <p>{activeCommitment.description}</p>
            <span className="commitments__rule" aria-hidden="true"><i /></span>
          </div>
        </div>
        <div className="values-strip"><span className="values-strip__label">Nuestros valores</span>{values.map((value) => <span key={value}>{value}</span>)}</div>
      </div>
    </section>
  )
}

const MEXICO_PATH = "M 18.2 15.0 L 23.2 30.8 L 22.2 35.7 L 31.1 53.5 L 33.0 70.3 L 42.9 79.2 L 54.8 97.0 L 54.8 104.9 L 50.8 107.9 L 52.8 111.9 L 39.0 110.9 L 44.9 121.7 L 55.8 127.7 L 56.8 130.6 L 64.7 127.7 L 66.6 136.6 L 76.5 143.5 L 79.5 157.3 L 75.5 168.2 L 104.2 193.9 L 108.2 204.8 L 113.1 203.8 L 117.1 197.8 L 108.2 182.0 L 105.2 180.1 L 103.2 183.0 L 97.3 176.1 L 98.3 168.2 L 92.3 150.4 L 91.4 136.6 L 88.4 131.6 L 87.4 134.6 L 84.4 132.6 L 80.5 116.8 L 73.6 108.9 L 72.6 100.0 L 62.7 89.1 L 61.7 81.2 L 50.8 66.4 L 50.8 41.7 L 53.8 30.8 L 62.7 39.7 L 67.6 38.7 L 75.5 43.7 L 80.5 72.3 L 92.3 98.0 L 101.2 109.9 L 108.2 111.9 L 107.2 120.8 L 117.1 127.7 L 118.0 132.6 L 122.0 132.6 L 126.9 139.5 L 130.9 140.5 L 129.9 143.5 L 124.0 144.5 L 122.0 153.4 L 142.8 165.2 L 144.7 171.2 L 141.8 175.1 L 158.6 189.0 L 175.4 214.7 L 175.4 222.6 L 181.3 240.4 L 175.4 247.3 L 178.3 250.2 L 171.4 254.2 L 179.3 271.0 L 187.2 275.9 L 194.2 275.9 L 194.2 278.9 L 209.0 293.7 L 228.7 296.7 L 247.5 312.5 L 261.4 315.5 L 266.3 320.4 L 277.2 322.4 L 282.1 327.3 L 314.7 337.2 L 342.4 329.3 L 337.5 328.3 L 341.4 324.4 L 346.4 326.3 L 344.4 328.3 L 356.3 333.3 L 349.3 328.3 L 352.3 327.3 L 361.2 338.2 L 382.9 355.0 L 384.9 352.0 L 382.9 346.1 L 393.8 330.3 L 415.6 327.3 L 398.8 310.5 L 403.7 308.6 L 408.6 300.6 L 439.3 298.7 L 455.1 282.9 L 454.1 288.8 L 460.0 292.7 L 466.0 276.9 L 462.0 275.9 L 466.0 271.0 L 462.0 267.0 L 480.8 240.4 L 475.9 232.4 L 472.9 234.4 L 458.1 233.4 L 444.2 239.4 L 423.5 241.3 L 418.5 262.1 L 414.6 266.1 L 412.6 274.0 L 401.7 280.9 L 403.7 284.8 L 397.8 292.7 L 391.8 289.8 L 393.8 285.8 L 382.0 285.8 L 378.0 288.8 L 370.1 288.8 L 361.2 294.7 L 357.2 292.7 L 349.3 294.7 L 344.4 286.8 L 329.6 280.9 L 322.7 272.0 L 318.7 261.1 L 309.8 251.2 L 302.9 230.5 L 303.9 228.5 L 306.8 231.5 L 307.8 236.4 L 302.9 212.7 L 305.8 204.8 L 308.8 168.2 L 310.8 163.3 L 313.8 166.2 L 319.7 152.4 L 314.7 158.3 L 312.8 154.4 L 291.0 144.5 L 287.1 121.7 L 277.2 107.9 L 270.3 88.1 L 263.3 80.2 L 244.6 79.2 L 238.6 89.1 L 230.7 94.1 L 211.0 81.2 L 206.0 73.3 L 208.0 68.4 L 202.1 57.5 L 184.3 37.7 L 160.5 36.7 L 154.6 42.7 L 113.1 41.7 L 65.7 20.9 L 55.8 14.0 Z"

function MexicoMap() {
  return (
    <svg className="mexico-map" viewBox="0 0 500 390" role="img" aria-labelledby="mexico-map-title mexico-map-desc">
      <title id="mexico-map-title">Cobertura de Cahita en México</title>
      <desc id="mexico-map-desc">Silueta de México basada en la referencia visual, con un indicador en Culiacán, Sinaloa.</desc>
      <defs>
        <pattern id="map-dots" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="1.2" cy="1.2" r=".8" fill="currentColor" /></pattern>
        <clipPath id="mexico-clip"><path d={MEXICO_PATH} /></clipPath>
      </defs>
      <path className="mexico-map__shape" d={MEXICO_PATH} />
      <rect className="mexico-map__texture" x="0" y="0" width="500" height="390" fill="url(#map-dots)" clipPath="url(#mexico-clip)" />
      <path className="mexico-map__border" d={MEXICO_PATH} />
      <circle className="mexico-map__origin-ring" cx="166.5" cy="163.3" r="10" />
      <circle className="mexico-map__origin" cx="166.5" cy="163.3" r="3.5" />
      <path className="mexico-map__leader" d="M 176.5 163.3 H 216 L 226 147.3" />
      <text className="mexico-map__label" x="236" y="147.3">CULIACÁN</text>
      <text className="mexico-map__label-sub" x="236" y="161.3">SINALOA · BASE DE OPERACIONES</text>
    </svg>
  )
}

export function CoverageSection() {
  return (
    <section className="coverage" id="mexico" aria-labelledby="coverage-title">
      <div className="coverage__grid" aria-hidden="true" />
      <div className="page-width coverage__inner">
        <div className="coverage__copy reveal">
          <p className="eyebrow eyebrow--light"><span>06</span><i aria-hidden="true" />Cobertura</p>
          <h2 id="coverage-title">TODO<br /><em>MÉXICO.</em></h2>
          <p>Con base en Culiacán, Sinaloa, coordinamos proyectos en todo el país.</p>
          <div className="coverage__base"><MapPin size={17} strokeWidth={1.5} aria-hidden="true" /><span>Base de operaciones</span><strong>Culiacán, Sinaloa</strong></div>
        </div>
        <div className="coverage__visual reveal"><MexicoMap /><span className="coverage__map-note">SILUETA DE REFERENCIA · SIN PROYECTOS REPRESENTADOS</span></div>
        <div className="coverage__services"><span>Construcción</span><span>Diseño arquitectónico</span><span>Remodelación</span><span>Supervisión de obra</span><span>Consultoría</span></div>
      </div>
    </section>
  )
}

export function CallToActionSection() {
  return (
    <section className="final-cta reveal" aria-labelledby="cta-title">
      <div className="page-width final-cta__inner">
        <p className="eyebrow"><span>07</span><i aria-hidden="true" />El siguiente paso</p>
        <h2 id="cta-title">¿TIENES UN<br /><em>PROYECTO</em><br />EN MENTE?</h2>
        <div className="final-cta__bottom"><p>Conversemos sobre tu idea<br />y las necesidades de tu espacio.</p><a className="button button--dark" href="#contacto">Hablemos <ArrowUpRight size={17} aria-hidden="true" /></a></div>
      </div>
      <span className="final-cta__cross" aria-hidden="true">+</span>
    </section>
  )
}

export function ContactSection() {
  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Nuevo proyecto — ${String(form.get('name'))}`)
    const body = encodeURIComponent([
      `Nombre: ${form.get('name')}`,
      `Correo: ${form.get('email')}`,
      `Teléfono: ${form.get('phone') || 'No proporcionado'}`,
      `Servicio: ${form.get('service') || 'Por definir'}`,
      '',
      `Mensaje: ${form.get('message')}`,
    ].join('\n'))
    window.location.href = `mailto:cahitaobras@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section className="contact section-pad" id="contacto" aria-labelledby="contact-title">
      <div className="page-width">
        <SectionHeading number="08" eyebrow="Contacto" title="Hablemos de tu próximo proyecto." titleId="contact-title" description="Cuéntanos qué tienes en mente. Cahita puede acompañarte desde la planeación y el diseño hasta la construcción, remodelación, supervisión o consultoría." />
        <div className="contact__layout">
          <div className="contact__details reveal">
            <p className="contact__aside">Estamos en Culiacán.<br /><strong>Trabajamos en todo México.</strong></p>
            <a className="contact-line" href="tel:+526679339039"><Phone size={18} strokeWidth={1.5} aria-hidden="true" /><span><small>Teléfono</small>667 933 9039</span><ArrowUpRight size={16} aria-hidden="true" /></a>
            <a className="contact-line" href="mailto:cahitaobras@gmail.com"><Mail size={18} strokeWidth={1.5} aria-hidden="true" /><span><small>Correo electrónico</small>cahitaobras@gmail.com</span><ArrowUpRight size={16} aria-hidden="true" /></a>
            <div className="contact-line contact-line--static"><MapPin size={18} strokeWidth={1.5} aria-hidden="true" /><span><small>Base de operaciones</small>Culiacán, Sinaloa, México</span></div>
            <div className="contact__socials" aria-label="Redes sociales">
              <span>Facebook</span><span>Instagram</span><span>LinkedIn</span>
              <small>Perfiles oficiales próximamente</small>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={submitContact}>
            <div className="contact-form__row">
              <label>Nombre<input name="name" type="text" autoComplete="name" placeholder="Tu nombre" required /></label>
              <label>Teléfono<input name="phone" type="tel" autoComplete="tel" placeholder="667 000 0000" /></label>
            </div>
            <label>Correo electrónico<input name="email" type="email" autoComplete="email" placeholder="nombre@correo.com" required /></label>
            <label>Tipo de servicio<select name="service" defaultValue=""><option value="">Selecciona una opción</option>{services.map((service) => <option key={service.number}>{service.title}</option>)}</select></label>
            <label>Cuéntanos de tu proyecto<textarea name="message" rows={4} placeholder="¿Qué espacio quieres crear o transformar?" required /></label>
            <button className="button button--dark contact-form__submit" type="submit">Preparar correo <ArrowUpRight size={17} aria-hidden="true" /></button>
            <p className="contact-form__note"><Check size={13} aria-hidden="true" /> Se abrirá tu aplicación de correo con el mensaje listo para enviar.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-width">
        <div className="site-footer__main">
          <div><Brand inverse /><p>Construyendo tus sueños<br />con excelencia.</p></div>
          <div className="site-footer__services"><span>Construcción</span><span>Diseño</span><span>Remodelación</span><span>Supervisión</span><span>Consultoría</span></div>
          <div className="site-footer__contact"><span>Culiacán, Sinaloa · Cobertura nacional</span><a href="tel:+526679339039">667 933 9039</a><a href="mailto:cahitaobras@gmail.com">cahitaobras@gmail.com</a></div>
        </div>
        <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Cahita Constructora. Todos los derechos reservados.</span><a href="#inicio">Volver arriba <ArrowUpRight size={13} aria-hidden="true" /></a><span>Diseño · Planeación · Construcción</span></div>
      </div>
    </footer>
  )
}
