import type { APIResponse } from "../type";
import type { User, OnlineUser } from "./type";

const user: User = {
  name: "John Doe",
  job: "UI/UX Designer",
  joinDate: "2022-10-10",
  officeLocation: "Jakarta",
  image: "/mon.jpg",
};

export async function getMe(): Promise<APIResponse<User>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "success",
        data: user,
      });
    }, 500);
  });
}

const onlineUsers = [
  {
    name: "Budi",
    avatar: "/user/person-1.jpg",
    location: "BSD",
  },
  {
    name: "Andi",
    avatar: "/user/person-2.jpg",
    location: "BSD",
  },
  {
    name: "Cindy",
    avatar: "/user/person-3.jpg",
    location: "WFH",
  },
  {
    name: "Dedi",
    avatar: "/user/person-4.jpg",
    location: "WFH",
  },
  {
    name: "Eva",
    avatar: "/user/person-1.jpg",
    location: "Sahid",
  },
  {
    name: "Fajar",
    avatar: "/user/person-2.jpg",
    location: "BSD",
  },
  {
    name: "Gita",
    avatar: "/user/person-3.jpg",
    location: "Sahid",
  },
  {
    name: "Hendra",
    avatar: "/user/person-4.jpg",
    location: "WFH",
  },
  {
    name: "Ika",
    avatar: "/user/person-1.jpg",
    location: "Sahid",
  },
];

export async function getOnlineUser(): Promise<APIResponse<OnlineUser[]>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "success",
        data: onlineUsers,
      });
    }, 500);
  });
}
