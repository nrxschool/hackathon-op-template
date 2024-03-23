import { Box, Flex, Image, Text, Icon, Button } from "@chakra-ui/react";
import { BsFillPeopleFill } from "react-icons/bs";

interface CustomCardProps {
    imageSrc: string;
    logoSrc: string;
    title: string;
    participants: number;
    duration: string;
    buttonText: string;
}

const CustomCard: React.FC<CustomCardProps> = ({
    imageSrc,
    logoSrc,
    title,
    participants,
    duration,
    buttonText,
}) => {
    return (
        <Box boxShadow="md" borderRadius="md" overflow="hidden" bg="white">
            <Flex position="relative">
                <Image
                    src={imageSrc}
                    alt="Card Image"
                    objectFit="cover"
                    w="100%"
                    h="200px"
                />
                <Box position="absolute" top={2} left={2}>
                    <Image src={logoSrc} alt="Logo" boxSize="40px" />
                </Box>
            </Flex>
            <Flex
                direction="column"
                p={4}
                alignItems="center"
                display="flex"
                justifyContent="center"
            >
                <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={2}>
                    {title}
                </Text>
                <Flex justifyContent="center" alignItems="center" mb={2}>
                    <BsFillPeopleFill />
                    <Text ml="6px">{participants} pessoas</Text>
                </Flex>
                <Text textAlign="center" mb={4}>
                    Termina em: {duration}
                </Text>
                <Button colorScheme="blue" variant="solid" w="160px">
                    {buttonText}
                </Button>
            </Flex>
        </Box>
    );
};

export default CustomCard;
