import { NextPage } from 'next'
import { Container } from '@chakra-ui/react'
import { data as workHistory } from './work_history.json'
import { data as academicHistory } from './academic_history.json'
import Title from 'components/Title'
import Exp from 'components/Experience'

const Experience: NextPage = () => {
  return (
    <Container mt="3em" mb="3em">
      <Title m="1em 0" size="md" variant="section-title">
        PROFESSIONAL EXPERIENCE
      </Title>
      {workHistory.map((data, i) => {
        return (
          <Exp
            key={i}
            isSequenced={i !== workHistory.length - 1}
            delay={i * 0.1}
            {...data}
          />
        )
      })}

      <Title m="1em 0" size="md" variant="section-title">
        PROFESSIONAL EXPERIENCE
      </Title>
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
    </Container>
  )
}

export default Experience
