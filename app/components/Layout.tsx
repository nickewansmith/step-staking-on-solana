"use client";

import React, { useMemo } from 'react';
import { Layout as AntLayout, ConfigProvider, theme } from 'antd';
import StyledComponentsRegistry from '@/app/components/StyledComponentsRegistry';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-ant-design';
import dynamic from 'next/dynamic';
import { AnchorProvider } from '../providers/AnchorProvider';
import { App } from './App';
import { RPC_URL } from '../constants';

// avoid hydration issues
const BaseWalletMultiButton = dynamic(
  async () => (await import('@solana/wallet-adapter-ant-design')).BaseWalletMultiButton,
  { ssr: false }
);

const { Header, Content, Footer } = AntLayout;

export function Layout({ children }: React.PropsWithChildren) {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter()
    ],
    []
  );

  return (
    <StyledComponentsRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        {/* Ideally this would be configurable through env vars */}
        <ConnectionProvider endpoint={RPC_URL}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <AnchorProvider>
                <App>
                  <AntLayout style={{ height: '100vh' }}>
                    <Header
                      style={{
                        position: 'sticky',
                        top: 0,
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <BaseWalletMultiButton labels={{
                        'change-wallet': 'Change wallet',
                        connecting: 'Connecting ...',
                        'copy-address': 'Copy address',
                        disconnect: 'Disconnect',
                        'has-wallet': 'Connect',
                        'no-wallet': 'Connect',
                      }} />
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                      {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Created by Nicholas Smith ⬛ 🛠️</Footer>
                  </AntLayout>
                </App>
              </AnchorProvider>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ConfigProvider>
    </StyledComponentsRegistry>
  );
}