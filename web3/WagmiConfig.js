import React from "react";
import Web3AuthConnectorInstance from "./_Web3AuthConnectorInstance";
import { mainnet } from "viem/chains";
import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Chain } from "wagmi/chains";

export const web3AuthInstance = Web3AuthConnectorInstance([mainnet]);

const config = createConfig({
    chains: [mainnet],
    connectors: [
        web3AuthInstance
    ],
    transports: {
        [mainnet.id]: http()
    }
})

const queryClient = new QueryClient()

const WagmiConfig = ({ children }) => {
    return <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    </WagmiProvider>
}

export default WagmiConfig;