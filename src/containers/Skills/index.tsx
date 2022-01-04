import { VFC } from 'react'
import {
  Container,
  Stack,
  Badge,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Tag,
} from '@chakra-ui/react'
import {
  languages,
  frameworks,
  databases,
  infrastructure,
  workflow,
  others,
} from './data.json'
import Title from 'components/Title'
import TransitionSection from 'components/TransitionSection'

const getLevelColor = (level: number) => {
  if (level > 80) return 'green.400'
  if (level > 60) return 'teal.400'
  if (level > 40) return 'orange.400'
  if (level > 20) return 'red.400'
}
const Skills: VFC = () => {
  return (
    <Container mt="3em" mb="3em">
      <TransitionSection delay={0.1}>
        <Title m="1em 0" size="md" variant="section-title">
          LANGUAGES
        </Title>
        <Stack direction="row" w="400px" wrap={'wrap'}>
          {languages.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Flex
                m={1}
                direction="column"
                justifyContent="center"
                alignContent="center"
                alignItems="center"
              >
                <Tag>{data.name}</Tag>
                <CircularProgress
                  value={data.level}
                  size="75px"
                  thickness="15px"
                  color={getLevelColor(data.level)}
                  mt={1}
                >
                  <CircularProgressLabel>{data.level}</CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.2}>
        <Title m="1em 0" size="md" variant="section-title">
          FRAMEWORKS
        </Title>
        <Stack direction="row" w="400px" wrap={'wrap'}>
          {frameworks.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.3}>
        <Title m="1em 0" size="md" variant="section-title">
          DATABASES
        </Title>
        <Stack direction="row">
          {databases.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.4}>
        <Title m="1em 0" size="md" variant="section-title">
          INFRASTRUCTURE
        </Title>
        <Stack direction="row">
          {infrastructure.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.5}>
        <Title m="1em 0" size="md" variant="section-title">
          WORKFLOW
        </Title>
        <Stack direction="row">
          {workflow.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.6}>
        <Title m="1em 0" size="md" variant="section-title">
          OTHERS
        </Title>
        <Stack direction="row">
          {others.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>
    </Container>
  )
}

export default Skills
