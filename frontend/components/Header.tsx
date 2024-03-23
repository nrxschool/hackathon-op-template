import { Box, Flex, Text, Button } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import logo from "../public/images/logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
    return (
        <Box
            bg="#ffff"
            color="black"
            height="136px"
            px={["4", "6", "8"]}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
        >
            <Flex alignItems="center">
                <Image src={logo} width={44} height={64} alt="Logo" />
                <Box ml="6">
                    <Text fontSize={["22px", "24px", "28px"]} fontWeight="bold">
                        Painel do Organizador
                    </Text>
                    <Text
                        fontSize={["18px", "20px", "22px"]}
                        textColor="gray.500"
                    >
                        Gerencie seus eventos com Blockchain
                    </Text>
                </Box>
            </Flex>
            <Box>
                <Button
                    bg="blue.500"
                    _hover={{ bg: "blue.600" }}
                    color="white"
                    fontWeight="semibold"
                    py="3"
                    px="8"
                    rounded="lg"
                    mr="4"
                >
                    Criar Novo Evento
                </Button>{" "}
                <Link href="/" passHref>
                    <Button
                        leftIcon={<FaSignOutAlt />}
                        colorScheme="red"
                        variant="solid"
                    >
                        Sair
                    </Button>{" "}
                </Link>
            </Box>
        </Box>
    );
}
