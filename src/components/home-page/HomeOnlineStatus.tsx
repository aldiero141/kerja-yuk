import { useGetOnlineUser } from "@/features/user/query";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export default function HomeOnlineStatus() {
  const { data: onlineUser, isLoading } = useGetOnlineUser();
  return (
    <div className="flex flex-col gap-2 mt-2">
      <h2 className="text-base font-medium text-black">Online</h2>
      {isLoading
        ? (
            <Skeleton className="h-26 rounded-xl" />
          )
        : onlineUser?.data
          ? (
              <div className="flex items-center justify-center border border-gray-200 rounded-xl shadow px-4 py-4">
                <div className="flex -space-x-1">
                  {onlineUser?.data.slice(0, 8).map((user, index) => (
                    <div
                      key={`online-user-${index}`}
                      className="flex flex-col items-center"
                    >
                      <img
                        key={index}
                        className="rounded-full ring-2 ring-background"
                        src={user.avatar}
                        width={40}
                        height={40}
                        alt={user.name}
                      />
                      <p className="text-xs font-semibold">{user.name}</p>
                      <p className="text-xs font-thin">{user.location}</p>
                    </div>
                  ))}
                  {onlineUser?.data.length > 8 && (
                    <Button
                      variant="ghost"
                      className="flex size-10 items-center justify-center rounded-full bg-secondary text-xs bg-gradient-to-r from-primary to-[#C11965] text-white
                    ring-2 ring-background hover:bg-secondary hover:text-foreground"
                      size="icon"
                    >
                      {onlineUser?.data.length - 8}
                      +
                    </Button>
                  )}
                </div>
              </div>
            )
          : (
              <p className="text-xs font-thin">No online user</p>
            )}
    </div>
  );
}
