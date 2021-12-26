import { FC } from 'react'
import { Box } from '@chakra-ui/react'

const Footer: FC = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Masaki Ihara. All Rights Reserved.
    </Box>
  )
}

export default Footer
