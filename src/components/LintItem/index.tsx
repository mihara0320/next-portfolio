import React, { FC } from 'react'
import {
  LinkBox,
  LinkOverlay,
  LinkOverlayProps,
  useColorModeValue,
} from '@chakra-ui/react'

export type LinkItemProps = LinkOverlayProps & {
  href: string
  path: string
  _target?: string
  children?: React.ReactNode
}
const LinkItem: FC<LinkItemProps> = ({ href, path, children, ...rest }) => {
  const active = path === href

  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <LinkBox
      bg={active ? 'gray.400' : undefined}
      color={active ? '#202023' : inactiveColor}
      borderRadius="lg"
      cursor="pointer"
      p="2"
      _hover={{
        bg: 'gray.400',
        color: 'white',
      }}
    >
      <LinkOverlay href={href} {...rest}>
        {children}
      </LinkOverlay>
    </LinkBox>
  )
}

export default LinkItem
