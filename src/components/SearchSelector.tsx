import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (text: string) => void;
}

const SearchSelector = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault();

        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch></BsSearch>
        </InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          type="search"
          variant="filled"
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchSelector;
