import { Box, Grid, GridItem, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function HomeBanner() {
  const isWide = useBreakpointValue({ base: false, md: true })

    return (
        <Box
            bgImage={`url('/assets/background.svg')`}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            py={10}
            px={5}
        >
            <Box maxW="container.lg" mx="auto">
                <Grid
                    templateColumns="repeat(5, 2fr)"
                    gap={5}
                >
                    <GridItem colSpan={{ base: 5, md: 3 }}>
                        <Heading
                            as="h1"
                            size="xl"
                            color="white"
                            fontWeight="medium"
                            lineHeight="1.5"
                        >
                            5 Continentes, <br />
                            infinitas possibilidades.
                        </Heading>

                        <Text fontSize="lg" color="gray.400" mt="3">
                            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                        </Text>
                    </GridItem>

                    {isWide && (
                        <GridItem colSpan={[0, 2]} position="relative">
                            <Image
                                alt={"airplane"}
                                w={370}
                                bottom="-16"
                                position="absolute"
                                src={"../assets/airplane.svg"} />
                        </GridItem>
                    )}
                </Grid>
            </Box>
        </Box>
    )
}
