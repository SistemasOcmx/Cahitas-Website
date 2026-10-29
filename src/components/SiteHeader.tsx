import { useEffect, useRef, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { navigation } from '../data/site'

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={`brand${inverse ? ' brand--inverse' : ''}`} href="#inicio" aria-label="Cahita Constructora, ir al inicio">
      <svg className="brand__mark" viewBox="0 0 44 44" aria-hidden="true">
        <path d="M20 5 4 12v20l16 7V5Z" fill="none" stroke="#5a8a38" strokeWidth="4" strokeLinejoin="round" />
        <path d="m24 5 16 7v20l-16 7V5Z" fill="none" stroke="#1683a1" strokeWidth="4" strokeLinejoin="round" />
      </svg>
      <span className="brand__wordmark"><strong>CAHITA</strong><small>CONSTRUCTORA</small></span>
    </a>
  )
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (menuOpen && !dialog.open) dialog.showModal()
    if (!menuOpen && dialog.open) dialog.close()
  }, [menuOpen])

  useEffect(() => {
    return () => {
      if (dialogRef.current?.open) dialogRef.current.close()
    }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <div className="site-header__inner">
          <Brand />
          <span className="site-header__descriptor">Construcción · Diseño · Supervisión</span>
          <button className="menu-trigger" type="button" aria-haspopup="dialog" aria-expanded={menuOpen} aria-controls="navigation-dialog" onClick={() => setMenuOpen(true)}>
            <span>Menú</span><Menu size={19} strokeWidth={1.6} aria-hidden="true" />
          </button>
        </div>
      </header>

      <dialog className="navigation-dialog" id="navigation-dialog" ref={dialogRef} aria-labelledby="navigation-title" onClose={closeMenu} onCancel={closeMenu}>
        <div className="navigation-dialog__inner">
          <div className="navigation-dialog__top">
            <Brand inverse />
            <button className="menu-trigger menu-trigger--close" type="button" onClick={closeMenu} aria-label="Cerrar menú">
              <span>Cerrar</span><X size={21} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
          <p className="navigation-dialog__eyebrow" id="navigation-title">Explora Cahita</p>
          <nav className="navigation-list" aria-label="Navegación principal">
            {navigation.map((item) => (
              <a href={`#${item.id}`} key={item.id} onClick={closeMenu}>
                <span className="navigation-list__number">{item.number}</span>
                <span>{item.label}</span>
                <ArrowDownRight size={22} strokeWidth={1.4} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="navigation-dialog__bottom">
            <span>Culiacán, Sinaloa · Cobertura nacional</span>
            <a href="#contacto" onClick={closeMenu}>Hablemos de tu proyecto <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      </dialog>
    </>
  )
}
