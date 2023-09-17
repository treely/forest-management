export type YieldTableRow = {
  yieldClass: number;
  age: number;
  stock: number;
};

type YieldTable = {
  meta: {
    title: string;
    author: string;
    copyright: string;
    source: string;
    sourceLink: string;
  };
  rows: YieldTableRow[];
};

export default YieldTable;
