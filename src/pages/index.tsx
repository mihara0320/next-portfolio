import { ReactElement } from 'react'
import Home from 'containers/Home'
import { NextPageWithLayout } from 'types'
import MainLayout from 'components/Layouts/main'

const HomePage: NextPageWithLayout = () => {
  return <Home />
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>
}

export default HomePage
