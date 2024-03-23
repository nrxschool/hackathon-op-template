import { Box, Text } from "@chakra-ui/react";

interface IconData {
    name: string;
    icon?: JSX.Element;
}

const CircleIcon: React.FC<IconData> = ({ name, icon }) => {
    return (
        <Box textAlign="center" mx={4}>
            <Box
                borderRadius="full"
                p={4}
                mb={2}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w="120px"
                h="120px"
                border="1px solid #D0D0D0"
                style={{ fontSize: "40px" }}
            >
                {icon}
            </Box>
            <Text>{name}</Text>
        </Box>
    );
};
export default CircleIcon;
