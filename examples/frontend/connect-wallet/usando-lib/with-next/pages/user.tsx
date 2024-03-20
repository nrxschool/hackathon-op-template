import {
    ChakraProvider,
    Box,
    Flex,
    Input,
    Button,
    Heading,
    Text,
    Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../public/images/logo.png";
import Image from "next/image";
import Navbar from "../components/Navbar";
import CircleIcon from "../components/CategoryItem";
import { FaPaintBrush, FaMoneyBillWave, FaTree } from "react-icons/fa";
import { SiHiveBlockchain } from "react-icons/si";
import { GiTeacher, GiHealthNormal } from "react-icons/gi";
import { MdGames, MdOutlineEmojiPeople } from "react-icons/md";
import CustomCard from "../components/Card";
import banner from "../public/images/banner.png";

const UserPage = () => {
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null); // Estado para armazenar a conta selecionada

    const handleSelectAccount = (accountType: string) => {
        setSelectedAccount(accountType);
    };
    const cardsArray: { key: number }[] = Array.from(
        { length: 12 },
        (_, index) => ({
            key: index,
        })
    );
    const iconsData = [
        { name: "Arte e Criatividade", icon: <FaPaintBrush /> },
        { name: "Blockchain", icon: <SiHiveBlockchain /> },
        { name: "Educação e Aprendizado", icon: <GiTeacher /> },
        { name: "Games", icon: <MdGames /> },
        { name: "Mercado Financeiro", icon: <FaMoneyBillWave /> },
        { name: "Saúde", icon: <GiHealthNormal /> },
        { name: "Social", icon: <MdOutlineEmojiPeople /> },
        { name: "Sustentabilidade", icon: <FaTree /> },
    ];
    // maxW={1475}
    return (
        <>
            <Navbar />{" "}
            <Box maxW={1375} mx="auto">
                <Flex
                    // justifyContent="center"
                    mt={8}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    {" "}
                    <Box mx="auto" mb="22px" mt="16px">
                        <Image src={banner} alt="Card Image" height={260} />
                    </Box>
                    <Flex justifyContent="center" mt={8}>
                        {iconsData.map((item, index) => (
                            <CircleIcon
                                key={index}
                                icon={item.icon}
                                name={item.name}
                            />
                        ))}
                    </Flex>{" "}
                    <Flex mt={28} borderBottom="4px solid #f1f1f1">
                        <Box
                            minW={1275}
                            mx="auto"
                            justifyContent="space-between"
                            mb={2}
                            px={20}
                        >
                            <Select
                                placeholder="Remoto"
                                variant="unstyled"
                                fontWeight="bold"
                                fontSize="20px"
                                width="200px"
                                mb="-70px"
                                style={{ pointerEvents: "none" }}
                            >
                                {" "}
                                <option value="Presencial">Presencial</option>
                            </Select>
                            <Flex justifyContent="flex-end">
                                {" "}
                                {/* Use um Flex aninhado para os dois Selects à direita */}
                                <Box mx={2}>
                                    <Text mb="6px">Filtrar por</Text>
                                    <Select
                                        placeholder="Inscrições abertas"
                                        style={{ pointerEvents: "none" }}
                                    ></Select>
                                </Box>
                                <Box mx={2}>
                                    <Text mb="6px">Ordenar por</Text>
                                    <Select
                                        placeholder="Relevância"
                                        style={{ pointerEvents: "none" }}
                                    >
                                        <option value="option2">Prêmio</option>
                                        <option value="option3">
                                            Quantidade de inscritos
                                        </option>
                                    </Select>
                                </Box>
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex
                        maxW={1375}
                        flexWrap="wrap"
                        gap={6}
                        mt={16}
                        justifyContent="center"
                    >
                        {cardsArray.map((item) => (
                            <CustomCard
                                key={item.key}
                                imageSrc="https://images.pexels.com/photos/19451448/pexels-photo-19451448/free-photo-of-adulto-anime-bitcoin-blockchain.jpeg"
                                logoSrc="https://img.freepik.com/vetores-gratis/template-logo-abstract-marca_1043-174.jpg?t=st=1710964563~exp=1710968163~hmac=1825fa0c973cdc7b7fe011fd14a729349f9abd2b01e5e2d69f61d8f7e06ac4ed&w=740"
                                title="Título do Evento"
                                participants={50}
                                duration="2 meses e tal"
                                buttonText="Inscrever-se"
                            />
                        ))}
                    </Flex>
                </Flex>{" "}
            </Box>
        </>
    );
};

export default UserPage;
