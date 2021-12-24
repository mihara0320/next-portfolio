import React from 'react'
import Head from 'next/head'
// import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
// import VoxelDogLoader from '../voxel-dog-loader'
// import Footer from 'components/Footer'
import NavBar from 'components/NavBar'

// const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
//   ssr: false,
//   loading: () => <VoxelDogLoader />,
// })

type Props = {
  children: React.ReactNode
}

const Main = (props: Props) => {
  const { children } = props
  const router = useRouter()
  console.log(router.asPath)
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Takuya's homepage" />
        <meta name="author" content="Takuya Matsuyama" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Takuya Matsuyama's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Masaki Ihara - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {/*<LazyVoxelDog />*/}

        {children}

        {/*<Footer />*/}
      </Container>
    </Box>
  )
}

export default Main
