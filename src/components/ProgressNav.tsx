import { navigation } from '../data/site'

export function ProgressNav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="progress-nav" aria-label="Progreso de la página">
      {navigation.map((item) => (
        <a className={activeSection === item.id ? 'progress-nav__item is-active' : 'progress-nav__item'} href={`#${item.id}`} key={item.id} aria-current={activeSection === item.id ? 'location' : undefined} aria-label={`${item.number} ${item.label}`}>
          <span className="progress-nav__dot" aria-hidden="true" />
          <span className="progress-nav__label"><b>{item.number}</b> {item.label}</span>
        </a>
      ))}
    </nav>
  )
}
