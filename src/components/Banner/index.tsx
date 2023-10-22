import { Flex, Text } from "@chakra-ui/react";



export function Banner() {
    
    return(
        <Flex
            w="100%"
            backgroundColor="red"
            h="80px"
            justifyContent="center"
            align="center"
            px="12px"
        >
            <Text
                color="#FFF"
                fontWeight={600}
                fontSize={[".8rem",".8rem","1rem"]}
            >
                ATENÇÃO: Devido à alta demanda gerada pelas recentes reportagens na TV, nossos frascos estão quase esgotados! ÚLTIMAS UNIDADES!
            </Text>
        </Flex>
    )
}