import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score >= 80 ? "green" : score >= 60 ? "orange" : "red";
  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius="5px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
