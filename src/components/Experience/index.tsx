import { FC } from 'react'
import { Badge, Box, Flex, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import TransitionSection, { SectionProps } from 'components/TransitionSection'
import { ExperienceData } from 'types'
import Title from 'components/Title'
import SubTitle from 'components/SubTitle'

export const ExpSection = styled(Box)`
  padding: 0.5em 1em;
  margin: 0 0.1em;
`

export const ExpTitle = styled(Title)`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
`

export const ExpName = styled(SubTitle)``

export const ExpSize = styled(Text)`
  line-height: 2.5em;
`

export const ExpPeriod = styled(Text)`
  color: grey;
`

export const ExpLocation = styled(Text)`
  color: grey;
`

export const ExpDescription = styled(Text)`
  margin: 1em 0;
`

export type ExpProps = ExperienceData &
  SectionProps & {
    isSequenced: boolean
  }

const Exp: FC<ExpProps> = ({
  duration,
  delay,
  title,
  name,
  size,
  period,
  location,
  description,
  technology,
  isSequenced,
}) => {
  return (
    <TransitionSection duration={duration} delay={delay}>
      <ExpTitle size="sm"> {title}</ExpTitle>
      <ExpSection borderLeft={isSequenced ? '2px' : 'false'} borderColor="grey">
        <Flex direction="row">
          <ExpName>{name}</ExpName>
          {size && <ExpSize>({size})</ExpSize>}
        </Flex>

        <ExpPeriod size="xs">{period}</ExpPeriod>
        <ExpLocation size="xs">{location}</ExpLocation>
        <ExpDescription>{description}</ExpDescription>

        <Stack direction="row">
          {technology &&
            technology.length > 0 &&
            technology.map((t, i) => (
              <Badge key={i} mr={1.5} colorScheme="purple">
                {t}
              </Badge>
            ))}
        </Stack>
      </ExpSection>
    </TransitionSection>
  )
}

export default Exp
