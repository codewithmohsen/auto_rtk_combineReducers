'use client';
import { store } from './simpleStore';
// import { store } from './smartStore';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </Provider>
    </QueryClientProvider>
  );
}