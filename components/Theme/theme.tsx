// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig , ChakraProvider} from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark', // 'dark' | 'light'
    useSystemColorMode: true,
  }

// 3. extend the theme
const theme = extendTheme({ config })



export default theme