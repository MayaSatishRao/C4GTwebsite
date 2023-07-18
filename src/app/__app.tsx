import type { AppProps } from "next/app";
import Layout from './layout';
import { ThemeProvider } from "next-themes";

function App({ Component, pageProps }: AppProps) {
  return (
    
    <Layout>
      <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
    
  );
}

export default App;
