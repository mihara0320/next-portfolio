import { NextPage } from 'next'
import { Container, Heading } from '@chakra-ui/react'
import * as workHistory from './work_history.json'
import * as academicHistory from './academic_history.json'
import Exp from 'components/Experience'
import TransitionSection from 'components/TransitionSection'

const Experience: NextPage = () => {
  return (
    <Container mt="3em" mb="3em">
      <TransitionSection delay={0.1}>
        <Heading m="1em 0" size="md" variant="section-title">
          PROFESSIONAL EXPERIENCE
        </Heading>
        {workHistory.map((data, i) => {
          return (
            <Exp
              key={i}
              isSequenced={i !== workHistory.length - 1}
              duration={0.2}
              delay={i * 0.1}
              {...data}
            />
          )
        })}
      </TransitionSection>

      <TransitionSection delay={0.2}>
        <Heading m="1em 0" size="md" variant="section-title">
          EDUCATION
        </Heading>
        {academicHistory.map((data, i) => {
          return (
            <Exp
              key={i}
              isSequenced={i !== 0}
              duration={0.2}
              delay={i * 0.1}
              {...data}
            />
          )
        })}
      </TransitionSection>
    </Container>
  )
}

export default Experience
