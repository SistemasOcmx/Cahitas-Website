import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ProgressNav } from './components/ProgressNav'
import { SiteHeader } from './components/SiteHeader'
import {
  AboutSection,
  CallToActionSection,
  CommitmentsSection,
  ContactSection,
  CoverageSection,
  HeroSection,
  ManifestoSection,
  ProcessSection,
  ServicesSection,
  SiteFooter,
} from './components/Sections'
import { navigation } from './data/site'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
        gsap.fromTo(element,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        )
      })
    })
    return () => context.revert()
  }, [])

  useEffect(() => {
    const sections = navigation
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-28% 0px -55% 0px', threshold: [0, 0.2, 0.4, 0.65] })

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <SiteHeader />
      <ProgressNav activeSection={activeSection} />
      <main id="contenido">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ManifestoSection />
        <ProcessSection />
        <CommitmentsSection />
        <CoverageSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
