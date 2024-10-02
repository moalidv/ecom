export type TCategory = {
  id: string;
  title: string;
  prefix: string;
  img: string;
};

export type TProduct = {
  id: string;
  title: string;
  price: number;
  cat_prefix: string;
  img: string;
  max: number;
};

export type TLoading = "idle" | "pending" | "success" | "error";
