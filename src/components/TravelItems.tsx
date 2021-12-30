import { Box, Flex, HStack, useBreakpointValue } from "@chakra-ui/react";
import Item from "../shared/Item";

export function TravelItems() {
    const isWide = useBreakpointValue({ base: false, md: true })

    const items = [
        {
            icon: "/assets/icons/cocktail.svg",
            text: "vida noturna",
        },
        {
            icon: "/assets/icons/surf.svg",
            text: "praia",
        },
        {
            icon: "/assets/icons/building.svg",
            text: "moderno",
        },
        {
            icon: "/assets/icons/museum.svg",
            text: "clássico",
        },
        {
            icon: "/assets/icons/earth.svg",
            text: "e mais...",
        },
    ]

    if (isWide) {
        return (
            <HStack
                maxW="container.lg"
                mx="auto"
                mt="16"
                px="8"
                spacing="8"
                justify="space-between"
            >
                {items.map((item, index) => (
                    <Item
                        key={index}
                        icon={item.icon}
                        text={item.text}
                    />
                ))}
            </HStack>
        )
    } else {
        return (
            <Flex
                maxW="container.lg"
                mx="auto"
                mt={["5", "16"]}
                px="8"
                spacing="8"
                justify="space-between"
                wrap="wrap"
            >
                {items.map((item, index) => (
                    <Box 
                        key={index}
                        w="40%"
                    >
                        <Item
                            icon={item.icon}
                            text={item.text}
                        />
                    </Box>
                ))}
            </Flex>
        )
    }
}
