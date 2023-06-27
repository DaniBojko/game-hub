import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchSelector = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <BsSearch></BsSearch>
      </InputLeftElement>
      <Input
        borderRadius={20}
        type="search"
        variant="filled"
        placeholder="Search games..."
      />
    </InputGroup>
  );
};

export default SearchSelector;
