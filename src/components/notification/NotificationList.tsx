import NotificationItem from "./NotificationItem";

const notification = [
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

export default function NotificationList() {
  return (
    <div className="flex flex-col">
      {notification.map((item, index) => (
        <NotificationItem key={index} notification={item} />
      ))}
    </div>
  );
}
