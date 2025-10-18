import type { APIResponse } from "../type";
import type { Notification } from "./type";

const notification: Notification[] = [
  {
    type: "reimbursement",
    title: "Reimbursement",
    status: "paid",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "Today",
    isRead: false,
  },
  {
    type: "reimbursement",
    title: "Reimbursement",
    status: "rejected",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "Yesterday",
    isRead: true,
  },
  {
    type: "reimbursement",
    title: "Reimbursement",
    status: "processed",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2 days ago",
    isRead: true,
  },
  {
    type: "sickness",
    title: "Sickness",
    status: "approved",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2022-10-10",
    isRead: false,
  },
  {
    type: "sickness",
    title: "Sickness",
    status: "rejected",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2022-10-10",
    isRead: true,
  },
  {
    type: "sickness",
    title: "Sickness",
    status: "reviewed",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2022-10-10",
    isRead: true,
  },
  {
    type: "overtime",
    title: "Overtime",
    status: "approved",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2022-10-9",
    isRead: true,
  },
  {
    type: "overtime",
    title: "Overtime",
    status: "rejected",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2022-10-9",
    isRead: true,
  },
  {
    type: "overtime",
    title: "Overtime",
    status: "reviewed",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    time: "2022-10-9",
    isRead: true,
  },
];

export async function getNotification(): Promise<APIResponse<Notification[]>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "success",
        data: notification,
      });
    }, 500);
  });
}
