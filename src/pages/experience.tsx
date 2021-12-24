import { ReactElement } from 'react'
import { NextPageWithLayout } from 'types'
import MainLayout from 'components/Layouts/main'

const ExperiencePage: NextPageWithLayout = () => {
  return <h1>ExperiencePage</h1>
}

ExperiencePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}
export default ExperiencePage
