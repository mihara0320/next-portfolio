import { VFC } from 'react'
import { Container, Box, Image } from '@chakra-ui/react'
import TransitionSection from 'components/TransitionSection'
import Paragraph from 'components/Paragraph'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'

const About: VFC = () => {
  return (
    <Container mt="3em" mb="3em">
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Title as="h2" variant="page-title">
            MASAKI IHARA
          </Title>
          <SubTitle>SOFTWARE ENGINEER</SubTitle>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="grey.500"
            borderWidth={6}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/profile.png`}
            alt="Profile image"
          />
        </Box>
      </Box>

      <TransitionSection delay={0.2}>
        <Paragraph m="1em">
          北欧在住&歴7年目のフルスタックエンジニアです。エストニアの大学でサイバーセキュリティー学部を専攻し、在学中に現地企業にてソフトウェアエンジニアとして就職しました。
        </Paragraph>
      </TransitionSection>
      <TransitionSection delay={0.4}>
        <Paragraph m="1em">
          主に Agile/Scrum
          そして比較的モダンな技術を使用した開発経験が豊富です。バックエンド、フロントエンド、Windowsアプリ開発、インフラ構築など様々な方面から携わってきました。
        </Paragraph>
      </TransitionSection>
      <TransitionSection delay={0.6}>
        <Paragraph m="1em">
          直近では新事業で0からSDKを開発する少数先鋭のリードエンジニアを経験しました。最近ではマネジメントやDevOps関連の技術に注力しています。
        </Paragraph>
      </TransitionSection>
    </Container>
  )
}

export default About
