import type { APIResponse } from "../type";
import type { News } from "./type";

const news: News[] = [
  {
    user: {
      name: "John Doe 1",
      avatar: "/mon.jpg",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat feugiat. Nullam nec metus vel ante feugiat feugiat.",
    date: "01 Mei 2022",
    day: "Monday",
  },
  {
    user: {
      name: "John Doe 2",
      avatar: "/mon.jpg",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat feugiat. Nullam nec metus vel ante feugiat feugiat.",
    date: "01 Mei 2022",
    day: "Monday",
  },
  {
    user: {
      name: "John Doe 3",
      avatar: "/mon.jpg",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat feugiat. Nullam nec metus vel ante feugiat feugiat.",
    date: "01 Mei 2022",
    day: "Monday",
  },
  {
    user: {
      name: "John Doe 4",
      avatar: "/mon.jpg",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante feugiat feugiat. Nullam nec metus vel ante feugiat feugiat.",
    date: "01 Mei 2022",
    day: "Monday",
  },
];

export async function getNews(): Promise<APIResponse<News[]>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: "success",
        data: news,
      });
    }, 500);
  });
}
