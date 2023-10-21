import { Button as ChackraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react"
import { ReactNode } from "react"

interface ButtonProps extends ChakraButtonProps {
    children?: ReactNode;
    variant?: 'primary' | 'secondary'
}

export function Button({ children, variant = "primary", ...rest}: ButtonProps) {
    return (
        <ChackraButton
            backgroundColor={variant === "primary" ? "#06BD00" : "#FFF"}
            fontSize="20px"
            padding="12px 24px"
            textAlign="center"
            color={variant === "primary" ? "#FFF" : "#06BD00"}
        {...rest}
        >
            {children}
        </ChackraButton>
    )
}