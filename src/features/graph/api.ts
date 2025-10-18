import type { GraphResponse } from "./type";

const graphResponse = {
  code: 200,
  msg: "oke",
  data: [
    { id: 14, name: "building.create" },
    { id: 16, name: "building.delete" },
    { id: 15, name: "building.edit" },
    { id: 13, name: "building.index" },
    { id: 33, name: "dashboard.index" },
    { id: 18, name: "energy.create" },
    { id: 20, name: "energy.delete" },
    { id: 19, name: "energy.edit" },
    { id: 17, name: "energy.index" },
  ],
};

export async function getGraph(): Promise<GraphResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(graphResponse);
    }, 500);
  });
}
