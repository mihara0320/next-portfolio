import { FC } from 'react'
import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import TransitionSection, { SectionProps } from 'components/TransitionSection'
import { ExperienceData } from 'types'

export const ExpSection = styled(Box)`
  padding: 0.5em 1em;
  margin: 0 0.1em;
`

export const ExpTitle = styled(Heading)`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
`

export const ExpName = styled(Text)``

export const ExpPeriod = styled(Text)`
  color: grey;
`

export const ExpLocation = styled(Text)`
  color: grey;
`

export const ExpDescription = styled(Text)``

export type ExpProps = ExperienceData &
  SectionProps & {
    isSequenced: boolean
  }

const Exp: FC<ExpProps> = ({
  duration,
  delay,
  title,
  name,
  period,
  location,
  description,
  isSequenced,
}) => {
  return (
    <TransitionSection duration={duration} delay={delay}>
      <ExpTitle size="sm"> {title}</ExpTitle>
      <ExpSection borderLeft={isSequenced ? '2px' : 'false'} borderColor="grey">
        <ExpName size="lg"> {name}</ExpName>
        <ExpPeriod size="xs">{period}</ExpPeriod>
        <ExpLocation size="xs">{location}</ExpLocation>
        <ExpDescription>{description}</ExpDescription>
      </ExpSection>
    </TransitionSection>
  )
}

export default Exp
