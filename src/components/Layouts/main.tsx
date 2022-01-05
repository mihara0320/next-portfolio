import React, { FC } from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Footer from 'components/Footer'
import NavBar from 'components/NavBar'

type Props = {
  children: React.ReactNode
}

const Main: FC<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Masaki's homepage" />
        <meta name="author" content="Masaki Ihara" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/card.png" />
        <meta property="og:site_name" content="Masaki Ihara's Homepage" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/card.png" />
        <title>Masaki Ihara - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
