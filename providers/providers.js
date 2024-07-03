"use client";

import WagmiConfig from "@/web3/WagmiConfig";
import { useState, useEffect } from "react";

export function Providers({ children }) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true), []
    })

    return (
        <WagmiConfig>
            {mounted && children}
        </WagmiConfig>
    )
}