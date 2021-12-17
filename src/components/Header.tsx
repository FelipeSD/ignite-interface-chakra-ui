import { Box, Button, Flex, Icon, Image } from "@chakra-ui/react";
import { ChevronLeftIcon } from '@chakra-ui/icons';

export function Header() {
    return (
        <Box bg="gray.50" p={5}>
            <Flex
                as="header"
                mx="auto"
                position="relative"
                align="center" 
                maxW="container.lg">
                <Button size="xs" position="absolute"  p="0" variant='ghost'>
                    <ChevronLeftIcon boxSize="6" />
                </Button>
                <Image mx="auto" src="logo.png" alt="Logo" />
            </Flex>
        </Box>
    )
}