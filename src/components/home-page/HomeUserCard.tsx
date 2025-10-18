import type { User } from "@/features/user/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent } from "../ui/card";

type Props = {
  user: User;
};

export default function HomeUserCard({ user }: Props) {
  return (
    <Card className="bg-gradient-to-r from-primary to-[#C11965] text-white py-4 h-32">
      <CardContent className="px-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-2">
            <Avatar className="size-12">
              <AvatarImage src={user?.image} />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-bold">{user?.name}</p>
              <p className="text-xs text-gray-100 italic">{user?.job}</p>
            </div>
          </div>
          <div className="flex flex-col m-0 p-0 mb-2 text-right">
            <p className="text-xs font-thin text-gray-100 italic m-0 p-0">
              Member since
            </p>
            <p className="text-md font-semibold text-gray-100 m-0 p-0">
              {user?.joinDate}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <p className="text-xs font-thin  italic m-0 p-0">Location</p>
            <p className="text-sm font-semibold  m-0 p-0">
              {user?.officeLocation}
            </p>
          </div>
          <div className="flex flex-col h-full justify-end self-end m-0 p-0 text-right">
            <p className="text-xs font-thin m-0 p-0 italic">ICO</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
