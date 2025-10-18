import HomeActivity from "@/components/home-page/HomeActivity";
import HomeHero from "@/components/home-page/HomeHero";
import HomeNews from "@/components/home-page/HomeNews";

export default function HomePage() {
  return (
    <div className="flex flex-col  gap-2 h-full">
      <HomeHero />
      <HomeActivity />
      <HomeNews />
    </div>
  );
}
