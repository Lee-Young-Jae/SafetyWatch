import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Search from "./pages/Search";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Error from "./components/Error";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

// TODO: QueryErrorReset 부분은 추후에 수정해야함
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallback={({ error, resetErrorBoundary }) => (
              <Error error={error} resetErrorBoundary={resetErrorBoundary} />
            )}
          >
            <Layout>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/search" element={<Search />}></Route>
                <Route path="/*" element={<Main />}></Route>
              </Routes>
            </Layout>
            <ReactQueryDevtools initialIsOpen={true} />
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
}

export default App;
