import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

interface CardProps {
    image: any;
    title: string;
    description: string;
}
export function Card({ image, title, description }: CardProps) {
    return (
        <Flex
            w="365px"
            flexDir="column"
            backgroundColor="#196801"
            borderRadius="20px"
            padding="20px"
            align="center"
            gap="12px"
        >
            <Image
                src={image}
                style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px"
                }}
                alt="Imagem de dores sendo curadas"
            />
            <Heading 
                color="#FFF" 
                fontSize="22px"
            >
                {title}
            </Heading>
            <Text 
                color="#FFF" 
                fontSize="18px"
                textAlign="center"
            >
                {description}
            </Text>
        </Flex>
    )
}