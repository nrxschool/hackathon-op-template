import {
    ChakraProvider,
    Box,
    Flex,
    Input,
    Button,
    Heading,
    Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../public/images/logo.png";
import Image from "next/image";

const UserPage = () => {
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null); // Estado para armazenar a conta selecionada

    const handleSelectAccount = (accountType: string) => {
        setSelectedAccount(accountType);
    };
    return <Flex>usuário</Flex>;
};

export default UserPage;
