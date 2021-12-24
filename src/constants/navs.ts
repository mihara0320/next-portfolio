import * as ROUTES from './routes'

export interface LinkItem {
  name: string
  path: string
}

export const NavItems: Array<LinkItem> = [
  { name: 'About', path: ROUTES.ABOUT_PATH },
  { name: 'Experience', path: ROUTES.EXPERIENCE_PATH },
  { name: 'Skills', path: ROUTES.SKILLS_PATH },
]
