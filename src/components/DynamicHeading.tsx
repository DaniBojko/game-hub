import { Heading } from "@chakra-ui/react";
import { QuerySelector } from "../App";

interface Props {
  heading: QuerySelector;
}

const DynamicHeading = ({ heading }: Props) => {
  const a = heading.genre?.name;
  const b = heading.platform?.name;

  const c = (b || "") + " " + (a || "") + " Games";

  console.log(c);

  return (
    <Heading fontSize="5xl" marginBottom={5} as="h1">
      {c}
    </Heading>
  );
};

export default DynamicHeading;
