import {extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: '#F5F8FA',
                color: '#47585B'
            }
        }
    }
})

export default theme