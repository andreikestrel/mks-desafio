// mks-desafio/src/hooks/useProducts.ts

import { useQuery, UseQueryOptions, UseQueryResult, QueryKey } from '@tanstack/react-query';

interface Product {
  photo: string;
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

export interface ApiResponse {
  products: Product[];
  count: number;
}
const queryKey = ['products'] as QueryKey;
export const useFetchProducts = (): UseQueryResult<ApiResponse, Error> => {
  return useQuery({
    queryKey,
    queryFn: fetchProducts,
  });
};

const fetchProducts = async (): Promise<ApiResponse> => {
  const baseUrl = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products';
  const url = `${baseUrl}?page=1&rows=8&sortBy=price&orderBy=ASC`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  return response.json();
};
