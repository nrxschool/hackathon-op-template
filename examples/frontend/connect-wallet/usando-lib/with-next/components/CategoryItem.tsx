import { Flex, Box, Text } from "@chakra-ui/react";
import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaHeart,
    FaBell,
    FaCog,
    FaEnvelope,
} from "react-icons/fa";

interface IconData {
    name: string;
    icon?: JSX.Element;
}

const CircleIcon: React.FC<IconData> = ({ name, icon }) => {
    return (
        <Box textAlign="center" mx={4}>
            <Box
                // bg="gray.200"
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

// const IconCircleList: React.FC = () => {
//     const iconsData: IconData[] = [
//         { name: "Home", icon: <FaHome /> },
//         { name: "User", icon: <FaUser /> },
//         { name: "Work", icon: <FaBriefcase /> },
//         { name: "Favorite", icon: <FaHeart /> },
//         { name: "Notifications", icon: <FaBell /> },
//         { name: "Settings", icon: <FaCog /> },
//         { name: "Messages", icon: <FaEnvelope /> },
//     ];

//     return (
//         <Flex justifyContent="center" mt={8}>
//             {iconsData.map((item, index) => (
//                 <CircleIcon key={index} data={item} />
//             ))}
//         </Flex>
//     );
// };

// export default IconCircleList;
