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
import { useRouter } from "next/router";
import Link from "next/link";

const LoginPage = () => {
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
    const router = useRouter();

    const handleSelectAccount = (accountType: string) => {
        setSelectedAccount(accountType);
    };

    const handleSignIn = () => {
        if (selectedAccount === "organizador") {
            router.push("/organizer");
        } else if (selectedAccount === "usuario") {
            router.push("/user");
        }
    };
    return (
        <Flex
            minH="100vh"
            bgImage="/images/loginBackground.jpg"
            backgroundSize="cover"
        >
            <Box
                height="100vh"
                bg="white"
                p={8}
                w={{ base: "100%", md: "33.33%" }}
                my={{ base: 4, md: 0 }}
                flexDirection="column"
            >
                <Image src={logo} height={50} alt="Picture of the author" />
                <Box p={36}>
                    <Heading as="h1" size="md" textAlign="center" mb={8}>
                        Escolha o tipo de conta
                    </Heading>{" "}
                    <Flex gap={6} justify="center">
                        {" "}
                        <Box
                            border="3px solid"
                            borderColor={
                                selectedAccount === "organizador"
                                    ? "blue"
                                    : "#ccc"
                            }
                            borderRadius="10px"
                            display="inline-block"
                            mb={8}
                            textAlign="center"
                            p={4}
                            onClick={() => handleSelectAccount("organizador")}
                            cursor="pointer"
                        >
                            <Image
                                src="/images/organizer.svg"
                                width={140}
                                height={300}
                                alt="Picture of the author"
                            />
                            <Text fontWeight="bold" mt={4}>
                                Organizador
                            </Text>
                        </Box>
                        <Box
                            border="3px solid"
                            borderColor={
                                selectedAccount === "usuario" ? "blue" : "#ccc"
                            }
                            borderRadius="10px"
                            display="inline-block"
                            mb={8}
                            textAlign="center"
                            p={4}
                            onClick={() => handleSelectAccount("usuario")}
                            cursor="pointer"
                        >
                            <Image
                                src="/images/organizer.svg"
                                width={140}
                                height={300}
                                alt="Picture of the author"
                            />
                            <Text fontWeight="bold" mt={4}>
                                Usuário
                            </Text>
                        </Box>
                    </Flex>
                    <Box mb={4}>
                        <Input placeholder="Email" />
                    </Box>
                    <Box mb={6}>
                        <Input type="password" placeholder="Senha" />
                    </Box>
                    <Button
                        colorScheme="blue"
                        size="lg"
                        width="100%"
                        onClick={handleSignIn}
                    >
                        Entrar
                    </Button>
                </Box>
            </Box>
        </Flex>
    );
};

export default LoginPage;
