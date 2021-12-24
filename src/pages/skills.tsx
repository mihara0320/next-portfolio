import { ReactElement } from 'react'
import { NextPageWithLayout } from 'types'
import MainLayout from 'components/Layouts/main'

const SkillsPage: NextPageWithLayout = () => {
  return <h1>Skills Page</h1>
}

SkillsPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default SkillsPage
