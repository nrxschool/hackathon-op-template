import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Text,
    Tbody,
    Table,
    Tr,
    Td,
    Th,
    Thead,
} from "@chakra-ui/react";

import crypto from "crypto-js";
import { MdCheckCircle } from "react-icons/md";
import { Web3 } from "web3";
import dotenv from "dotenv";
import abi from "../service/abi.json";

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
    const [connectedAccount, setConnectedAccount] = useState("null");
    const [seeMore, setSeeMore] = useState(false);

    const urlProvider = process.env.URL_PROVIDOER;
    const contractAdress = process.env.CONTRACT_ADDRESS;

    const web3 = new Web3(urlProvider);

    const contractAbi = abi;
    const contractAddress = contractAdress;

    const contractInstance = new web3.eth.Contract(
        contractAbi,
        contractAddress
    );

    function createHashAndSendToBlockchain(obj: any) {
        const jsonString = JSON.stringify(obj);

        const hash = crypto.SHA256(jsonString);

        setHashValue("0x" + hash.toString(crypto.enc.Hex));

        setTimeout(() => {
            setLoading("blockchain");
            sendHashToBlockchain("0x" + hash);
        }, 4000);
    }
    console.log("Hash", hashValue);

    let hashSent = false;

    dotenv.config();

    const sendHashToBlockchain = async (hashedData: any) => {
        try {
            if (!hashSent) {
                const accounts = await web3.eth.getAccounts();
                const account = accounts[0];
                console.log("contas", connectedAccount);

                const transaction = await contractInstance.methods
                    .addCompetitionResult("Nome da Competição", hashedData)
                    .send({
                        from: connectedAccount,
                        gas: web3.utils.toHex(200000), // Converta o gas para formato hexadecimal
                    });

                console.log("Transação confirmada:", transaction);

                setTimeout(() => {
                    setLoading("hash");
                    setPhase("sended");
                    hashSent = true; // Atualiza o status para indicar que o hash foi enviado
                }, 4000);
            }
        } catch (error) {
            console.error("Erro ao enviar transação:", error);
        }
    };

    const accountAddress = process.env.ACCOUNT_ADDRESS;
    const privateKey = process.env.PRIVATE_KEY;

    console.log(accountAddress);
    console.log(privateKey);

    async function connectMetamask() {
        if (window.ethereum) {
            const web3 = new Web3(window.ethereum);

            await window.ethereum.request({ method: "eth_requestAccounts" });

            const accounts = await web3.eth.getAccounts();

            setConnectedAccount(accounts[0]);
        } else {
            alert("Please download metamask");
        }
    }

    return (
        <Box
            p="5"
            rounded="md"
            shadow="md"
            bg="white"
            w={["full", "80%", "40%"]}
            mx="auto"
            mb="10"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            borderRadius="18px"
        >
            <Text fontSize="2xl" fontWeight="semibold" mb="4" mt="2">
                {phase === "confirmData"
                    ? "Iniciar evento e enviar para blockchain"
                    : phase === "metaMaskLogin"
                    ? "Efetue login na MetaMask"
                    : "Quase la"}
            </Text>
            <Box borderBottom="1px" borderColor="gray.400" mb="6" pt="6"></Box>

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
                    {seeMore && (
                        <Box>
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
                                        Cronograma:
                                    </FormLabel>
                                    <Text>{scheduleValue}</Text>
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
                                        Termos e condições:
                                    </FormLabel>
                                    <Text>{termsAndConditionsValue}</Text>
                                </FormControl>
                            </Flex>
                        </Box>
                    )}{" "}
                    <Flex>
                        <Button onClick={() => setSeeMore(!seeMore)}>
                            {seeMore ? "Ver menos" : "Ver mais"}
                        </Button>
                    </Flex>
                </Flex>
            ) : phase === "metaMaskLogin" ? (
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    mt="60px"
                    mb="60px"
                >
                    {connectedAccount === "null" ? (
                        <Button
                            onClick={() => connectMetamask()}
                            bg="orange"
                            w="200px"
                        >
                            Connect to Metamask
                        </Button>
                    ) : (
                        <Button bg="orange" w="200px">
                            Conectado{" "}
                        </Button>
                    )}
                    {/* <Box>{connectedAccount}</Box> */}
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
                justifyContent="center"
                alignItems="center"
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
