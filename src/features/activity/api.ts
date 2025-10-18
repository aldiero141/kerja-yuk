import type { APIResponse } from "../type";
import type { Activity } from "./type";

const activity: Activity = {
  checkinTime: "08.00",
  checkoutTime: "",
  workingHours: "8",
  totalTimeWorking: "03:00:00",
};

export async function getActivity(): Promise<APIResponse<Activity>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "success",
        data: activity,
      });
    }, 500);
  });
}
