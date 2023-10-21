import { FC } from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

const iconMaxWidth = '100px'
const Footer: FC = () => {
  return (
    <Box align="center" fontSize="sm">
      <Image
        maxWidth={iconMaxWidth}
        display="inline-block"
        borderRadius="full"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/seal-csm.png`}
        alt="csm image"
      />

      <Image
        maxWidth={iconMaxWidth}
        display="inline-block"
        borderRadius="full"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/aws_devops.png`}
        alt="aws devops image"
      />

      <Image
        maxWidth={iconMaxWidth}
        display="inline-block"
        borderRadius="full"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/aws_sysops.png`}
        alt="aws sysops image"
      />

      <Image
        maxWidth={iconMaxWidth}
        display="inline-block"
        borderRadius="full"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/aws_dev.png`}
        alt="aws dev image"
      />

      <Image
        maxWidth={iconMaxWidth}
        display="inline-block"
        borderRadius="full"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/aws_saa.png`}
        alt="aws saa image"
      />

      <Image
        maxWidth={iconMaxWidth}
        display="inline-block"
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/images/tf_a.png`}
        alt="tf associate image"
      />
      <Text opacity={0.4}>
        &copy; {new Date().getFullYear()} Masaki Ihara. All Rights Reserved.
      </Text>
    </Box>
  )
}

export default Footer
