import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Scrollbar } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-fade"

import styles from "./styles.module.scss";
import { Box, Image } from "@chakra-ui/react";
import {CarouselItem} from "./CarouselItem";

export function Carousel() {
    const continents = [
        {
            name: "África",
            description: "O continente da diversidade cultural",
            image: "/assets/images/continents/africa.jpg"
        },
        {
            name: "Europa",
            description: "O continente mais antigo",
            image: "/assets/images/continents/europe.jpg"
        },
        {
            name: "América do Sul",
            description: "O continente com maior biodiversidade",
            image: "/assets/images/continents/southamerica.jpg"
        },
        {
            name: "América do Norte",
            description: "O continente da diversão",
            image: "/assets/images/continents/northamerica.jpg"
        },
        {
            name: "Oceania",
            description: "O continente isolado",
            image: "/assets/images/continents/oceania.jpg"
        },
        {
            name: "Ásia",
            description: "O continente mais populoso",
            image: "/assets/images/continents/asia.jpg"
        },
    ];

    return (
        <Box
            mx="auto"
            mb={["","4"]}
            maxW="container.lg"
            className={styles.carousel}
        >
            <Swiper
                modules={[Navigation, Pagination, EffectFade, Scrollbar]}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                effect="fade"
            >
                {continents.map(continent =>
                    <SwiperSlide key={continent.name}>
                        <CarouselItem
                            continent={continent.name}
                            description={continent.description}
                            image={continent.image}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </Box>
    )
}
