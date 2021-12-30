import { Circle, Flex, Icon, Image, Text, useBreakpointValue } from "@chakra-ui/react";

type ItemProps = {
    icon: string;
    text: string;
    iconSize?: string;
}

export default function Item({
    icon,
    text,
}: ItemProps) {
    const isWide = useBreakpointValue({ base: false, md: true })

    if(isWide){
        return (
            <Flex 
                align="center"
                justify="center"
                flexDir="column"
            >
                <Image w="20" src={icon} alt={text} />
                <Text mt="4">{text}</Text>
            </Flex>
        )
    }else{
        return (
            <Flex
                align="center"
                my="2"
            >
                <Circle size="2" bg="yellow.450" />
                <Text ml="2">{text}</Text>
            </Flex>
        )
    }
}