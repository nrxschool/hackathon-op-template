import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import LoginPage from "./login";

const Home: NextPage = () => {
    return (
        // <div
        //   style={{
        //     display: 'flex',
        //     justifyContent: 'flex-end',
        //     padding: 12,
        //   }}
        // >
        //   <ConnectButton />
        // </div>
        <LoginPage />
    );
};

export default Home;
