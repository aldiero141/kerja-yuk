import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

const news = [
  {
    user: {
      name: "John Doe 1",
      avatar: "/mon.jpg",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat feugiat. Nullam nec metus vel ante feugiat feugiat.",
    date: "01 Mei 2022",
    day: "Monday",
  },
  {
    user: {
      name: "John Doe 2",
      avatar: "/mon.jpg",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat feugiat. Nullam nec metus vel ante feugiat feugiat.",
    date: "01 Mei 2022",
    day: "Monday",
  },
  {
    user: {
      name: "John Doe 3",
      avatar: "/mon.jpg",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat feugiat. Nullam nec metus vel ante feugiat feugiat.",
    date: "01 Mei 2022",
    day: "Monday",
  },
  {
    user: {
      name: "John Doe 4",
      avatar: "/mon.jpg",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat feugiat. Nullam nec metus vel ante feugiat feugiat.",
    date: "01 Mei 2022",
    day: "Monday",
  },
];

export default function HomeNews() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col gap-0 py-4">
      <h2 className="text-base font-medium text-black">PCS News</h2>
      <div className="flex flex-col gap-2">
        <Carousel opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="mx-8 py-2">
            {news.map((item, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col justify-between h-40 border border-gray-200 rounded-xl shadow px-4 py-4">
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-2">
                      <Avatar className="size-6">
                        <AvatarImage src={item.user.avatar} />
                        <AvatarFallback className="text-xs">SC</AvatarFallback>
                      </Avatar>
                      <p className="text-xs font-bold text-primary">
                        {item.user.name}
                      </p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p className="text-xs font-thin">{item.day}</p>
                      <p className="text-xs font-thin">{item.date}</p>
                    </div>
                  </div>
                  <p className="text-sm font-thin">{item.content}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center gap-2">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={`size-3 rounded-full transition-colors ${
                index === current - 1 ? "bg-primary" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
