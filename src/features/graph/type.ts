export type GraphResponse = {
  code: number;
  msg: string;
  data: GraphData[];
};

type GraphData = {
  id: number;
  name: string;
};
