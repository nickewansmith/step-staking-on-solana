"use client";

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';
import * as anchor from '@project-serum/anchor';

const AnchorContext = createContext<anchor.Provider | null>(null);

export const useAnchorProvider = () => useContext(AnchorContext);

interface AnchorProviderProps {
  children: ReactNode;
}

export const AnchorProvider: React.FC<AnchorProviderProps> = ({ children }) => {
  const { connection } = useConnection();
  const anchorWallet = useAnchorWallet();
  const [provider, setProvider] = useState<anchor.Provider | null>(null);

  useEffect(() => {
    if (anchorWallet && anchorWallet.publicKey) {
      const newProvider = new anchor.AnchorProvider(
        connection,
        anchorWallet,
        anchor.AnchorProvider.defaultOptions()
      );
      setProvider(newProvider);
    }
  }, [anchorWallet]);

  return (
    <AnchorContext.Provider value={provider}>
      {children}
    </AnchorContext.Provider>
  );
};
