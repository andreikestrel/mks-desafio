import { useQuery, UseQueryOptions, UseQueryResult, QueryKey } from '@tanstack/react-query';

interface Product {
  photo: string;
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
}

interface ApiResponse {
  products: Product[];
  count: number;
}

export const useFetchProducts = (
  page: number,
  rows: number,
  sortBy: string,
  orderBy: string
): UseQueryResult<ApiResponse, Error> => {
  return useQuery({
    queryKey: ['products', page, rows, sortBy, orderBy],
    queryFn: () => fetchProducts(page, rows, sortBy, orderBy),
  });
};

const fetchProducts = async (
  page: number,
  rows: number,
  sortBy: string,
  orderBy: string
): Promise<ApiResponse> => {
  const baseUrl = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products';
  const url = `${baseUrl}?page=1&rows=8&sortBy=price&orderBy=ASC`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }

  return response.json();
};
