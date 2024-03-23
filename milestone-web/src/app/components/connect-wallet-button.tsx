"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faXmark } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { formatAddress } from "../lib/utils";

export const ConnectWalletButton = () => {
    const { sdk, connected, connecting, account } = useSDK();

    const connect = async () => {
        try {
            await sdk?.connect();
        } catch (err) {
            console.warn(`No accounts found`, err);
        }
    };

    const disconnect = () => {
        if (sdk) {
            sdk.terminate();
        }
    };

    return (<>

        {connected ? (
            <span>
                <button className="outline-button">{formatAddress(account)}</button>
                <button className="danger-button" onClick={disconnect}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </span>
        ) : (
            <button className='outline-button' disabled={connecting} onClick={connect}>
                <FontAwesomeIcon icon={faWallet} /> Connect Wallet
            </button>
        )}
    </>
    );
};