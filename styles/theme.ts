import { extendTheme, ThemeConfig } from '@chakra-ui/react'; // Sempre importar do chakra-ui/react
import { Roboto } from 'next/font/google';

const config : ThemeConfig = {
    initialColorMode: "light",
    useSystemColorMode: false,
  }

const RobotoClass = Roboto({weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap'});

export const theme = extendTheme({
    config,
    colors: {
        primary: '#5F2EEA',
        gradient: 'linear-gradient(89.95deg, #DE34FA 1.47%, #FF9900 98.18%)',
        purple: {
            "500" : "#DE34FA",
        },
        gray: {
            "900" : "#272727",
            "800" : "#505050",
            "700" : "#767676",
            "600" : "#9B9B9B",
            "500" : "#BCBCBC",
            "400" : "#D6D6D6",
            "300" : "#EAEAEA",
            "200" : "#F6F6F6",
            "10" :  "#7A7D8E",
        }
    },
    fonts: {
        heading: RobotoClass.style.fontFamily,
        body:  RobotoClass.style.fontFamily
    },
    styles: {
        global: (props: any) => ({
            "body": {
              color: props.colorMode === 'light' ? 'black' : 'white',
              backgroundColor:  props.colorMode === 'light' ? 'white': '#0C0C0C',
            },
            "*::-webkit-scrollbar": {
                width: '4px',
            },
            "*::-webkit-scrollbar-track": {
                width: '6px',
                backgroundColor: props.colorMode === 'light' ? 'white': '#0C0C0C',
            },
            "*::-webkit-scrollbar-thumb": {
                background: 'rgba(79, 79, 79, 0.47)',
                borderRadius: '24px',
            },
        })
    }
    
});