import { HStack } from "@chakra-ui/react";
import Item from "../shared/Item";

export function TravelItems() {
    return (
        <HStack
            maxW="container.lg"
            mx="auto"
            mt="16"
            px="8"
            spacing="8"
            justify="space-between"
        >
            <Item
                icon={"/assets/icons/cocktail.svg"}
                text="vida noturna" />
            <Item
                icon={"/assets/icons/surf.svg"}
                text="praia" />
            <Item
                icon={"/assets/icons/building.svg"}
                text="moderno" />
            <Item
                icon={"/assets/icons/museum.svg"}
                text="clássico" />
            <Item
                icon={"/assets/icons/earth.svg"}
                text="e mais..." />
        </HStack>
    )
}
