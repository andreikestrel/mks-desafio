import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globalStyles'
import type { AppProps } from "next/app";
import Nav from '@/components/nav';
import { AppRoot } from '@/styles/globalStyles';
import Footer from '@/components/footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MKS Sistemas',
  description: 'Loja mks sistemas',
}

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppRoot/>  
      <Nav />
      <Component {...pageProps} />
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

