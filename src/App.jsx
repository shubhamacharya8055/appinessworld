import Clients from "./components/Clients";
import HeroButtons from "./components/HeroButtons";
import HeroDescription from "./components/HeroDescription";
import SideNav from "./components/SideNav";
import Smile from "./components/Smile";
import TextCarousel from "./components/TextCarousel";
import Hero from "./ui/Hero";

export default function App() {

  return (
    <div className="relative min-h-screen w-full">
    <SideNav />
    <div className="home h-[1000px] min-w-full absolute z-[9999] top-0 left-0">
      <TextCarousel />
      <HeroButtons />
      <HeroDescription />
      <Clients/>
      <Smile />
    </div>
    </div>
  )
}
