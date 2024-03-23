import {
    Button,
    Container,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Image as ChakraImage,
    Flex,
    Text,
    Box,
    HStack,
} from "@chakra-ui/react";
import React, { useState, ChangeEvent, useEffect } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import View from "../components/View";
import Header from "../components/Header";

export default function Home() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [products, setProducts] = useState<any[]>([
        {
            title: "Winter Event",
            situation: "Inscrições abertas",
            beginDate: "06/09/2024",
            endDate: "06/10/2024",
            ratingStandart: ["Visuals", "Pitch", "Code"],
            gradeType: "1-5",
            judges: ["Alex", "Alan", "Charles"],
            teams: ["team 545", "team 523", "team 65", "team 345"],
            grades: [
                { teamName: "team 545", visuals: "", pitch: "", code: "" },
                { teamName: "team 523", visuals: "", pitch: "", code: "" },
                { teamName: "team 65", visuals: "", pitch: "", code: "" },
                { teamName: "team 345", visuals: "", pitch: "", code: "" },
            ],
            rules: "TBA",
            prizes: "10.000 usd",
            schedule: "TBA",
            termsAndConditions: "TBA",
        },
        {
            title: "Summer Event",
            situation: "Aguardando notas",
            beginDate: "06/09/2024",
            endDate: "06/10/2024",
            ratingStandart: ["Visuals", "Pitch", "Code"],
            gradeType: "1-5",
            judges: ["Alex", "Alan", "Charles"],
            teams: ["team 545", "team 523", "team 65", "team 345"],
            grades: [
                { teamName: "team 545", visuals: "", pitch: "", code: "" },
                { teamName: "team 523", visuals: "", pitch: "", code: "" },
                { teamName: "team 65", visuals: "", pitch: "", code: "" },
                { teamName: "team 345", visuals: "", pitch: "", code: "" },
            ],
            rules: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            prizes: "10.000 usd",
            schedule: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            termsAndConditions:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu libero non libero consectetur fermentum. Vivamus vel neque et lectus rutrum semper.",
        },
    ]);
    const [CRUDMode, setCRUDMode] = useState<string>("none");

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSave = () => {
        console.log("Dados salvos!");
    };

    return (
        <Box minW="full" bg="gray.100" h="100vh">
            <Header />
            <Flex justify="center" mt="5" gap="5" p={6}>
                <Box
                    p="6"
                    rounded="16px"
                    shadow="md"
                    bg="white"
                    w="60%"
                    ml="22px"
                >
                    <Flex justify="space-between" align="center" mb="4">
                        <Text fontSize="2xl" fontWeight="semibold">
                            Eventos
                        </Text>
                    </Flex>
                    <Table variant="simple" size="md">
                        <Thead>
                            <Tr>
                                <Th>Titulo</Th>
                                <Th>Situação</Th>
                                <Th textAlign="center">Ações</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {products.length === 0 ? (
                                <Tr>
                                    <Td colSpan={4} textAlign="center" py="6">
                                        Você ainda não criou nenhum evento :(
                                    </Td>
                                </Tr>
                            ) : (
                                products.map((product, index) => (
                                    <Tr key={index}>
                                        <Td>{product.title}</Td>
                                        <Td>{product.situation}</Td>
                                        <Td textAlign="center">
                                            <HStack
                                                spacing={2}
                                                justify="center"
                                            >
                                                <Button
                                                    colorScheme="blue"
                                                    size="sm"
                                                    leftIcon={<FaEye />}
                                                >
                                                    View
                                                </Button>
                                                <Button
                                                    colorScheme="orange"
                                                    size="sm"
                                                    leftIcon={<FaEdit />}
                                                    onClick={() =>
                                                        setCRUDMode("edit")
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                                <Button
                                                    colorScheme="red"
                                                    size="sm"
                                                    leftIcon={<FaTrash />}
                                                    onClick={() =>
                                                        setCRUDMode("create")
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                            </HStack>
                                        </Td>
                                    </Tr>
                                ))
                            )}
                        </Tbody>
                    </Table>
                </Box>
                <View
                    titleValue={products[0].title}
                    situationValue={products[0].situation}
                    beginDateValue={products[0].beginDate}
                    endDateValue={products[0].beginDate}
                    ratingStandartValue={products[0].ratingStandart}
                    gradeTypeValue={products[0].gradeType}
                    judgesValue={products[0].judges}
                    teamsValue={products[0].teams}
                    gradesValue={products[0].grades}
                    rulesValue={products[0].rules}
                    prizesValue={products[0].prizes}
                    scheduleValue={products[0].schedule}
                    termsAndConditionsValue={products[0].termsAndConditions}
                    onSave={handleSave}
                    wholeObject={products[0]}
                />
            </Flex>
        </Box>
    );
}
