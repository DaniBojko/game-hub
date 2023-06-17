import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <HStack>
      <Switch
        colorScheme="blue"
        isChecked={isDark}
        onChange={toggleColorMode}
      ></Switch>
      <Text>{isDark ? "Light Mode" : "Dark Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
