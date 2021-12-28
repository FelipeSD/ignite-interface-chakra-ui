import {Box, Divider, Text} from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { HomeBanner } from "../components/HomeBanner";
import { TravelItems } from "../components/TravelItems";
import { Header } from "../shared/Header";

export default function Home() {

  return (
        <Box as="main">
            <Header />
            <HomeBanner />
            <TravelItems />

            <Divider mt="10"
                     width="16"
                     mx={"auto"}
                     borderBottom="2px"
            />

            <Box textAlign={"center"} p="8">
                <Text fontSize={"2xl"}>Vamos nessa?</Text>
                <Text fontSize={"2xl"}>Então escolha seu continente</Text>
            </Box>

            <Carousel />
        </Box>
  )
}
