import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,

  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetNews } from "@/features/news/query";

export default function HomeNews() {
  const { data: news, isLoading } = useGetNews();
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
          {isLoading
            ? (
                <CarouselContent className="mx-8 py-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <CarouselItem key={index}>
                      <Skeleton className="h-40 rounded-xl" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              )
            : (
                <CarouselContent className="mx-8 py-2">
                  {news?.data.map((item, index) => (
                    <CarouselItem key={index}>
                      <div className="flex flex-col justify-between h-40 border border-gray-200 rounded-xl shadow px-4 py-4">
                        <div className="flex justify-between">
                          <div className="flex justify-center items-center gap-2">
                            <Avatar className="size-6">
                              <AvatarImage src={item.user.avatar} />
                              <AvatarFallback className="text-xs">
                                SC
                              </AvatarFallback>
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
              )}
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
