import React, { useState } from "react";
import {
    Box,
    Button,
    Input,
    Textarea,
    Flex,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
    Text,
    Tbody,
    Table,
    Tr,
    Td,
    Th,
    Thead,
} from "@chakra-ui/react";

import Image from "next/image";
import exampleImage from "../public/images/hackathonExample.jpeg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import crypto from "crypto-js";
import { MdCheckCircle } from "react-icons/md";

interface ProductFormProps {
    titleValue: string;
    situationValue: string;
    beginDateValue: string;
    endDateValue: string;
    ratingStandartValue: [];
    gradeTypeValue: string;
    judgesValue: [];
    teamsValue: [];
    gradesValue: [
        { teamName: string; visuals: string; pitch: string; code: string }
    ];
    rulesValue: string;
    prizesValue: string;
    scheduleValue: string;
    termsAndConditionsValue: string;
    wholeObject: any;
    onSave: () => void;
}

const View: React.FC<ProductFormProps> = ({
    titleValue,
    situationValue,
    beginDateValue,
    endDateValue,
    ratingStandartValue,
    gradeTypeValue,
    judgesValue,
    teamsValue,
    gradesValue,
    rulesValue,
    prizesValue,
    scheduleValue,
    termsAndConditionsValue,
    wholeObject,
    onSave,
}) => {
    const [phase, setPhase] = useState("confirmData");
    const [isMetaconnected, setMetaConnected] = useState(false);
    const [loading, setLoading] = useState("hash");
    const [hashValue, setHashValue] = useState("");

    function createHashAndSendToBlockchain(obj: any) {
        // Converta o objeto em uma string JSON
        const jsonString = JSON.stringify(obj);

        // Gere o hash usando o algoritmo SHA256
        const hash = crypto.SHA256(jsonString);

        // Armazene o hash gerado no estado
        setHashValue(hash.toString(crypto.enc.Hex));

        // Agende o envio do hash para blockchain após 4 segundos
        setTimeout(() => {
            setLoading("blockchain");
            sendHashToBlockchain();
        }, 4000);
    }
    console.log("Hash", hashValue);
    // Variável para controlar se o hash já foi enviado
    let hashSent = false;

    // Função para enviar o hash para blockchain
    function sendHashToBlockchain() {
        if (!hashSent) {
            // Exemplo de envio do hash para outro lugar
            console.log("Hash enviado");
            // Aqui você pode enviar o hash para o local desejado, como uma API ou outro componente, etc.
            setTimeout(() => {
                setLoading("hash");
                setPhase("sended");
                hashSent = true; // Atualiza o status para indicar que o hash foi enviado
            }, 4000);
        }
    }

    // Exemplo de chamada da função combinada
    // Passe o objeto que você deseja usar para criar o hash

    return (
        <Box
            p="5"
            rounded="md"
            shadow="md"
            bg="white"
            w={["full", "80%", "40%"]}
            mx="auto"
            mt="10"
            mb="10"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <Text fontSize="2xl" fontWeight="semibold" mb="4" mt="2">
                {phase === "confirmData"
                    ? "Iniciar evento e enviar para blockchain"
                    : phase === "metaMaskLogin"
                    ? "Efetue login na MetaMask"
                    : "Quase la"}
            </Text>
            <Box borderBottom="1px" borderColor="gray.400" mb="6" pt="6"></Box>
            {/* <Text fontSize="xl" fontWeight="semibold" mb="8">
                Product details
            </Text> */}
            {phase === "confirmData" ? (
                <Flex mb="4" flexWrap="wrap" justifyContent="space-between">
                    <Flex>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Título:
                            </FormLabel>
                            <Text>{titleValue}</Text>
                        </FormControl>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Situação:
                            </FormLabel>
                            <Text>{situationValue}</Text>
                        </FormControl>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Data de Inicio:
                            </FormLabel>
                            <Text>{beginDateValue}</Text>
                        </FormControl>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Data do Fim:
                            </FormLabel>
                            <Text>{endDateValue}</Text>
                        </FormControl>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Tipo de nota:
                            </FormLabel>
                            <Text>{gradeTypeValue}</Text>
                        </FormControl>{" "}
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Prêmio:
                            </FormLabel>
                            <Text>{prizesValue}</Text>
                        </FormControl>
                    </Flex>
                    <Flex>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                            w="400px"
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Critérios de avaliação:
                            </FormLabel>
                            <Text>{ratingStandartValue.join(", ")}</Text>
                        </FormControl>
                    </Flex>
                    <Flex>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                            w="600px"
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Juízes:
                            </FormLabel>
                            <Text>{judgesValue.join(", ")}</Text>
                        </FormControl>
                    </Flex>
                    <Flex>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                            w="600px"
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Notas:
                            </FormLabel>
                            <Flex flexDirection="column">
                                <Table variant="simple">
                                    <Thead>
                                        <Tr>
                                            <Th>Equipe</Th>
                                            <Th>Visuals</Th>
                                            <Th>Pitch</Th>
                                            <Th>Code</Th>
                                        </Tr>
                                    </Thead>
                                    <Tbody>
                                        {gradesValue.map((grade, index) => (
                                            <Tr key={index}>
                                                <Td>{grade.teamName}</Td>
                                                <Td>{grade.visuals}</Td>
                                                <Td>{grade.pitch}</Td>
                                                <Td>{grade.code}</Td>
                                            </Tr>
                                        ))}
                                    </Tbody>
                                </Table>
                            </Flex>
                        </FormControl>
                    </Flex>{" "}
                    <Flex>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                            w="600px"
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Regras:
                            </FormLabel>
                            <Text>{rulesValue}</Text>
                        </FormControl>
                    </Flex>{" "}
                    <Flex>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                            w="600px"
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Cronograma:
                            </FormLabel>
                            <Text>{scheduleValue}</Text>
                        </FormControl>
                    </Flex>{" "}
                    <Flex>
                        <FormControl
                            mb="4"
                            flex={["1", "auto", "auto"]}
                            mr={["0", "6", "6"]}
                            w="600px"
                        >
                            <FormLabel
                                htmlFor="titleValue"
                                mb="1"
                                fontWeight="semibold"
                                color="gray.600"
                            >
                                Termos e condições:
                            </FormLabel>
                            <Text>{termsAndConditionsValue}</Text>
                        </FormControl>
                    </Flex>
                </Flex>
            ) : phase === "metaMaskLogin" ? (
                <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    mt="60px"
                    mb="60px"
                >
                    <ConnectButton />
                </Flex>
            ) : phase === "sendToBlockchain" ? (
                loading === "hash" ? (
                    <Flex
                        flexWrap="wrap"
                        justifyContent="center"
                        mt="60px"
                        mb="60px"
                    >
                        {" "}
                        criando hash....
                    </Flex>
                ) : (
                    <Flex
                        flexWrap="wrap"
                        justifyContent="center"
                        mt="60px"
                        mb="60px"
                    >
                        {" "}
                        enviando....
                    </Flex>
                )
            ) : (
                <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    mt="60px"
                    mb="60px"
                    fontSize="36px"
                    textAlign="center"
                >
                    Parabéns! Você concluiu o envio para blockchain{" "}
                    <MdCheckCircle
                        style={{
                            fontSize: "106px",
                            color: "green",
                            marginLeft: "10px",
                            marginTop: "26px",
                        }}
                    />
                </Flex>
            )}
            <Flex
                mb="2"
                flexWrap="wrap"
                justifyContent="center" // Centralizando horizontalmente
                alignItems="center" // Centralizando verticalmente
            >
                {" "}
                {phase !== "sended" && (
                    <Button
                        type="button"
                        bg="red.500"
                        _hover={{ bg: "red.600" }}
                        color="white"
                        fontWeight="semibold"
                        py="2"
                        px="24"
                        mr="16px"
                        rounded="md"
                        onClick={() => setPhase("confirmData")}
                    >
                        Cancelar
                    </Button>
                )}
                {phase === "confirmData" && (
                    <Button
                        type="button"
                        bg="blue.500"
                        _hover={{ bg: "blue.600" }}
                        color="white"
                        fontWeight="semibold"
                        py="2"
                        px="24"
                        rounded="md"
                        onClick={() => setPhase("metaMaskLogin")}
                    >
                        Confirmar dados
                    </Button>
                )}
                {phase === "metaMaskLogin" && (
                    <Button
                        type="button"
                        bg="green.500"
                        _hover={{ bg: "green.600" }}
                        color="white"
                        fontWeight="semibold"
                        py="2"
                        px="24"
                        rounded="md"
                        onClick={() => {
                            setPhase("sendToBlockchain");
                            createHashAndSendToBlockchain(wholeObject);
                        }}
                    >
                        Enviar dados para blockchain
                    </Button>
                )}
                {phase === "sendToBlockchain" && (
                    <Button
                        type="button"
                        bg="gray.500"
                        _hover={{ bg: "gray.600" }}
                        color="white"
                        fontWeight="semibold"
                        py="2"
                        px="24"
                        rounded="md"
                        onClick={() => {}}
                        isLoading
                    >
                        Enviando...
                    </Button>
                )}
                {phase === "sended" && (
                    <Button
                        type="button"
                        bg="blue.500"
                        _hover={{ bg: "blue.600" }}
                        color="white"
                        fontWeight="semibold"
                        py="2"
                        px="24"
                        rounded="md"
                        onClick={() => {
                            setPhase("confirmData");
                        }}
                    >
                        Concluir
                    </Button>
                )}
            </Flex>
        </Box>
    );
};

export default View;
