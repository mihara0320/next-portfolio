import { ReactElement } from 'react'
import { NextPageWithLayout } from 'types'
import Skills from 'containers/Skills'
import HStackLayout from 'components/Layouts/hstack'

const SkillsPage: NextPageWithLayout = () => {
  return <Skills />
}

SkillsPage.getLayout = function getLayout(page: ReactElement) {
  return <HStackLayout>{page}</HStackLayout>
}

export default SkillsPage
