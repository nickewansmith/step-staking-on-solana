import { Layout } from './components/Layout';
import 'antd/dist/reset.css';
import '@solana/wallet-adapter-ant-design/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html >
  );
}