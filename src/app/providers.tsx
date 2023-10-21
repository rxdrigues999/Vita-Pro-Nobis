'use client'

import { theme } from '../../styles/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {/* @ts-ignore */}
          {children}
      </ChakraProvider>
    </CacheProvider>
  )
}