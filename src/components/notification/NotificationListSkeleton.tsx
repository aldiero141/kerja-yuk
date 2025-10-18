import { Skeleton } from "../ui/skeleton";

export default function NotificationListSkeleton() {
  return (
    <div>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-row gap-2 justify-between px-6 py-4"
        >
          <Skeleton className="size-12 rounded-lg" />

          <div className="flex w-[70%] flex-col gap-2">
            <Skeleton className="w-full h-4 rounded-lg" />
            <Skeleton className="w-full h-12 rounded-lg" />
          </div>

          <Skeleton className="w-16 h-4 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
