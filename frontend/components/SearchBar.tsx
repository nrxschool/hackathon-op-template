import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import React from "react";

interface SearchBarProps {
    onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <InputGroup>
            <InputLeftElement pointerEvents="none">
                <FaSearch color="gray.500" />
            </InputLeftElement>
            <Input
                type="text"
                placeholder="Search products..."
                onChange={onSearch}
                border="1px"
                borderColor="gray.300"
                rounded="md"
                w="200px"
            />
        </InputGroup>
    );
};

export default SearchBar;
