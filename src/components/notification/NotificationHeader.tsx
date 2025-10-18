import { IconChevronLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export default function NotificationHeader() {
  const navigate = useNavigate();
  return (
    <nav className="flex items-center gap-2 mt-2 px-6 pb-4 shadow-[0_1px_2px_0px] shadow-black/10">
      <Button
        variant="ghost"
        type="button"
        onClick={() => navigate(-1)}
        className="w-10"
      >
        <IconChevronLeft className="size-5" />
      </Button>
      <h1 className="text-2xl font-bold text-primary">Notification</h1>
    </nav>
  );
}
