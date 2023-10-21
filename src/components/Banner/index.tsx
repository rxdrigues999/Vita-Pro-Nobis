import { Flex, Text } from "@chakra-ui/react";



export function Banner() {
    return(
        <Flex
            w="100%"
            backgroundColor="red"
            h="80px"
            justifyContent="center"
            align="center"
        >
            <Text
                color="#FFF"
                fontWeight={600}
            >
                ATENÇÃO: Devido à alta demanda gerada pelas recentes reportagens na TV, nossos frascos estão quase esgotados! ÚLTIMAS UNIDADES!
            </Text>
        </Flex>
    )
}