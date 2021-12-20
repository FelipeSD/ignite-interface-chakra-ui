import { HomeBanner } from "../components/HomeBanner";
import TravelItems from "../components/TravelItems";
import { Header } from "../shared/Header";

export default function Home() {

  return (
    <>
      <Header />
      <HomeBanner />
      <TravelItems />
    </>
  )
}