"use client";

import { useWallet } from '@solana/wallet-adapter-react';
import React, { ReactNode, useEffect, useState } from 'react';
import { notify } from '../services/NotificationService';


interface AppProps {
  children: ReactNode;
}

export const App: React.FC<AppProps> = ({ children }) => {
  const { connected } = useWallet();
  const [hasBeenConnected, setHasBeenConnected] = useState<boolean>(false);

  useEffect(() => {
    if (connected) {
      setHasBeenConnected(true);
      notify.info('Connected', 'Connected');
    }
    if (!connected && hasBeenConnected) {
      notify.info('Disconnected', 'Disconnected');
    }
  }, [connected]);

  return (
    <div>
      {children}
    </div>
  );
};
