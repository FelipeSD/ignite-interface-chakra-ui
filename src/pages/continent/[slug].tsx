import {Header} from "../../shared/Header";
import {Box, Flex, Grid, Heading, HStack, Image, Spacer, Text, VStack} from "@chakra-ui/react";
import {ChevronLeftIcon} from "@chakra-ui/icons";
import Flag from "react-flagkit";

interface CityCardProps {
    city: string;
    country: string;
    flag?: string;
    image?: string;
}

interface InfoItemProps {
    number: number;
    text?: string;
}

const InfoItem = function ({number, text}: InfoItemProps) {
    return (
        <Flex
            textAlign={"center"}
            flexDirection={"column"}>
            <Text
                fontSize={"4xl"}
                fontWeight={"700"}
                lineHeight={"1"}
                color={"yellow.450"}>
                {number}
            </Text>
            <Text as={"strong"}>{text}</Text>
        </Flex>
    )
}

const CityCard = function ({city, country, image, flag}: CityCardProps) {
    return (
        <Box
            border={"1px"}
            borderColor={"yellow.450"}
            borderRadius={"5px"}>
            <Image
                src={`/assets/images/cities/${image}`}
                borderTopRadius={"5px"}
                objectFit={"cover"}
                h={"150px"}
                w={"100%"}
                alt={"london"}/>
            <Flex p={"4"}>
                <VStack
                    alignItems={"left"}
                    spacing={"2"}>
                    <Text
                        fontFamily={"Barlow"}
                        fontSize={"1.2rem"}
                        fontWeight={"600"}>
                        {city}
                    </Text>
                    <Text
                        fontFamily={"Barlow"}
                        fontSize={"1rem"}
                        color={"gray.500"}
                        fontWeight={"500"}>
                        {country}
                    </Text>
                </VStack>
                <Spacer/>
                <Flex
                    justifyContent={"center"}
                    alignItems={"center"}>
                    <Flag
                        style={{
                            borderRadius: "12rem",
                        }}
                        country={flag} />
                </Flex>
            </Flex>
        </Box>
    )
}

export default function Continent() {
    return (
        <>
            <Header hasBackButton={true}/>

            <Flex
                alignItems={["center", "end"]}
                justifyContent={"center"}
                bgImg={"linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('/assets/images/cover/england.jpg')"}
                bgSize={"cover"}
                bgPos={"center"}
                h={["200px", "400px"]}>
                <Box minW={{base: "auto", lg: "container.lg"}} py={"16"}>
                    <Heading color={"white"} as={"h1"}>
                        Europa
                    </Heading>
                </Box>
            </Flex>

            <Flex
                maxW={["", "container.lg"]}
                my={["4", "16"]}
                mx={"auto"}
                p={["4", "0"]}
                gap={"4"}
                flexDirection={["column", "row"]}>
                <Box
                    textAlign={"justify"}
                    fontWeight={"400"}
                    w={["100%", "50%"]}
                >
                    A Europa é, por convenção, um dos seis continentes do mundo.
                    Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela
                    divisória
                    de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
                </Box>
                <HStack
                    alignItems={"center"}
                    justifyContent={"center"}
                    spacing={"16"}
                    w={["100%", "50%"]}>
                    <InfoItem number={50} text={"países"}/>
                    <InfoItem number={60} text={"línguas"}/>
                    <InfoItem number={27} text={"cidades +100"}/>
                </HStack>
            </Flex>

            <Box
                as={"section"}
                my={"4"}
                mx={"auto"}
                p={["4", "0"]}
                maxW={"container.lg"}>
                <Heading as={"h1"} mb={"8"}>
                    Cidades +100
                </Heading>

                <Grid
                    templateColumns={[
                        "repeat(1, 1fr)",
                        "repeat(2, 1fr)",
                        "repeat(3, 1fr)",
                        "repeat(4, 1fr)"
                    ]}
                    gap={"6"}>
                    <CityCard
                        city={"Londres"}
                        flag={"GB"}
                        country={"Reino Unido"}
                        image={"europe/london.jpg"}/>
                    <CityCard
                        city={"Paris"}
                        country={"França"}
                        flag={"FR"}
                        image={"europe/paris.jpg"}/>
                    <CityCard
                        city={"Roma"}
                        flag={"IT"}
                        country={"Itália"}
                        image={"europe/rome.jpg"}/>
                    <CityCard
                        city={"Praga"}
                        flag={"CZ"}
                        country={"República Tcheca"}
                        image={"europe/praga.jpg"}/>
                    <CityCard
                        city={"Amsterdã"}
                        flag={"NL"}
                        country={"Holanda"}
                        image={"europe/amsterda.jpg"}/>
                </Grid>
            </Box>
        </>
    )
}
