import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import favicon from './assets/Logomark (2).png'
import './index.css'
import App from './App.tsx'

function setHeadIcon(rel: string, href: string, type?: string) {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!link) {
    link = document.createElement('link')
    link.rel = rel
    document.head.appendChild(link)
  }
  link.href = href
  if (type) link.type = type
}

setHeadIcon('icon', favicon, 'image/png')
setHeadIcon('apple-touch-icon', favicon)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
