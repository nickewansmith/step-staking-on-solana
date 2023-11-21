"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { DisconnectedWallet } from "./components/DisconnectedWallet";
import { FC } from "react";
import { StakeStep } from "./components/StakeStep";

const Home: FC = () => {
  const { connected } = useWallet();

  if (!connected) {
    return <DisconnectedWallet />;
  }

  return (
    <StakeStep />
  );
};

export default Home;
