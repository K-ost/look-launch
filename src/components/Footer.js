import React from 'react'
import footlogo from '../assets/images/footlogo.svg'

const footerLinks = [
  { id: 1, url: "https://google.ru/", title: "Договор-оферта" },
  { id: 2, url: "https://google.ru/", title: "Политика конфиденциальности" },
  { id: 3, url: "https://google.ru/", title: "Правила пользования" },
  { id: 4, url: "https://google.ru/", title: "Техническая поддержка" },
  { id: 5, url: "https://google.ru/", title: "Вакансии" }
]

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {footerLinks.map(link => (
          <li key={link.id}><a href={link.url} target="_blank" rel="noreferrer">{link.title}</a></li>
        ))}
      </ul>
      <div className="footer_copyright">
        <img src={footlogo} alt="" />
        &copy; 2015-2021 TargetHunter<br /> ™ООО “Технологии маркетинга”
      </div>
    </footer>
  )
}
export default Footer