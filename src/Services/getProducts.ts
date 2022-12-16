import { api } from "./api";
export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export const getProducts = async (
  token: string | null
): Promise<IProducts[]> => {
  const { data } = await api.get<IProducts[]>("/products", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  return data;
};
