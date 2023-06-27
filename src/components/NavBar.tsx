import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchSelector from "./SearchSelector";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="5px 15px 0" paddingLeft={3}>
      <Image src={logo} boxSize="60px"></Image>
      <SearchSelector></SearchSelector>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
