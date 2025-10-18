import { useGetMe } from "@/features/user/query";
import HomeUserCard from "./HomeUserCard";
import { Skeleton } from "../ui/skeleton";
import { useEffect } from "react";
import { useUserActions } from "@/store/user";

export default function HomeHero() {
  const { data: user, isLoading } = useGetMe();
  const { setUser } = useUserActions();

  useEffect(() => {
    if (user) {
      setUser(user.data);
    }
  }, [user]);

  return (
    <div className="flex flex-col gap-2 mt-2">
      <h2 className="text-base font-medium text-black">Hi, Good Morning!</h2>
      {isLoading ? (
        <Skeleton className="h-32 rounded-xl" />
      ) : !user ? (
        <Skeleton className="h-32 rounded-xl" />
      ) : (
        <HomeUserCard user={user.data} />
      )}
    </div>
  );
}
