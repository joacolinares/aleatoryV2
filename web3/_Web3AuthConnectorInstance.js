import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES, UX_MODE, WEB3AUTH_NETWORK } from "@web3auth/base";
import { Chain } from "wagmi/chains";
import IconURL from "../public/aleatory-white.png"

const name = "Aleatory";
const iconUrl = IconURL;

export default function Web3AuthConnectorInstance(chains) {

    const chainConfig = {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: "0x" + chains[0].id.toString(16),
        rpcTarget: chains[0].rpcUrls.default.http[0], // Public RPC, pass own endpoint
        displayName: chains[0].name,
        tickerName: chains[0].nativeCurrency?.name,
        ticker: chains[0].nativeCurrency?.symbol,
        blockExplorerUrl: chains[0].blockExplorers?.default.url[0],
    };

    const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });

    const web3AuthInstance = new Web3AuthNoModal({
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        privateKeyProvider,
        web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET, // SAPPHIRE_MAINNET,
    });

    // Add openlogin adapter for customisations
    const openloginAdapterInstance = new OpenloginAdapter({
        adapterSettings: {
            uxMode: UX_MODE.REDIRECT,
            whiteLabel: {
                appName: name,
                logoLight: iconUrl,
                logoDark: iconUrl,
                defaultLanguage: "en",
                mode: "dark",
            },
        },
    });
    web3AuthInstance.configureAdapter(openloginAdapterInstance);

    return Web3AuthConnector({
        web3AuthInstance,
        loginParams: {
            loginProvider: "twitter",
        },
    });
}