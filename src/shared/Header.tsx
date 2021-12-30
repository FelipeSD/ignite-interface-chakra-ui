import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {useRouter} from "next/router";

type HeaderProps = {
    hasBackButton?: boolean;
    onBackButtonClick?: () => void;
}

export function Header({ hasBackButton, onBackButtonClick }: HeaderProps) {
    const router = useRouter();

    return (
        <Box bg="gray.50" p={5}>
            <Flex
                as="header"
                mx="auto"
                position="relative"
                align="center"
                maxW="container.lg">
                    
                {hasBackButton && (
                    <Button
                        onClick={()=>router.back()}
                        size="xs"
                        position="absolute"
                        p="0"
                        variant='ghost'>
                        <ChevronLeftIcon boxSize="6" />
                    </Button>
                )}

                <Image mx="auto" src="/logo.png" alt="Logo" />
            </Flex>
        </Box>
    )
}
