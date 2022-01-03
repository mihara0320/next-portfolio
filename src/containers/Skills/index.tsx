import { VFC } from 'react'
import { Container, Heading, Stack, Badge } from '@chakra-ui/react'
import {
  languages,
  frameworks,
  databases,
  infrastructure,
  workflow,
  others,
} from './data.json'
import TransitionSection from 'components/TransitionSection'

const Skills: VFC = () => {
  return (
    <Container mt="3em" mb="3em">
      <TransitionSection delay={0.1}>
        <Heading m="1em 0" size="md" variant="section-title">
          LANGUAGES
        </Heading>
        <Stack direction="row">
          {languages.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.2}>
        <Heading m="1em 0" size="md" variant="section-title">
          FRAMEWORKS
        </Heading>
        <Stack direction="row">
          {frameworks.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.3}>
        <Heading m="1em 0" size="md" variant="section-title">
          DATABASES
        </Heading>
        <Stack direction="row">
          {databases.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.4}>
        <Heading m="1em 0" size="md" variant="section-title">
          INFRASTRUCTURE
        </Heading>
        <Stack direction="row">
          {infrastructure.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.5}>
        <Heading m="1em 0" size="md" variant="section-title">
          WORKFLOW
        </Heading>
        <Stack direction="row">
          {workflow.map((data, i) => (
            <TransitionSection key={i} delay={i * 0.2}>
              <Badge>{data}</Badge>
            </TransitionSection>
          ))}
        </Stack>
      </TransitionSection>

      <TransitionSection delay={0.6}>
        <Heading m="1em 0" size="md" variant="section-title">
          OTHERS
        </Heading>
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
