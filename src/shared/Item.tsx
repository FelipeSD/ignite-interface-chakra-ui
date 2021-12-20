import { Flex, Icon, Image, Text } from "@chakra-ui/react";

type ItemProps = {
    icon: string;
    text: string;
    iconSize?: string;
}

export default function Item({
    icon,
    text,
}: ItemProps) {
    return (
        <Flex 
            align="center"
            justify="center"
            flexDir="column"
        >
            <Image w="20" src={icon} />
            <Text mt="4">{text}</Text>
        </Flex>
    )
}