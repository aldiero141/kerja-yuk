import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function HomeHero() {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <h2 className="text-base font-medium text-black">Hi, Good Morning!</h2>
      <Card className="bg-gradient-to-r from-primary to-[#C5105F] text-white py-4">
        <CardContent className="px-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-start gap-2">
              <Avatar className="size-12">
                <AvatarImage src="/avatar.svg" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-bold">John Doe</p>
                <p className="text-xs text-gray-100 italic">UI/UX Designer</p>
              </div>
            </div>
            <div className="flex flex-col m-0 p-0 mb-2 text-right">
              <p className="text-xs font-thin text-gray-100 italic m-0 p-0">
                Member since
              </p>
              <p className="text-md font-semibold text-gray-100 m-0 p-0">
                01 Juni 2021
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <p className="text-xs font-thin  italic m-0 p-0">Location</p>
              <p className="text-sm font-semibold  m-0 p-0">Kantor Sahid</p>
            </div>
            <div className="flex flex-col h-full self-end m-0 p-0 text-right">
              <p className="text-xs font-thin m-0 p-0 italic">ICO</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
