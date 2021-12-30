import { Box, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface CarouselItemProps {
    continent: string;
    description: string;
    image: string;
}

export function CarouselItem({ continent, description, image }: CarouselItemProps) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            width="100%"
            height="400px"
            bgSize="cover"
            bgImg={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(${image});`}
        >
            <Link href={`/continent/${encodeURI(continent.toLowerCase())}`} passHref>
                <Box
                    as={"a"}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    h="100%"
                    w={["80%","90%"]}
                >
                    <Heading as="h1"
                        fontSize={["3xl", "4xl"]}
                        color="white"
                        mb={"3"}>
                        {continent}
                    </Heading>
                    <Text as="h2"
                        color={"white"}
                        fontSize={["sm", "lg"]}>
                        {description}
                    </Text>
                </Box>
            </Link>
        </Box>
    )
}
