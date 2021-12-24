import { ReactElement } from 'react'
import { NextPageWithLayout } from 'types'
import MainLayout from 'components/Layouts/main'

const AboutPage: NextPageWithLayout = () => {
  return <h1>About Page</h1>
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default AboutPage
