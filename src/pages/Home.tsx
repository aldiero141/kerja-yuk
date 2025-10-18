import HomeHeader from "@/components/home-page/HomeHeader";
import HomeHero from "@/components/home-page/HomeHero";

export default function HomePage() {
  return (
    <div className="flex flex-col  gap-2 min-h-[calc(100vh-1.5rem)]">
      <HomeHeader />
      <HomeHero />
    </div>
  );
}
